import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../Styles/ContactStyle.css";

const ContactSection = (props) => {
  const { title, description, phone, email, location } = props;

  return (
    <div className="body-container">
      <div className="container">
        <main className="row">
          <section className="col left">
            <div className="contactTitle">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <div className="contactInfo">
              <div className="iconGroup">
                <div className="icon">
                  <i>
                    <FaPhone />
                  </i>
                </div>
                <div className="details">
                  <span>Phone</span>
                  <span>{phone}</span>
                </div>
              </div>
              <div className="iconGroup">
                <div className="icon">
                  <i>
                    <FaEnvelope />
                  </i>
                </div>
                <div className="details">
                  <span>Email</span>
                  <span>{email}</span>
                </div>
              </div>
              <div className="iconGroup">
                <div className="icon">
                  <i>
                    <FaMapMarkerAlt />
                  </i>
                </div>
                <div className="details">
                  <span>Location</span>
                  <span>{location}</span>
                </div>
              </div>
            </div>
            <div className="socialMedia">
              {/* Replace the social media icons with React Icons if available */}
              {/* For example, use FaFacebook for Facebook icon */}
              {/* Import other social icons from react-icons as needed */}
            </div>
          </section>
          <section className="col right">
            <form className="messageForm">
              <div className="inputGroup halfWidth">
                <input type="text" name="" required="required" />
                <label>Your Name</label>
              </div>
              <div className="inputGroup halfWidth">
                <input type="email" name="" required="required" />
                <label>Email</label>
              </div>
              <div className="inputGroup fullWidth">
                <input type="text" name="" required="required" />
                <label>Subject</label>
              </div>
              <div className="inputGroup fullWidth">
                <textarea required="required"></textarea>
                <label>Say Something</label>
              </div>
              <div className="inputGroup fullWidth">
                <button>Send Message</button>
              </div>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ContactSection;
