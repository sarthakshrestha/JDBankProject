import "./Footer.css";
import logo from "./Images/Logo.png";
import {NavLink} from "react-router-dom";

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footerLeft">
                    <img src={logo} alt="Logo"/>
                    <div className="footer_BankName">JD Bank.co</div>
                </div>

                <div className="footerRight">
                    <div className="footerRightTop">
                        <div className="JDBankCustomerSupport">
                            <h4>
                                JDBank
                                <br/>
                                CustomerSupport
                            </h4>

                            <ul>
                                <li>
                                    <NavLink to="/Loan Services">jdbank@support.com.np</NavLink>
                                </li>
                                <li>
                                    <NavLink to="">+01-56969696</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="services">
                            <h4>Services</h4>
                            <ul>
                                <li>
                                    <NavLink to="/Loan Services">Loan Services</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/ATMLocations">ATM Locations</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Headquaters">Headquaters</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="aboutUs">
                            <h4>About Us</h4>
                            <ul>
                                <li>
                                    <NavLink to="/HistoryOfJDBank">History of JDBank</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/JD_BankTeam">JD Bank - Team</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="FooterleftBottom">
                        <div className="socialMedia">
                            <h4>Follow Us</h4>
                            <ul>
                                <li>
                                    <NavLink to="">imageFB</NavLink>
                                </li>
                                <li>
                                    <NavLink to="">imageTW</NavLink>
                                </li>
                                <li>
                                    <NavLink to="">iamgeInsta</NavLink>
                                </li>
                                <li>
                                    <NavLink to="">ImageLinkedin</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
