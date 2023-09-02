import React, {useState} from "react";
import "./Styles/LoanPlans.css";
import Personal from "../icons/personal.png";
import HomeLoan from "../icons/loan.png";
import Mortgage from "../icons/mortgage-loan.png";
import LoanIcon from "../icons/loanicon.png";

export default function LoanPlans() {
    // State to control the visibility of individual popups
    const [showPersonalLoanPopup, setShowPersonalLoanPopup] = useState(false);
    const [showHomeLoanPopup, setShowHomeLoanPopup] = useState(false);
    const [showMortgagePopup, setShowMortgagePopup] = useState(false);

    // Function to show the popup for Personal Loans
    const handleViewPersonalLoanClick = () => {
        setShowPersonalLoanPopup(true);
    };

    // Function to show the popup for Home Loans
    const handleViewHomeLoanClick = () => {
        setShowHomeLoanPopup(true);
    };

    // Function to show the popup for Mortgages
    const handleViewMortgageClick = () => {
        setShowMortgagePopup(true);
    };

    // Function to close all popups
    const handleClosePopups = () => {
        setShowPersonalLoanPopup(false);
        setShowHomeLoanPopup(false);
        setShowMortgagePopup(false);
    };

    return (
        <div className="loan-plan">
            <div className="box-container-loan">
                <div className="box-above">
                    <div className="text-container">
                        <h2>Explore Our</h2>
                        <h1>Loan Plans</h1>
                        <p>
                            We're committed to helping you achieve your financial goals with
                            our range of carefully crafted loan plans
                        </p>
                        <img className="loan-icon" src={LoanIcon} alt="Icon"/>
                    </div>
                    <div className="loan-box">
                        <div className="box-content">
                            <img className="icon" src={Personal} alt="Icon"/>
                            <h3>Personal Loans</h3>
                            <button
                                className="view-more-button"
                                onClick={handleViewPersonalLoanClick}
                            >
                                View More
                            </button>
                        </div>
                    </div>
                    <div className="loan-box">
                        <div className="box-content">
                            <img className="icon" src={HomeLoan} alt="Icon"/>
                            <h3>Home Loans</h3>
                            <button
                                className="view-more-button"
                                onClick={handleViewHomeLoanClick}
                            >
                                View More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="box-bottom">
                    <div className="loan-box">
                        <div className="box-content">
                            <img className="icon" src={Mortgage} alt="Icon"/>
                            <h3>Mortgages</h3>
                            <button
                                className="view-more-button"
                                onClick={handleViewMortgageClick}
                            >
                                View More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popups */}
            {showPersonalLoanPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h1>Loan Plans</h1>
                        <p>"Personal Loans: Your Financial Solution" is a succinct
                            message that informs users that personal loans can serve as a
                            means to address their financial needs.</p>
                        <button className="ok-button" onClick={handleClosePopups}>
                            OK
                        </button>
                    </div>
                </div>
            )}

            {showHomeLoanPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h1>Home Loans</h1>
                        <p>"Home Loans: Turning Dreams into Reality" effectively
                            communicates that home loans can help individuals achieve
                            their dream of owning a home.</p>
                        <button className="ok-button" onClick={handleClosePopups}>
                            OK
                        </button>
                    </div>
                </div>
            )}

            {showMortgagePopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h1>Mortgages</h1>
                        <p>"Mortgages: Unlocking Homeownership Potential" is a concise
                            and impactful message that conveys the idea that mortgages are
                            a key to making homeownership achievable.</p>
                        <button className="ok-button" onClick={handleClosePopups}>
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
