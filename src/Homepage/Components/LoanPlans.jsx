import React, { useState } from "react";
import { UserCheck, Home, Briefcase, X } from "lucide-react";
import Personal from "../icons/personal.png";
import HomeLoan from "../icons/loan.png";
import Mortgage from "../icons/mortgage-loan.png";
import LoanIcon from "../icons/loanicon.png";

export default function LoanPlans() {
  const [showPopup, setShowPopup] = useState(null);

  const loanTypes = [
    {
      title: "Personal Loans",
      icon: Personal,
      description: "Personal Loans: Your Financial Solution",
      details: "Personal Loans can serve as a means to address your financial needs.",
    },
    {
      title: "Home Loans",
      icon: HomeLoan,
      description: "Home Loans: Turning Dreams into Reality",
      details: "Home loans can help individuals achieve their dream of owning a home.",
    },
    {
      title: "Mortgages",
      icon: Mortgage,
      description: "Mortgages: Unlocking Homeownership Potential",
      details: "Mortgages are a key to making homeownership achievable.",
    },
  ];

  const handleViewMore = (index) => {
    setShowPopup(index);
  };

  const handleClosePopup = () => {
    setShowPopup(null);
  };

  return (
    <div style={styles.loanPlan}>
      <div style={styles.boxContainer}>
        <div style={styles.textContainer}>
          <h2 style={styles.subheading}>Explore Our</h2>
          <h1 style={styles.heading}>Loan Plans</h1>
          <p style={styles.description}>
            We're committed to helping you achieve your financial goals with
            our range of carefully crafted loan plans
          </p>
        </div>
        <div style={styles.loanBoxesContainer}>
          {loanTypes.map((loan, index) => (
            <div key={index} style={styles.loanBox}>
              <img src={loan.icon} alt={loan.title} style={styles.icon} />
              <h3 style={styles.loanTitle}>{loan.title}</h3>
              <button
                style={styles.viewMoreButton}
                onClick={() => handleViewMore(index)}
              >
                View More
              </button>
            </div>
          ))}
        </div>
      </div>

      {showPopup !== null && (
        <div style={styles.popup}>
          <div style={styles.popupContent}>
            <button style={styles.closeButton} onClick={handleClosePopup}>
              <X size={24} color="#4b5563" />
            </button>
            <h1 style={styles.popupTitle}>{loanTypes[showPopup].title}</h1>
            <p style={styles.popupDescription}>{loanTypes[showPopup].description}</p>
            <p style={styles.popupDetails}>{loanTypes[showPopup].details}</p>
            <button style={styles.okButton} onClick={handleClosePopup}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  loanPlan: {
    backgroundColor: "#ffffff",
    padding: "60px 20px",
    fontFamily: "Arial, sans-serif",
  },
  boxContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  textContainer: {
    textAlign: "center",
    marginBottom: "40px",
    position: "relative",
  },
  subheading: {
    fontSize: "24px",
    color: "#3b82f6",
    marginBottom: "8px",
  },
  heading: {
    fontSize: "36px",
    color: "#1e40af",
    marginBottom: "16px",
  },
  description: {
    fontSize: "18px",
    color: "#4b5563",
    maxWidth: "600px",
    margin: "0 auto 20px",
  },
  loanIcon: {
    width: "60px",
    height: "auto",
    filter: "invert(40%) sepia(80%) saturate(2000%) hue-rotate(200deg) brightness(90%) contrast(90%)",
  },
  loanBoxesContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "30px",
  },
  loanBox: {
    backgroundColor: "#f3f4f6",
    borderRadius: "12px",
    padding: "30px",
    width: "280px",
    textAlign: "center",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  icon: {
    width: "80px",
    height: "80px",
    marginBottom: "20px",
    filter: "invert(40%) sepia(80%) saturate(2000%) hue-rotate(200deg) brightness(90%) contrast(90%)",
  },
  loanTitle: {
    fontSize: "22px",
    color: "#1e40af",
    marginBottom: "20px",
  },
  viewMoreButton: {
    backgroundColor: '#1e40af',
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    padding: "10px 24px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  popup: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  popupContent: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "40px",
    maxWidth: "500px",
    width: "90%",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "20px",
    right: "20px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  popupTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    color: "#1e40af",
    marginBottom: "20px",
  },
  popupDescription: {
    fontSize: "18px",
    color: "#4b5563",
    marginBottom: "16px",
  },
  popupDetails: {
    fontSize: "16px",
    color: "#6b7280",
    marginBottom: "20px",
  },
  okButton: {
    width: "100%",
    backgroundColor: "#3b82f6",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    padding: "12px 24px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};
