import "./Header.css";
import logo from "./Images/Logo.png";
import searchImage from "./Images/SearchImage.png";

import { Link, NavLink } from "react-router-dom";

export default function Header() {
  function searchHandle(element) {
    console.log(element.target.value);
  }
  return (
    <div className="header">
      <div className="headerUpper">
        <Link to="/" className="headerUpper_Logo">
          <img src={logo} alt="Logo" />
        </Link>

        <div className="headerUpper_BankName">JD Bank.co</div>

        <button className="headerUpper_AccountButton">Account</button>
      </div>

      <div className="headerLower">
        <ul className="headerLower_Nav">
          <li>
            <NavLink to="/Services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/ManagementTeam">Management Team</NavLink>
          </li>
          <li>
            <NavLink to="/About">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/CustomerSupport">Customer Support</NavLink>
          </li>
        </ul>

        <div className="headerLower_SearchBox_containter">
          <input
            className="headerLower_SearchBox"
            type="search"
            onChange={searchHandle}
          />
          <button className="headerLower_SearchBox_button">
            <img src={searchImage} />
          </button>
        </div>
      </div>
      <div className="headerDivider"></div>
    </div>
  );
}
