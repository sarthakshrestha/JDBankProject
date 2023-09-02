import React from "react";
import logo from "./Logo.png";
import { Link } from "react-router-dom";
import Header from "../../Header/Header.jsx";
import "./sidebar.css";

function SideBar() {
  return (
    <div>
      {/* <Header /> */}
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="Logo" />{" "}
          {/* Replace with the actual path to your logo image */}
        </div>
        <h2>Username</h2>
        <ul>
          <li>
            <Link to="/User">
              <i className="fas fa-tachometer-alt"></i> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/User/Edit">
              <i className="fas fa-users"></i> Edit Profile
            </Link>
          </li>
          <li>
            <Link to="/User/Transaction">
              <i className="fas fa-exchange-alt"></i> Transactions
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
