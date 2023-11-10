import React from "react";
import "../styles/Footer.css";
import modedark from "../assets/logoiconblack.png";
import twitterdark from "../assets/twitterdark.png";
import discorddark from "../assets/discorddark.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-main">
        <div className="social-icons">
          <img src={modedark} alt="mode domains" />
          <img src={twitterdark} alt="twitter mode domains" />
          <img src={discorddark} alt="discord mode domains" />
        </div>
        <div className="copyrights">
          <span>Copyright © 2023 MODE DOMAIN. All rights reserved.</span>
        </div>
        <div className="footer-navmenu">
          <ul>
            <li>Menu 1</li>
            <li>Menu 2</li>
            <li>Menu 3</li>
            <li>Menu 4</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
