import { useRef } from "react";
import "./Header.css";
import logo from "./Images/Logo.png";

import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";

export default function Header() {
  const accoutView = useRef(false);
  let currentLoc = useLocation();

  const navTo = useNavigate();

  function searchHandle(element) {
    console.log(element.target.value);
  }

  function accoutButtonHandler() {
    if (accoutView.current == true) {
      navTo(-1);
      accoutView.current = false;
    } else {
      currentLoc.pathname == "/"
          ? navTo("/Login")
          : navTo(currentLoc.pathname + "/Login");
      accoutView.current = true;
    }
  }

  return (
      <div className="header">
        <div className="headerUpper">
          <Link to="/" className="headerUpper_Logo">
            <img src={logo} alt="Logo" />
          </Link>

          <div className="headerUpper_BankName">JD Bank.co</div>

          <button
              className="headerUpper_AccountButton"
              onClick={accoutButtonHandler}
          >
            Account
          </button>
          <Outlet />
        </div>

        <div className="headerLower">
          <ul className="headerLower_Nav">
            <li>
              <NavLink to="/Services">Services</NavLink>
            </li>
            {/*<li>*/}
            {/*  <NavLink to="/ManagementTeam">Management Team</NavLink>*/}
            {/*</li>*/}
            <li>
              <NavLink to="/AboutUsPage">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/FAQ">FAQ</NavLink>
            </li>
          </ul>
        </div>
        <div className="headerDivider"></div>
      </div>
  );
}
