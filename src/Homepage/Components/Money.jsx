import React from "react";
import { Send, ArrowDownCircle, PiggyBank, Smartphone } from "lucide-react";

export default function Money() {
  const functions = [
    { title: "Money Transfer", icon: Send },
    { title: "Withdraw", icon: ArrowDownCircle },
    { title: "Bank Deposit", icon: PiggyBank },
    { title: "Mobile Payment", icon: Smartphone },
  ];

  return (
    <div style={styles.functionComponent}>
      <h2 style={styles.sectionTitle}>Banking Services</h2>
      <div style={styles.functionContainer}>
        {functions.map((func, index) => (
          <div key={index} style={styles.functionBox}>
            <div style={styles.boxContent}>
              <div style={styles.iconWrapper}>
                <func.icon size={32} color="#1e40af" />
              </div>
              <h3 style={styles.title}>{func.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  functionComponent: {
    padding: "40px 20px",
    backgroundColor: "#ffffff",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#1e40af",
    textAlign: "center",
    marginBottom: "30px",
  },
  functionContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    flexWrap: "wrap",
    gap: "30px",
  },
  functionBox: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    padding: "30px",
    textAlign: "center",
    width: "220px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    border: "1px solid #e5e7eb",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
    },
  },
  boxContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  iconWrapper: {
    backgroundColor: "#e0e7ff",
    borderRadius: "50%",
    width: "80px",
    height: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#1e40af",
    margin: "0",
    lineHeight: "1.4",
  },
};
