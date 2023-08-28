import React from "react";
import "./LandingPage.css";
import Money from "./Components/Money.jsx";
import Investment from "./Components/Investment.jsx";
import LoanPlans from "./Components/LoanPlans";
import DepositPlans from "./Components/DepositPlans";
import FAQSection from "./Components/FAQSection";
import Services from "./Components/Services";
import Header from "../Header/Header.jsx";
import ImageSlider from "../ImageSlider/ImageSlider.jsx";
import Footer from "../Footer/Footer.jsx";

export default function LandingPage() {
    return (
        <div className="App">
            <Header/>
            <ImageSlider/>
            <Money/>
            <hr className="separator-line"/>
            <Investment/>
            <hr className="separator-line"/>
            <LoanPlans/>
            <hr className="separator-line"/>
            <DepositPlans/>
            <hr className="separator-line"/>
            <FAQSection/>
            <hr className="separator-line"/>
            <Services/>
            <Footer/>
        </div>
    );
}
