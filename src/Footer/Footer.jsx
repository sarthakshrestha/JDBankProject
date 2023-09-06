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
                                    <NavLink to="/ManagementTeam">JD Bank - Team</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footerRightBottom">
                        <div className="socialMedia">
                            <h4>Follow Us</h4>

                            <section id="lab_social_icon_footer">
                                <div class="social-container">
                                    <div class="social-icons">
                                        <a href="https://www.facebook.com" target="_blank">
                                            <i
                                                id="social-fb"
                                                class="fa fa-facebook-square fa-3x social"
                                            ></i>
                                        </a>
                                        <a href="https://www.twitter.com" target="_blank">
                                            <i
                                                id="social-tw"
                                                class="fa fa-twitter-square fa-3x social"
                                            ></i>
                                        </a>
                                        <a href="https://www.gmail.com" target="_blank">
                                            <i
                                                id="social-gp"
                                                class="fa fa-google-plus-square fa-3x social"
                                            ></i>
                                        </a>
                                        <a href="https://mailto:#" target="_blank">
                                            <i
                                                id="social-em"
                                                class="fa fa-envelope-square fa-3x social"
                                            ></i>
                                        </a>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
