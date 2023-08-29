import React from "react";
import "./Styles/Services.css";
import Remittance from "../icons/Remittance.png";
import Utility from "../icons/utilityicon.png";
import Agriculture from "../icons/agriculture icon.png";
import Insurance from "../icons/insurance icon.png";

export default function Services() {
  return (
    <div className="best-services">
      <h1>Entirely the Best Services</h1>
      <p>Services that hightlights JD Bank</p>
      <div className="service-icons">
        <div className="services">
          <img className="icon" src={Remittance} alt="Icon" />
          <h3>Remittance</h3>
        </div>
        <div className="services">
          <img className="icon" src={Utility} alt="Icon" />

          <h3>Utility Services</h3>
        </div>
        <div className="services">
          <img className="icon" src={Insurance} alt="Icon" />

          <h3>Insurance</h3>
        </div>
        <div className="services">
          <img className="icon" src={Agriculture} alt="Icon" />

          <h3>Agriculture Services</h3>
        </div>
      </div>
    </div>
  );
}
