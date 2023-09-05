import "./AccountPopUp.css";
import { NavLink, useNavigate } from "react-router-dom";

export default function AccountPopUp() {
  const navTo = useNavigate();

  function logoutHandle() {
    localStorage.setItem("UserToken", JSON.stringify(false));
    localStorage.setItem("UserData", JSON.stringify(false));
    navTo("/");
  }

  return (
    <div className="AccountPopUpContainer">
      <h4 className="UserName">
        {JSON.parse(localStorage.getItem("UserData")).firstName +
          " " +
          JSON.parse(localStorage.getItem("UserData")).lastName}
      </h4>
      <h4 className="UserEmail">
        {JSON.parse(localStorage.getItem("UserData")).email}
      </h4>
      <hr></hr>
      <NavLink to="/user">DashBoard</NavLink>

      <button className="LogoutButton" onClick={logoutHandle}>
        Logout
      </button>
    </div>
  );
}
