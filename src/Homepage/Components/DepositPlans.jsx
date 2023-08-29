import React from "react";
import "./Styles/DepositPlans.css";

import DepositIcon from "../icons/depositplan.png";
import Certificate from "../icons/certificate.png";
import Piggy from "../icons/piggy hehe.png";
import FixedAccount from "../icons/fixed account.png";

export default function DepositPlans() {
  return (
    <div className="deposit-plan">
      <div className="box-container-deposit">
        <div className="box-above-deposit">
          <div className="deposit-box">
            <div className="box-content-deposit">
              <img className="icon-deposit" src={Piggy} alt="Icon" />
              <h3>Saving Account</h3>
              <button className="view-more-button">View More</button>
            </div>
          </div>
          <div className="deposit-box">
            <div className="box-content-deposit">
              <img className="icon-deposit" src={FixedAccount} alt="Icon" />
              <h3>Fixed Account</h3>
              <button className="view-more-button">View More</button>
            </div>
          </div>

          <div className="text-container-deposit">
            <h2>Explore our</h2>
            <h1>Deposit Plans</h1>
            <p>
              Discover the right plan for you and start your journey towards
              financial security and growth.
            </p>
            <img className="deposit-icon" src={DepositIcon} alt="Icon" />
          </div>
        </div>
        <div className="box-bottom-deposit">
          <div className="deposit-box">
            <div className="box-content-deposit">
              <img className="icon-deposit" src={Certificate} alt="Icon" />
              <h3>Certificate for Deposit</h3>
              <button className="view-more-button">View More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
