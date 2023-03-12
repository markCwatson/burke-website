import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Quote from "./Quote";

import "../css/Navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("navbar-responsive");
  };

  return (
    <>
      <header>
        <div className="navbar-logo-container">
          <a href="/#Home">
            <img src="/logo.png" alt="" className="navbar-logo" />
          </a>
        </div>
        <nav ref={navRef} className="navbar">
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
            className="nabar-mobile-btn navbar-btn-close"
            onClick={showNavBar}
          >
            <FaTimes />
          </button>
        </nav>
        <button className="nabar-mobile-btn" onClick={showNavBar}>
          <FaBars size={16} />
        </button>
      </header>
    </>
  );
}

export default Navbar;
