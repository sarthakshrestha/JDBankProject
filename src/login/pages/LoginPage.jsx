import React from "react";
import LoginHeader from "../components/LoginHeader";
import Login from "../components/Login";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "./LoginPage.css";

export default function LoginPage() {
  return (
      <>
        <div className="whole-form">
          <LoginHeader
              heading="Login to your account"
              paragraph="Don't have an account yet? "
              linkName="Signup"
              linkUrl="/Registration"
          />

          <div className="form-container">
            <Login />
          </div>
        </div>
      </>
  );
}
