import React, { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "../css/Navbar.css";

function Navbar() {
  const navRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    projectDescription: "",
  });

  const handleFormChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    setIsModalOpen(false);
    setFormValues({
      name: "",
      phoneNumber: "",
      email: "",
      projectDescription: "",
    });
  };

  const handleQuoteRequest = () => {
    // Send notification to company
    // show success screen
  };

  const showNavBar = () => {
    navRef.current.classList.toggle("navbar-responsive");
  };

  return (
    <>
      <header>
        <a href="/#Home">
          <img src="/logo.png" alt="" className="navbar-logo" />
        </a>
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
          <button
            className="navbar-btn-quote"
            onClick={() => {
              setIsModalOpen(true);
              showNavBar();
            }}
          >
            Get a Quote
          </button>
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

      {isModalOpen && (
        <div className="modal-container">
          <div className="modal">
            <h2>Get a Quote</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formValues.name}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formValues.phoneNumber}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="projectDescription">
                  Brief Project Description:
                </label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  value={formValues.projectDescription}
                  onChange={handleFormChange}
                  required
                ></textarea>
              </div>
              <button type="submit" onClick={() => handleQuoteRequest()}>
                Submit
              </button>
            </form>
          </div>
          <div className="overlay" onClick={() => setIsModalOpen(false)}></div>
        </div>
      )}
    </>
  );
}

export default Navbar;
