import React, { useState, useRef } from "react";

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

    fetch("/api/v1/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${form.current["name"].value}`,
        number: `${form.current["phoneNumber"].value}`,
        email: `${form.current["email"].value}`,
        description: `${form.current["projectDescription"].value}`,
      }),
    }).then((response) => console.log(response));

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
