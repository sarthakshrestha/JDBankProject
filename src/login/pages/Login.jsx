import React from "react";
import Header from "../../Header/Header";
import LoginHeader from "./LoginHeader";

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
    </>
  );
}
