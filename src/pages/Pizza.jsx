// import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myData } from "../redux/features/foodSlice";
import { Helmet } from "react-helmet";
import { CircularProgress } from "@mui/material";
import { Modal } from "reactstrap";

// Icons
import { IoMdCloseCircle } from "react-icons/io";
import { BsFillBasketFill } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const Pizza = () => {
  // Store
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.food);
  const { quantity, total } = useSelector((state) => state.basket);

  // Data.map Item
  const [selectedItem, setSelectedItem] = useState(null);

  // Modals
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (status === "idle") {
      dispatch(myData());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return (
      <>
        <div
          style={{
            minHeight: "450px",
            textAlign: "center",
            paddingTop: "40px ",
          }}
        >
          <CircularProgress
            style={{ width: "150px", height: "150px" }}
            disableShrink
            color="success"
          />
        </div>
      </>
    );
  }

  if (status === "failed") {
    return <div>Error: Something went wrong!</div>;
  }

  // Product Modal
  const toggle = (item) => {
    setModal(!modal);
    setSelectedItem(item);
  };

  return (
    <>
      <Helmet>
        <title>
          Pizza | Pizzalar | Pizza sifarişi | Pizzaların çatdırılması
        </title>
      </Helmet>
      <main style={{ minHeight: "450px" }}>
        {/* Modal Start */}
        <Modal
          centered
          size="lg"
          isOpen={modal}
          toggle={() => toggle(selectedItem)}
          style={{ width: "400px" }}
          className="product-modal"
        >
          <div className="close-modal-btn" onClick={() => toggle(null)}>
            Bağla
            <span>
              <IoMdCloseCircle />
            </span>
          </div>
          <div className="modal-main">
            <img src={selectedItem?.img} alt="" />
            <h1 className="title">{selectedItem?.name}</h1>
            {/* <select className="select-box">  
              {selectedItem?.category === "Pizzalar"
                ? Object.entries(selectedItem?.price).map((item) => (
                    <option key={item} value="">
                      Mini pizza, 15sm - {item.xs} M
                    </option>
                  ))
                : "qaqa problem var"}
            </select> */}
            <select className="select-box">
              {/* <option value="">
                Mini pizza, 15sm - {selectedItem?.price?.xs} M
              </option>
              <option value="sm">
                Kiçik, 23sm - {selectedItem?.price?.sm} M
              </option>
              <option value="md">
                Orta, 30sm - {selectedItem?.price?.md} M
              </option>
              <option value="lg">
                Böyük, 35sm - {selectedItem?.price?.lg} M
              </option> */}
            </select>
            <div className="count-box">
              <div className="counter">
                <span className="decrement disable-dec">
                  <FaMinus />
                </span>
                <p className="count">1</p>
                <span className="increment">
                  <FaPlus />
                </span>
              </div>
              <p className="price">{selectedItem?.price}₼</p>
            </div>
            <div className="modal-leg">
              <div className="cart-box">
                <BsFillBasketFill className="basket-icon" />
                <span className="count">{quantity}</span>
                <p className="total">{total}₼</p>
              </div>
              <div className="add-to-cart-btn">Səbətə at</div>
            </div>
          </div>
        </Modal>
        {/* Modal End */}

        {/* Foods Start */}
        <section className="foods">
          <div className="container">
            <div className="foods-row">
              {data.map((item) =>
                item.category === "Pizzalar" ? (
                  <div key={item.id} className="card">
                    <div className="img" onClick={() => toggle(item)}>
                      <img src={item.img} alt="" />
                    </div>
                    <div className="title">
                      <p>{item.name}</p>
                      <div
                        className="btn-choose"
                        onClick={() => {
                          toggle(item);
                        }}
                      >
                        Bunu seç
                      </div>
                    </div>
                    <p className="composition">{item.composition}</p>
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </section>
        {/* Foods End */}
      </main>
    </>
  );
};

export default Pizza;
