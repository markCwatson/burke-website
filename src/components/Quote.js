import React, { useState } from "react";

import "../css/Quote.css";

function Quote() {
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

  return (
    <>
      <button
        className="quote-btn"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Get a Quote
      </button>

      {isModalOpen && (
        <div className="quote-modal-container">
          <div className="quote-modal">
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
              <button
                className="quote-submit-btn"
                type="submit"
                onClick={() => handleQuoteRequest()}
              >
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

export default Quote;
