// import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Images
import Flag from "../assets/images/flag_az.png";

// Icons
import { RxTriangleDown } from "react-icons/rx";
import { BsFillBasketFill } from "react-icons/bs";

const HeaderTop = () => {
  const { quantity, total } = useSelector((store) => store.basket);

  // console.log(basketItems);

  return (
    <div className="header-top">
      <div className="container">
        <div className="row">
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
            <div className="cart-box">
              <BsFillBasketFill className="basket-icon" />
              <span className="count">{quantity}</span>
              <p className="total">{total}₼</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
