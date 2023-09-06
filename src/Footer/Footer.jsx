import "./Footer.css";
import logo from "./Images/Logo.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footerLeft">
                <img src={logo} alt="Logo" className="footerLogo" />
                <div className="footer_BankName">JD Bank.co</div>
            </div>

            <div className="footerRight">
                <div className="footerRightTop">
                    <div className="JDBankCustomerSupport">
                        <h4>Customer</h4>
                        <h4>Support</h4>
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
                                <NavLink to="/Headquaters">Headquarters</NavLink>
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
                                <NavLink to="/ManagementTeam">JD Bank - Team</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footerRightBottom">
                    <div className="socialMedia">
                        <h4>Follow Us</h4>
                        <div class="social-icons">
                            <a href="https://www.facebook.com" target="_blank">
                                <i id="social-fb" class="fa fa-facebook-square fa-2x social"></i>
                            </a>
                            <a href="https://www.twitter.com" target="_blank">
                                <i id="social-tw" class="fa fa-twitter-square fa-2x social"></i>
                            </a>
                            <a href="https://www.gmail.com" target="_blank">
                                <i id="social-gp" class="fa fa-google-plus-square fa-2x social"></i>
                            </a>
                            <a href="mailto:" target="_blank">
                                <i id="social-em" class="fa fa-envelope-square fa-2x social"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
