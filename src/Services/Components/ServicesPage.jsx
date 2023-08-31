import React from "react";
import AboutPicture from "./pictures/6237073.jpg";
import Establishment from "./pictures/PeopleTalking.jpg";
import InsurancePicture from "./pictures/26675.jpg";
import AgriculturePicture from "./pictures/8400.jpg";
import "./ServicesPage.css";

export default function ServicesPage() {
  return (
    <div className="about-container">
      <div className="about-section">
        <div className="about-content">
          <div className="about-image">
            <img src={AboutPicture} alt="Image" />
          </div>
          <div className="about-description">
            <h2>Remittance Services</h2>
            <p>
              Sending money to loved ones far away or receiving funds from
              abroad is easy with JD Bank. Our secure and quick remittance
              services ensure smooth transactions. You can trust us for
              competitive exchange rates and a user-friendly experience,
              connecting you to your global financial needs.
            </p>
          </div>
        </div>
        <div className="establishment-section">
          <div className="establishment-content">
            <div className="establishment-description">
              <h2>Utility Services</h2>
              <p>
                Life's simpler with JD Bank's utility services. Paying bills is
                convenient and straightforward. From electricity and water bills
                to internet and phone payments, we make it easy to manage your
                expenses. Enjoy the ease of handling your utilities all in one
                place with JD Bank.
              </p>
            </div>
            <div className="establishment-image">
              <img src={Establishment} alt="Image" />
            </div>
          </div>
        </div>
        <div className="about-content">
          <div className="about-image">
            <img src={InsurancePicture} alt="Image" />
          </div>
          <div className="about-description">
            <h2>Insurance Services:</h2>
            <p>
              Your peace of mind matters. JD Bank offers insurance plans to
              protect what's important. Our coverage includes health, life, and
              property, providing security against the unexpected. With flexible
              options and expert advice, JD Bank helps you make wise choices for
              a secure future.
            </p>
          </div>
        </div>
        <div className="establishment-section">
          <div className="establishment-content">
            <div className="establishment-description">
              <h2>Agriculture Services</h2>
              <p>
                For farmers and those in agriculture, JD Bank has specialized
                solutions to support your growth. Whether you need funding for
                crops, equipment, or agribusiness, we're here for you. Our team
                understands your unique needs and is ready to help you succeed
                in your agricultural ventures.
              </p>
            </div>
            <div className="establishment-image">
              <img src={AgriculturePicture} alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
