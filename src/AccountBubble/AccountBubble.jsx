import React from "react";
import AccountPopUp from "./AccountPopUp/AccountPopUp";
import LoginPageNewVersion from "./LoginPage/LoginPageNewVersion";

export default function AccountBubble() {
  return JSON.parse(localStorage.getItem("UserToken")) == false &&
    JSON.parse(localStorage.getItem("UserData")) == false ? (
    <LoginPageNewVersion />
  ) : (
    <AccountPopUp />
  );
}
