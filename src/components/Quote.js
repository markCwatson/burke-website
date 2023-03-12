import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import "../css/Quote.css";

function Quote() {
  const form = useRef();
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

  const sendEmail = (e) => {
    e.preventDefault();

    // Note:
    // Email doesn't work because I am not providing the correct env variables.
    // (But it does work when the ids below are replaces with process.env.<id>)
    // For security, we cannot store these variables on frontend.
    // Will create a simple node/express-based backend.
    emailjs
      .sendForm("service id", "template id", form.current, "public key")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    console.log(e.result);
    handleFormSubmit(e); // or e.target.reset();
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
            <form ref={form} onSubmit={sendEmail}>
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
              <button className="quote-submit-btn" type="submit">
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
