import React from "react";
import "./Styles/Money.css";

import Deposit from "../icons/deposit.png";
import MoneyTransfer from "../icons/transfer.png";
import Withdraw from "../icons/withdraw.png";
import Payment from "../icons/paymeny.png";

export default function Money() {
  return (
    <div className="function-component">
      <div className="function-container">
        <div className="function-box">
          <div className="box-content-money">
            <img className="icon-money" src={MoneyTransfer} alt="Icon" />
            <h3>Money Transfer</h3>
          </div>
        </div>
        <div className="function-box">
          <div className="box-content-money">
            <img className="icon-money" src={Withdraw} alt="Icon" />
            <h3>Withdraw</h3>
          </div>
        </div>
        <div className="function-box">
          <div className="box-content-money">
            <img className="icon-money" src={Deposit} alt="Icon" />
            <h3>Bank Deposit</h3>
          </div>
        </div>
        <div className="function-box">
          <div className="box-content-money">
            <img className="icon-money" src={Payment} alt="Icon" />
            <h3>Mobile Payment</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
