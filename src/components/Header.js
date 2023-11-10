import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navbarClass = scrollPosition > 0 ? "backdrop-filter" : "";

  return (
    <div className={`navbar-parent ${navbarClass}`}>
      <div className="navbar">
        <a href="/" style={{ textDecoration: "none" }}>
          <div className="logo">
            <img src={logo} alt="modedomains logo" /> ModeDomains
          </div>
        </a>
        <div className="mobile-menu-icon close" onClick={toggleMenu}>
          {showMenu ? <FaTimes /> : <FaBars />}
        </div>
        <div className="nav-links">
          <a className="nav-link" href="https://docs.modedomains.xyz/">
            Get Started
          </a>
          <a className="nav-link" href="/profile">
            Documentation
          </a>
          <a className="nav-link" href="/profile">
            Roadmap
          </a>
          <a className="nav-link" href="/profile">
            Community
          </a>
        </div>
        <div className="cta-button">
          {/* <ConnectButton
            accountStatus={{
              smallScreen: "avatar",
              largeScreen: "full",
            }}
          /> */}
          {/* <button>Go to app</button> */}
        </div>
      </div>

      <div className={showMenu ? "mobile-menu show" : "mobile-menu"}>
        <div className="mobile_menu_link_parent">
          <a className="nav-link" href="https://docs.modedomains.xyz/">
            <span className="nav-text-animate">Docs</span>
          </a>
          <a className="nav-link" href="/profile">
            <span className="nav-text-animate">Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
