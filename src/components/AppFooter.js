import React from "react";
import "../styles/Footer.css";

function AppFooter() {
  return (
    <div className="footer-main">
      <footer className="footer">
        <span>
          <a
            target="_blank"
            href="https://bridge.mode.network/"
            rel="noopener noreferrer"
          >
            Bridge
          </a>
          <a
            target="_blank"
            href="https://faucet.modedomains.xyz/"
            rel="noopener noreferrer"
          >
            Faucet
          </a>
          <a
            target="_blank"
            href="https://www.mode.network/"
            rel="noopener noreferrer"
          >
            MODE
          </a>
          <a
            target="_blank"
            href="https://sepolia.explorer.mode.network/"
            rel="noopener noreferrer"
          >
            Explorer
          </a>
        </span>
        <div className="social-media">
          Follow us on
          <svg
            viewBox="0,0,256,256"
            width="50px"
            height="50px"
            onClick={() => window.open("https://twitter.com/Mode_Domains")}
          >
            <g
              fill="#ffffff"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
            >
              <g transform="scale(5.12,5.12)">
                <path d="M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z"></path>
              </g>
            </g>
          </svg>
        </div>
      </footer>
    </div>
  );
}

export default AppFooter;
