import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import insta_icon from "../Assets/instagram_icon.png";
import pin_icon from "../Assets/pintester_icon.png";
import wp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
          <div className="footer-icons-container">
            <img src={insta_icon} alt="" />
          </div>
          <div className="footer-icons-container">
            <img src={pin_icon} alt="" />
          </div>
          <div className="footer-icons-container">
            <img src={wp_icon} alt="" />
          </div>
        </div>
      </div>
      <div  className="footer-copyright">
        <hr/>
        <p>Copyright @2023 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
