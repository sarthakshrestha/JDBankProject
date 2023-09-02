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
          <li>
            <NavLink to="/ManagementTeam">Management Team</NavLink>
          </li>
          <li>
            <NavLink to="/AboutUsPage">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/FAQ">FAQ</NavLink>
          </li>
        </ul>

        <div className="headerLower_SearchBox_containter">
          <input
            className="headerLower_SearchBox"
            type="search"
            onChange={searchHandle}
            placeholder="Search..."
          />
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
          </svg>
        </div>
      </div>
      <div className="headerDivider"></div>
    </div>
  );
}
