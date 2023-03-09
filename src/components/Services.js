import React, { useState } from "react";

import "../css/Background.css";
import "../css/Services.css";

function Services({ services }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selection, setSelection] = useState(null);

  function ServiceTile({ title, description, image }) {
    return (
      <div
        className="service-tile"
        id="services"
        onClick={() => {
          setIsModalOpen(true);
          setSelection({ title, description });
        }}
      >
        <img src={image} alt={title} />
        <div className="service-tile-content">{title}</div>
      </div>
    );
  }

  return (
    <div className="background-image" id="services">
      <div className="services-container">
        <h1>Explore our services</h1>
        <div className="service-tiles">
          {services.map((service) => (
            <ServiceTile key={service.title} {...service} />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-container">
          <div className="modal">
            <div className="modal-tile-content">
              <h2>{selection.title}</h2>
              <p>{selection.description}</p>
            </div>
          </div>
          <div className="overlay" onClick={() => setIsModalOpen(false)}></div>
        </div>
      )}
    </div>
  );
}

export default Services;
