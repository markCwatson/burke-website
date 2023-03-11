import "../css/Background.css";
import "../css/Contact.css";

import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="background-image" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <img src="/burke-website/logo.png" alt="" className="contact-logo" />
          <ul>
            <li>1-902-818-8936</li>
            <li>bjbrenosplusinc@gmail.com</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
