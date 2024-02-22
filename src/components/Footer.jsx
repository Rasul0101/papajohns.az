// import React from 'react'
import { Link } from "react-router-dom";

// Images
import FooterImg from "../assets/images/footer-images.png";

// Icons
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { LiaTripadvisor } from "react-icons/lia";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-row">
          <div className="info">
            <p>© PJA 2024</p>
            <ul>
              <li>
                <Link>Haqqımızda</Link>
              </li>
              <li>
                <Link>Sual-Cavab</Link>
              </li>
              <li>
                <Link>Karyera</Link>
              </li>
              <li>
                <Link>Xəmir</Link>
              </li>
              <li>
                <Link> Papa Talk - Şərtlər və Qaydalar</Link>
              </li>
            </ul>
          </div>
          <div className="contact">
            <div className="images">
              <img src={FooterImg} alt="" />
            </div>
            <div className="social">
              <Link>
                <FaFacebookF />
              </Link>
              <Link>
                <FaTwitter />
              </Link>
              <Link>
                <FaInstagram />
              </Link>
              <Link>
                <LiaTripadvisor />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
