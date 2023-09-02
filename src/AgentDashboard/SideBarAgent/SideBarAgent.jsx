import React from "react";
import "./sidebaragent.css";
import logo from "./Logo.png";
import { Link } from "react-router-dom";

function SideBarAgent() {
  return (
    <div>
      {/* <Header /> */}
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="Logo" />{" "}
          {/* Replace with the actual path to your logo image */}
        </div>
        <h2>Agent Name</h2>
        <ul>
          <li>
            <Link to="/Agent">
              <i className="fas fa-tachometer-alt"></i> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/Agent/DepositOrWithdraw">
              <i className="fas fa-exchange-alt"></i> Deposit Withdraw
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBarAgent;
