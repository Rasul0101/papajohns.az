// import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

const Sauce = () => {
  // Store
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.food);
  const { quantity, total } = useSelector((state) => state.basket);

  // Data.map Item
  const [selectedItem, setSelectedItem] = useState(null);

  // Modals
  const [modal, setModal] = useState(false);
  const [cartModal, setCartModal] = useState(false);

  useEffect(() => {
    if (status === "idle") {
      dispatch(myData());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return (
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

  // Cart Modal
  const toggleCart = () => {
    setCartModal(!cartModal);
    setModal(false);
  };

  return (
    <>
      <Helmet>
        <title>Souslar | Pizza sousu | Sarımsaq sousu</title>
      </Helmet>
      <main style={{ minHeight: "450px" }}>
        {/* Cart Modal Start */}
        <Modal
          centered
          size="lg"
          isOpen={cartModal}
          toggle={toggleCart}
          style={{ width: "650px", borderRadius: "0rem" }}
        >
          <div className="modal-header">
            <h1 className="title">Səbət</h1>
            <div className="close-modal-btn" onClick={toggleCart}>
              Bağla
              <span>
                <IoMdCloseCircle />
              </span>
            </div>
          </div>
          <div className="modal-main">
            <p className="text">
              Səbətinizdə məhsulların sayı: <span>{quantity}</span>
            </p>
            <div className="product"></div>
          </div>
          <div className="modal-leg">
            <Link className="back-menu-btn" to="/papadias" onClick={toggleCart}>
              Menyuya keçİn
            </Link>
            <p className="total">Ümumi məbləğ: {total}₼</p>
          </div>
        </Modal>
        {/* Cart Modal End */}
        {/* Product Modal Start */}
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
              <div className="cart-box" onClick={toggleCart}>
                <BsFillBasketFill className="basket-icon" />
                <span className="count">{quantity}</span>
                <p className="total">{total}₼</p>
              </div>
              <div className="add-to-cart-btn">Səbətə at</div>
            </div>
          </div>
        </Modal>
        {/* Product Modal End */}

        {/* Foods Start */}
        <section className="foods">
          <div className="container">
            <div className="foods-row">
              {data.map((item) =>
                item.category === "Souslar" ? (
                  <div
                    key={item.id}
                    className="card"
                    style={{ height: "300px" }}
                  >
                    <div className="img" onClick={() => toggle(item)}>
                      <img src={item.img} alt="" />
                    </div>
                    <div className="title">
                      <p>{item.name}</p>
                      <div className="btn-choose" onClick={() => toggle(item)}>
                        Bunu seç
                      </div>
                    </div>
                    {/* <p className="composition">{item.composition}</p> */}
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

export default Sauce;
