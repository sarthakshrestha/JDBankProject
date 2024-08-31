import React from "react";
import Money from "./Components/Money.jsx";
import Investment from "./Components/Investment.jsx";
import LoanPlans from "./Components/LoanPlans.jsx";
import DepositPlans from "./Components/DepositPlans.jsx";
import FAQSection from "./Components/FAQSection.jsx";
import Services from "./Components/Services.jsx";
import ImageSlider from "../ImageSlider/ImageSlider.jsx";

export default function LandingPage() {
  return (
    <div style={styles.app}>
      <ImageSlider />
      <Money />
      <hr style={styles.separator} />
      <Investment />
      <hr style={styles.separator} />
      <LoanPlans />
      <hr style={styles.separator} />
      <DepositPlans />
      <hr style={styles.separator} />
      <FAQSection />
      <hr style={styles.separator} />
      <Services />
    </div>
  );
}

const styles = {
  app: {
    backgroundColor: "#fff",
    marginTop: "110px",
    width: '180vh',
  },
  separator: {
    border: "none",
    borderTop: "1px solid #e0e0e0",
    margin: "20px 0",
  },
};
