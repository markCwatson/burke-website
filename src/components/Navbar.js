import React, { useState, useEffect } from "react";

import "../css/Navbar.css";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [formValues, setFormValues] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    projectDescription: "",
  });

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 700) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

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

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const handleQuoteRequest = () => {
    // Send notification to company
    // show success screen
  };

  return (
    <>
      <nav className="navbar">
        <a href="/#Home">
          <img src="/logo.png" alt="" className="navbar-logo" />
        </a>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "navbar-menu"}>
          <li>
            <a href="/#services" onClick={closeMobileMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="/#projects" onClick={closeMobileMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="/#contact" onClick={closeMobileMenu}>
              Contact Us
            </a>
          </li>
          <li>
            {button && (
              <button
                className="btn-quote"
                onClick={() => setIsModalOpen(true)}
              >
                Get a Quote
              </button>
            )}
          </li>
        </ul>
      </nav>

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
