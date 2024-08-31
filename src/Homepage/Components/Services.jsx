import React from "react";
import { ArrowRight } from "lucide-react";
import Remittance from "../icons/Remittance.png";
import Utility from "../icons/utilityicon.png";
import Agriculture from "../icons/agriculture icon.png";
import Insurance from "../icons/insurance icon.png";

export default function Services() {
  const services = [
    { icon: Remittance, title: "Remittance" },
    { icon: Utility, title: "Utility Services" },
    { icon: Insurance, title: "Insurance" },
    { icon: Agriculture, title: "Agriculture Services" },
  ];

  return (
    <div style={styles.bestServices}>
      <h1 style={styles.title}>Entirely the Best Services</h1>
      <p style={styles.subtitle}>Services that highlight JD Bank</p>
      <div style={styles.serviceIcons}>
        {services.map((service, index) => (
          <div key={index} style={styles.serviceItem}>
            <div style={styles.iconWrapper}>
              <img style={styles.icon} src={service.icon} alt={service.title} />
            </div>
            <h3 style={styles.serviceTitle}>{service.title}</h3>
            <ArrowRight style={styles.arrowIcon} size={20} />
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  bestServices: {
    backgroundColor: "#ffffff",
    padding: "60px 40px",
    textAlign: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    fontSize: "2.5rem",
    color: "#1e3a8a",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#4b5563",
    marginBottom: "40px",
  },
  serviceIcons: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "30px",
  },
  serviceItem: {
    backgroundColor: "#f3f4f6",
    borderRadius: "12px",
    padding: "30px",
    width: "250px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    ":hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
    },
  },
  iconWrapper: {
    backgroundColor: "#ffffff",
    borderRadius: "50%",
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  icon: {
    width: "60px",
    height: "60px",
    objectFit: "contain",
    filter: "invert(40%) sepia(80%) saturate(2000%) hue-rotate(200deg) brightness(90%) contrast(90%)",
  },
  serviceTitle: {
    fontSize: "1.2rem",
    color: "#1e3a8a",
    marginBottom: "15px",
    fontWeight: "600",
  },
  arrowIcon: {
    color: "#1e3a8a",
    marginTop: "10px",
  },
};
