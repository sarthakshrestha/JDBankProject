import React, {useState} from "react";
import "./Styles/Investment.css";
import MoneyArrow from "../icons/money-graph-with-up-arrow (1).png";
import Bonds from "../icons/bonds.png";
import RealEstate from "../icons/real-estate.png";

export default function Investment() {
    // State to control the visibility of individual popups
    const [showStocksPopup, setShowStocksPopup] = useState(false);
    const [showBondsPopup, setShowBondsPopup] = useState(false);
    const [showRealEstatePopup, setShowRealEstatePopup] = useState(false);

    // Function to show the popup for Stocks
    const handleViewStocksClick = () => {
        setShowStocksPopup(true);
    };

    // Function to show the popup for Bonds
    const handleViewBondsClick = () => {
        setShowBondsPopup(true);
    };

    // Function to show the popup for Real Estate
    const handleViewRealEstateClick = () => {
        setShowRealEstatePopup(true);
    };

    // Function to close all popups
    const handleClosePopups = () => {
        setShowStocksPopup(false);
        setShowBondsPopup(false);
        setShowRealEstatePopup(false);
    };

    return (
        <div className="investment">
            <h1>Investment Sector</h1>
            <p>
                Unlock a world of financial possibilities with our diverse range of
                investment opportunities. Whether you’re a seasoned investor or just
                starting out on your financial journey, we have options tailored to your
                goals.
            </p>
            <div className="box-container">
                <div className="investment-box">
                    <div className="box-content">
                        <img className="icon" src={MoneyArrow} alt="Icon"/>
                        <h3>Stocks: Your Path to Ownership</h3>
                        <button className="view-more-button" onClick={handleViewStocksClick}>
                            View More
                        </button>
                    </div>
                </div>
                <div className="investment-box">
                    <div className="box-content">
                        <img className="icon" src={Bonds} alt="Icon"/>
                        <h3>Bonds: Steady Income, Secure Future</h3>
                        <button className="view-more-button" onClick={handleViewBondsClick}>
                            View More
                        </button>
                    </div>
                </div>
                <div className="investment-box">
                    <div className="box-content">
                        <img className="icon" src={RealEstate} alt="Icon"/>
                        <h3>Real Estate: Tangible Assets, Tangible Returns</h3>
                        <button className="view-more-button" onClick={handleViewRealEstateClick}>
                            View More
                        </button>
                    </div>
                </div>
            </div>

            {/* Popups */}
            {showStocksPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h1>JD Bank Stocks</h1>
                        <p>JD Bank Stocks: Empower your financial future. Invest with confidence in a world of
                            opportunities. From established blue-chip companies to emerging sectors, we offer a diverse
                            range of investment options. Our experts are here to guide you on your path to financial
                            empowerment. Join us today and take control of your financial destiny.</p>
                        <button className="ok-button" onClick={handleClosePopups}>
                            OK
                        </button>
                    </div>
                </div>
            )}

            {showBondsPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h1>JD Bank Bonds</h1>
                        <p>Invest in the stability of bonds for financial security. Enjoy consistent returns and build a
                            foundation for your future. Our experts are here to help you make smart investment
                            decisions. Start your journey towards financial peace of mind with JDBank Bonds today."</p>
                        <button className="ok-button" onClick={handleClosePopups}>
                            OK
                        </button>
                    </div>
                </div>
            )}

            {showRealEstatePopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h1> Real Estate with JD Bank</h1>
                        <p>Diversify your portfolio with the stability and potential of real estate. Build wealth
                            through property ownership and watch your investment grow. Our real estate experts are here
                            to guide you on the path to financial success. Start your journey with JD Bank Real Estate
                            today.</p>
                        <button className="ok-button" onClick={handleClosePopups}>
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
