import React, {useState} from "react";
import "./Styles/DepositPlans.css";
import DepositIcon from "../icons/depositplan.png";
import Certificate from "../icons/certificate.png";
import Piggy from "../icons/piggy hehe.png";
import FixedAccount from "../icons/fixed account.png";

export default function DepositPlans() {
    // State to control the visibility of individual popups
    const [showSavingAccountPopup, setShowSavingAccountPopup] = useState(false);
    const [showFixedAccountPopup, setShowFixedAccountPopup] = useState(false);
    const [showCertificatePopup, setShowCertificatePopup] = useState(false);

    // Function to show the popup for Saving Account
    const handleViewSavingAccountClick = () => {
        setShowSavingAccountPopup(true);
    };

    // Function to show the popup for Fixed Account
    const handleViewFixedAccountClick = () => {
        setShowFixedAccountPopup(true);
    };

    // Function to show the popup for Certificate for Deposit
    const handleViewCertificateClick = () => {
        setShowCertificatePopup(true);
    };

    // Function to close all popups
    const handleClosePopups = () => {
        setShowSavingAccountPopup(false);
        setShowFixedAccountPopup(false);
        setShowCertificatePopup(false);
    };

    return (
        <div className="deposit-plan">
            <div className="box-container-deposit">
                <div className="box-above-deposit">
                    <div className="deposit-box">
                        <div className="box-content-deposit">
                            <img className="icon-deposit" src={Piggy} alt="Icon"/>
                            <h3>Saving Account</h3>
                            <button
                                className="view-more-button"
                                onClick={handleViewSavingAccountClick}
                            >
                                View More
                            </button>
                        </div>
                    </div>
                    <div className="deposit-box">
                        <div className="box-content-deposit">
                            <img className="icon-deposit" src={FixedAccount} alt="Icon"/>
                            <h3>Fixed Account</h3>
                            <button
                                className="view-more-button"
                                onClick={handleViewFixedAccountClick}
                            >
                                View More
                            </button>
                        </div>
                    </div>

                    <div className="text-container-deposit">
                        <h2>Explore our</h2>
                        <h1>Deposit Plans</h1>
                        <p>
                            Discover the right plan for you and start your journey towards
                            financial security and growth.
                        </p>
                        <img className="deposit-icon" src={DepositIcon} alt="Icon"/>
                    </div>
                </div>
                <div className="box-bottom-deposit">
                    <div className="deposit-box">
                        <div className="box-content-deposit">
                            <img className="icon-deposit" src={Certificate} alt="Icon"/>
                            <h3>Certificate for Deposit</h3>
                            <button
                                className="view-more-button"
                                onClick={handleViewCertificateClick}
                            >
                                View More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popups */}
            {showSavingAccountPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h1>Savings Account</h1>
                        <p>Savings Accounts: Building Financial Security" is a succinct
                            message that effectively conveys the purpose of saving
                            accounts. It communicates that savings accounts are a tool for
                            individuals to establish a foundation of financial stability.</p>
                        <button className="ok-button" onClick={handleClosePopups}>OK</button>
                    </div>
                </div>
            )}

            {showFixedAccountPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h1>Fixed Accounts</h1>
                        <p>Secure Savings, Guaranteed Growth" is a
                            concise message that communicates the benefits of fixed
                            accounts. It conveys that fixed accounts offer a combination
                            of security and assured growth for savings.</p>
                        <button className="ok-button" onClick={handleClosePopups}>OK</button>
                    </div>
                </div>
            )}

            {showCertificatePopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h1>Certificates for Deposit</h1>
                        <p>Reliable Returns, Time-Tested
                            Savings" is a succinct message that effectively conveys the
                            advantages of investing in certificates of deposit. It
                            communicates that certificates of deposit provide dependable
                            returns and have a proven track record as a savings option.</p>
                        <button className="ok-button" onClick={handleClosePopups}>OK</button>
                    </div>
                </div>
            )}
        </div>
    );
}
