import React from "react";
import LoginHeader from "../components/LoginHeader";
import Login from "../components/Login";
import Header from "../../Header/Header";

export default function LoginPage() {
  return (
    <>
      <Header />

      <LoginHeader
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="#"
      />
      <Login />
    </>
  );
}
