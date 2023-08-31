import React from "react";
import ReactDOM from "react-dom";
import Header from "../Header/Header.jsx";
import ServicesPage from "./Components/ServicesPage.jsx";
import Footer from "../Footer/Footer.jsx";

function ServiceMain() {
  return (
    <>
      <Header />
      <ServicesPage />
      <Footer />
    </>
  );
}

export default ServiceMain;
