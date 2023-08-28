import React, { useState } from "react";
import "./Styles/FAQSection.css";

export default function FAQSection() {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
  return (
    <div className="faq-section">
      <div className="faq-header">
        <h1>How can we help you?</h1>
        <p>Services provided by JD Bank</p>
      </div>
      <div className="faq-box">
        <div className="faq-left">
          <p>I am looking for</p>
          <div className="faq-line"></div>
        </div>
        <div className="options">
          <p onClick={toggleOptions}>
            Available options{" "}
            <span className={`arrow ${showOptions ? "open" : ""}`}>▼</span>
          </p>
        </div>
      </div>
      {showOptions && (
        <div className="options-box">
          <ul className="options-list">
            <li>Loan Services</li>
            <li>Mortages</li>
            <li>Personal Loan</li>
          </ul>
        </div>
      )}
    </div>
  );
}
