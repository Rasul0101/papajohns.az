import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Modal } from "reactstrap";

// Images
import Flag from "../assets/images/flag_az.png";

// Icons
import { RxTriangleDown } from "react-icons/rx";
import { BsFillBasketFill } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";

const HeaderTop = () => {
  const [modal, setModal] = useState(false);
  const { quantity, total } = useSelector((state) => state.basket);

  const toggle = () => setModal(!modal);

  return (
    <>
      {/* Cart Modal */}
      <Modal
        centered
        size="lg"
        isOpen={modal}
        toggle={toggle}
        style={{ width: "650px", borderRadius: "0rem" }}
      >
        <div className="modal-header">
          <h1 className="title">Səbət</h1>
          <div className="close-modal-btn" onClick={toggle}>
            Bağla{" "}
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
          <Link className="back-menu-btn" to="/papadias" onClick={toggle}>
            Menyuya keçİn
          </Link>
          <p className="total">Ümumi məbləğ: {total}₼</p>
        </div>
      </Modal>
      {/* Cart Modal */}
      <div className="header-top">
        <div className="container">
          <div className="row-header-top">
            <ul className="left-list">
              <li>
                <Link className="li-item">Restoranlar</Link>
              </li>
              <li>
                <Link className="li-item">PapaBonus</Link>
              </li>
            </ul>
            <div className="right-list">
              <ul className="lang">
                <img src={Flag} alt="" />
                <span>Azərbaycanca</span>
                <RxTriangleDown style={{ fontSize: "30px" }} />
              </ul>
              <Link className="register">Giriş/Qeydiyyat</Link>
              <div className="cart-box" onClick={toggle}>
                <BsFillBasketFill className="basket-icon" />
                <span className="count">{quantity}</span>
                <p className="total">{total}₼</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
