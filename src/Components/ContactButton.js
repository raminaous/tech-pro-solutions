import React from "react";
import whatsapp from "../Images/WhatsApp.svg.png";
import "../Styles/ContactButton.css";

const ContactButton = () => {
  return (
    <div>
      <a href="#" class="float">
        <img className="my-float" src={whatsapp} alt="whatsapp" />
      </a>
    </div>
  );
};

export default ContactButton;
