import React from "react";
import "./Styles/LoanPlans.css";
import Personal from "../icons/personal.png";
import HomeLoan from "../icons/loan.png";
import Mortgage from "../icons/mortgage-loan.png";
import LoanIcon from "../icons/loanicon.png";

export default function LoanPlans() {
  return (
    <div className="loan-plan">
      <div className="box-container-loan">
        <div className="box-above">
          <div className="text-container">
            <h2>Explore Our</h2>
            <h1>Loan Plans</h1>
            <p>
              We're committed to helping you achieve your financial goals with
              our range of carefully crafted loan plans
            </p>
            <img className="loan-icon" src={LoanIcon} alt="Icon" />
          </div>
          <div className="loan-box">
            <div className="box-content">
              <img className="icon" src={Personal} alt="Icon" />
              <h3>Personal Loans</h3>
              <button className="view-more-button">View More</button>
            </div>
          </div>
          <div className="loan-box">
            <div className="box-content">
              <img className="icon" src={HomeLoan} alt="Icon" />
              <h3>Home Loans</h3>
              <button className="view-more-button">View More</button>
            </div>
          </div>
        </div>
        <div className="box-bottom">
          <div className="loan-box">
            <div className="box-content">
              <img className="icon" src={Mortgage} alt="Icon" />
              <h3>Mortgages</h3>
              <button className="view-more-button">View More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
