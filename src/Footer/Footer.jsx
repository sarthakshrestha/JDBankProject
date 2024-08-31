import React from "react";
import logo from "./Images/Logo.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "#002b5b",
                color: "#ffffff",
                padding: "20px 40px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <div style={{ display: "flex", alignItems: "center" }}>
                <img src={logo} alt="Logo" style={{ height: "60px", marginRight: "15px" }} />
                <div style={{ fontSize: "24px", fontWeight: "bold" }}>JD Bank.co</div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", width: "70%" }}>
                <div style={{ marginRight: "40px" }}>
                    <h4 style={{ fontSize: "18px", marginBottom: "10px" }}>Customer Support</h4>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        <li style={{ marginBottom: "8px" }}>
                            <NavLink to="/Loan Services" style={{ color: "#ffffff", textDecoration: "none" }}>jdbank@support.com.np</NavLink>
                        </li>
                        <li>
                            <NavLink to="" style={{ color: "#ffffff", textDecoration: "none" }}>+01-56969696</NavLink>
                        </li>
                    </ul>
                </div>

                <div style={{ marginRight: "40px" }}>
                    <h4 style={{ fontSize: "18px", marginBottom: "10px" }}>Services</h4>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        <li style={{ marginBottom: "8px" }}>
                            <NavLink to="/Loan Services" style={{ color: "#ffffff", textDecoration: "none" }}>Loan Services</NavLink>
                        </li>
                        <li style={{ marginBottom: "8px" }}>
                            <NavLink to="/ATMLocations" style={{ color: "#ffffff", textDecoration: "none" }}>ATM Locations</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Headquaters" style={{ color: "#ffffff", textDecoration: "none" }}>Headquarters</NavLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ fontSize: "18px", marginBottom: "10px" }}>About Us</h4>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        <li style={{ marginBottom: "8px" }}>
                            <NavLink to="/HistoryOfJDBank" style={{ color: "#ffffff", textDecoration: "none" }}>History of JDBank</NavLink>
                        </li>
                        <li>
                            <NavLink to="/ManagementTeam" style={{ color: "#ffffff", textDecoration: "none" }}>JD Bank - Team</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <h4 style={{ fontSize: "18px", marginBottom: "10px" }}>Follow Us</h4>
                <div style={{ display: "flex", gap: "15px" }}>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-facebook-square fa-2x" style={{ color: "#ffffff" }}></i>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-twitter-square fa-2x" style={{ color: "#ffffff" }}></i>
                    </a>
                    <a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-google-plus-square fa-2x" style={{ color: "#ffffff" }}></i>
                    </a>
                    <a href="mailto:" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-envelope-square fa-2x" style={{ color: "#ffffff" }}></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}
