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
        <a href="/burke-website/#Home">
          <img src="/burke-website/logo.png" alt="" className="navbar-logo" />
        </a>
        <nav ref={navRef} className="navbar">
          <a href="/burke-website/#services" onClick={showNavBar}>
            Services
          </a>
          <a href="/burke-website/#projects" onClick={showNavBar}>
            Projects
          </a>
          <a href="/burke-website/#contact" onClick={showNavBar}>
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
          <FaBars />
        </button>
      </header>
    </>
  );
}

export default Navbar;
