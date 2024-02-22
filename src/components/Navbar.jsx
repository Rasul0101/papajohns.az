// import React from 'react'
import { Link, NavLink } from "react-router-dom";

// Images
import Logo from "../assets/images/pj_logo.png";

// Icons
import { FaQuestion } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="container">
        <div className="bar-in">
          <Link to="/" className="logo">
            <img src={Logo} alt="" />
          </Link>
          <ul className="nav-list">
            <li>
              <NavLink to="/" className="list-item">
                Kampanİyalar
              </NavLink>
            </li>
            <li>
              <NavLink to="/papadias" className="list-item">
                Papadİas
              </NavLink>
            </li>
            <li>
              <NavLink to="/pizza" className="list-item">
                Pİzza
              </NavLink>
            </li>
            <li>
              <NavLink to="/lunch" className="list-item">
                Qəlyanaltı
              </NavLink>
            </li>
            <li>
              <NavLink to="/salad" className="list-item">
                Salat
              </NavLink>
            </li>
            <li>
              <NavLink to="/pasta" className="list-item">
                Pasta
              </NavLink>
            </li>
            <li>
              <NavLink to="/drink" className="list-item">
                İçkİ
              </NavLink>
            </li>
            <li>
              <NavLink to="/dessert" className="list-item">
                Desert
              </NavLink>
            </li>
            <li>
              <NavLink to="/sauce" className="list-item">
                Sous
              </NavLink>
            </li>
          </ul>
          <div className="gift">
            <p>0 bal</p>
            <span>
              <FaQuestion />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
