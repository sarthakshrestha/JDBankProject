import React from "react";

import "./Styles/Investment.css";
import MoneyArrow from "../icons/money-graph-with-up-arrow (1).png";
import Bonds from "../icons/bonds.png";
import RealEstate from "../icons/real-estate.png";

export default function Investment() {
  return (
    <div className="investment">
      <h1>Investment Sector</h1>
      <p>
        Unlock a world of financial possibilities with our diverse range of
        investment opportunities. Whether you’re a seasoned investor or just
        starting out on your financial journey, we have options tailored to your
        goals.
      </p>
      <div className="box-container">
        <div className="investment-box">
          <div className="box-content">
            <img className="icon" src={MoneyArrow} alt="Icon" />

            <h3>Stocks: Your Path to Ownership</h3>
            <button className="view-more-button">View More</button>
          </div>
        </div>
        <div className="investment-box">
          <div className="box-content">
            <img className="icon" src={Bonds} alt="Icon" />

            <h3>Bonds: Steady Income, Secure Future</h3>
            <button className="view-more-button">View More</button>
          </div>
        </div>
        <div className="investment-box">
          <div className="box-content">
            <img className="icon" src={RealEstate} alt="Icon" />
            <h3>Real Estate: Tangible Assets, Tangible Returns</h3>
            <button className="view-more-button">View More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
