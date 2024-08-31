import React from "react";
import { useRef } from "react";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { User, Home, CreditCard, Info, HelpCircle } from "lucide-react";  // Import Lucide React icons
import logo from "./Images/Logo.png";

export default function Header() {
  const accountView = useRef(false);
  let currentLoc = useLocation();
  const navTo = useNavigate();

  function accountButtonHandler() {
    if (accountView.current) {
      navTo(-1);
      accountView.current = false;
    } else {
      currentLoc.pathname === "/"
        ? navTo("/Login")
        : navTo(currentLoc.pathname + "/Login");
      accountView.current = true;
    }
  }

  return (
    <header style={styles.header}>
      <div style={styles.headerUpper}>
        <Link to="/" style={styles.logo}>
          <img src={logo} alt="Logo" style={styles.logoImage} />
          <div style={styles.bankName}>JD Bank.co</div>
        </Link>
        <button style={styles.accountButton} onClick={accountButtonHandler}>
          <User size={18} color="#fff" />
          <span style={styles.buttonText}>Account</span>
        </button>
        <Outlet />
      </div>

      <nav style={styles.headerLower}>
        <ul style={styles.navList}>
        <li>
            <NavLink to="/" style={({isActive}) => ({...styles.navLink, ...(isActive ? styles.activeNavLink : {})})}>
              <Home size={18} />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Services" style={({isActive}) => ({...styles.navLink, ...(isActive ? styles.activeNavLink : {})})}>
              <CreditCard size={18} />
              <span>Services</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/AboutUsPage" style={({isActive}) => ({...styles.navLink, ...(isActive ? styles.activeNavLink : {})})}>
              <Info size={18} />
              <span>About Us</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/FAQ" style={({isActive}) => ({...styles.navLink, ...(isActive ? styles.activeNavLink : {})})}>
              <HelpCircle size={18} />
              <span>FAQ</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div style={styles.divider}></div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#ffffff",
    marginTop: "-100px",
    padding: "15px 30px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  headerUpper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  logoImage: {
    height: "45px",
    marginRight: "10px",
  },
  bankName: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#1a365d",
    letterSpacing: "-0.5px",
  },
  accountButton: {
    backgroundColor: "#1e40af",
    color: "#ffffff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontWeight: "600",
    transition: "background-color 0.3s ease",
    ":hover": {
      backgroundColor: "#3182ce",
    },
  },
  buttonText: {
    fontSize: "1rem",
  },
  headerLower: {
    marginTop: "20px",
  },
  navList: {
    display: "flex",
    gap: "25px",
    listStyle: "none",
    padding: 0,
    justifyContent: "center",
  },
  navLink: {
    textDecoration: "none",
    color: "#4a5568",
    fontWeight: "500",
    fontSize: "1.1rem",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "8px 12px",
    borderRadius: "4px",
    transition: "background-color 0.3s ease, color 0.3s ease",
  },
  activeNavLink: {
    backgroundColor: "#ebf8ff",
    color: "#2b6cb0",
  },
  divider: {
    marginTop: "20px",
    height: "1px",
    backgroundColor: "#e2e8f0",
  },
};
