import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Quote from "./Quote";

import "../css/Navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("bjb-navbar-responsive");
  };

  return (
    <>
      <header>
        <div className="bjb-navbar-logo-container">
          <a href="/#Home">
            <img src="/logo.png" alt="" className="bjb-navbar-logo" />
          </a>
        </div>
        <nav ref={navRef} className="bjb-navbar">
          <a href="/#services" onClick={showNavBar}>
            Services
          </a>
          <a href="/#projects" onClick={showNavBar}>
            Projects
          </a>
          <a href="/#contact" onClick={showNavBar}>
            Contact Us
          </a>
          <Quote />
          <button
            className="bjb-navbar-mobile-btn bjb-navbar-btn-close"
            onClick={showNavBar}
          >
            <FaTimes />
          </button>
        </nav>
        <button className="bjb-navbar-mobile-btn" onClick={showNavBar}>
          <FaBars size={16} />
        </button>
      </header>
    </>
  );
}

export default Navbar;
