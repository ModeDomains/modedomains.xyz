import React from "react";
import "../styles/SecondSection.css";
import scicon1 from "../assets/sc-icon1.png";
import scicon2 from "../assets/sc-icon2.png";
import scicon3 from "../assets/sc-icon3.png";

function SecondSection() {
  return (
    <div className="sc-main">
      <div className="sc-left">
        <h2>Find Your Identity on the Rapidly Growing Mode Network</h2>
        <p>
          Mode Domains makes it easier for you to find, register & manage your
          unique identity
        </p>
      </div>
      <div className="sc-right">
        <div className="sc-right-item">
          <img src={scicon1} alt="yellow icon" />
          <span>
            Personalized ‘.mode’ handles that can be used across the Mode
            network
          </span>
        </div>{" "}
        <div className="sc-right-item">
          <img src={scicon2} alt="yellow icon" />
          <span>
            Smart Contract integration that ensures that transactions are
            accurately resolved on the blockchain
          </span>
        </div>{" "}
        <div className="sc-right-item">
          <img src={scicon3} alt="yellow icon" />
          <span>
            Resolver SDK for seamless integration into different decentralized
            applications on the blockchain
          </span>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
