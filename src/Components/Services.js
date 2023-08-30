import React from "react";
import "../Styles/Services.css";
import web from "../Images/MG_Devices_Mock_2019_resized.png";
import mobile from "../Images/port-final.png";

const Services = () => {
  return (
    <div id="#services" className="service-body">
      <div className="background-overlay">
        <h1>Our Services</h1>
      </div>

      <section className="pricing">
        <div className="card-wrapper">
          <div className="card-header">
            <img src={web} alt="" />
            <h2>Website Development</h2>
          </div>
          <div className="card-detail">
            <p>- Custom web application development</p>
            <p>- E-commerce development</p>
            <p>- Responsive web design</p>
            <p>- Web maintenance and support</p>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card-header">
            <img src={mobile} alt="" />
            <h2>Mobile App Development</h2>
          </div>
          <div className="card-detail">
            <p>- Cross-platform app development</p>
            <p>- App prototyping and design:</p>
            <p>- App testing and quality assurance</p>
            <p>- App deployment and maintenance</p>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card-header">
            <img src={web} alt="" />
            <h2>UI/UX Design</h2>
          </div>
          <div className="card-detail">
            <p>Test</p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
