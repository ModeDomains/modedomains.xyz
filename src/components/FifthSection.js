import React from "react";
import i8 from "../assets/8.png";
import i7 from "../assets/7.png";

import "../styles/FifthSection.css";
function FifthSection() {
  return (
    <div className="fifth-container">
      <div className="fifth-main">
        <h2>We tried, we tested & here's our testament</h2>
        <p>
          Our testnet story was a success, we received so much love from the
          users
        </p>
        <div className="fifth-details">
          <div className="fifth-item">
            <span className="fifth-count">28K+</span>
            <span className="fifth-label">Handles Claimed</span>
          </div>
          <div className="fifth-item">
            <span className="fifth-count">101 ETH</span>
            <span className="fifth-label">Collected</span>
          </div>
        </div>
      </div>
      <img src={i8} alt="mode domains" className="fifthsection-i8" />
      <div className="fifthsection-i7">
        <img src={i7} alt="mode domains" />
      </div>
    </div>
  );
}

export default FifthSection;
