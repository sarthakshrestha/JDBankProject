import React, { useState } from "react";
import { X } from "lucide-react";
import DepositIcon from "../icons/depositplan.png";
import Certificate from "../icons/certificate.png";
import Piggy from "../icons/piggy hehe.png";
import FixedAccount from "../icons/fixed account.png";

export default function DepositPlans() {
  const [showPopup, setShowPopup] = useState(null);

  const depositTypes = [
    {
      title: "Saving Account",
      icon: Piggy,
      description: "Savings Accounts: Building Financial Security",
      details: "Savings accounts are a tool for individuals to establish a foundation of financial stability.",
    },
    {
      title: "Fixed Account",
      icon: FixedAccount,
      description: "Secure Savings, Guaranteed Growth",
      details: "Fixed accounts offer a combination of security and assured growth for savings.",
    },
    {
      title: "Certificate for Deposit",
      icon: Certificate,
      description: "Reliable Returns, Time-Tested Savings",
      details: "Certificates of deposit provide dependable returns and have a proven track record as a savings option.",
    },
  ];

  const handleViewMore = (index) => {
    setShowPopup(index);
  };

  const handleClosePopup = () => {
    setShowPopup(null);
  };

  return (
    <div style={styles.depositPlan}>
      <div style={styles.boxContainer}>
        <div style={styles.textContainer}>
          <h2 style={styles.subheading}>Explore our</h2>
          <h1 style={styles.heading}>Deposit Plans</h1>
          <p style={styles.description}>
            Discover the right plan for you and start your journey towards
            financial security and growth.
          </p>
        </div>
        <div style={styles.depositBoxesContainer}>
          {depositTypes.map((deposit, index) => (
            <div key={index} style={styles.depositBox}>
              <img src={deposit.icon} alt={deposit.title} style={styles.icon} />
              <h3 style={styles.depositTitle}>{deposit.title}</h3>
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
            <h1 style={styles.popupTitle}>{depositTypes[showPopup].title}</h1>
            <p style={styles.popupDescription}>{depositTypes[showPopup].description}</p>
            <p style={styles.popupDetails}>{depositTypes[showPopup].details}</p>
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
  depositPlan: {
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
  depositIcon: {
    width: "60px",
    height: "auto",
    filter: "invert(40%) sepia(80%) saturate(2000%) hue-rotate(200deg) brightness(90%) contrast(90%)",
  },
  depositBoxesContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "30px",
  },
  depositBox: {
    backgroundColor: "#f3f4f6",
    borderRadius: "12px",
    paddingTop: "30px",
    paddingBottom: "30px",
    width: "300px",
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
  depositTitle: {
    fontSize: "20px",
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
