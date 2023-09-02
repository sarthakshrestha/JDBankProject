import { useNavigate } from "react-router";
import "./AccountPopUp.css";
import { NavLink } from "react-router-dom";

export default function AccountPopUp() {
  const navTo = useNavigate();

  //Testing purpose Code
  // const data = {
  //   firstName: "Birajan",
  //   lastName: "Rajbhandari",
  //   email: "birajan@gmail.com",
  // };
  // localStorage.setItem("UserData", JSON.stringify(data));

  function logoutHandle() {
    localStorage.setItem("UserToken", JSON.stringify(""));
    localStorage.setItem("UserData", JSON.stringify(""));
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
