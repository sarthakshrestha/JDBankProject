import React, { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

export default function FAQSection() {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div style={styles.faqSection}>
      <div style={styles.faqHeader}>
        <h1 style={styles.title}>How can we help you?</h1>
        <p style={styles.subtitle}>Services provided by JD Bank</p>
      </div>
      <div style={styles.faqBox}>
        <div style={styles.faqLeft}>
          <p style={styles.lookingFor}>I am looking for</p>
          <div style={styles.faqLine}></div>
        </div>
        <div style={styles.options} onClick={toggleOptions}>
          <p style={styles.optionsText}>
            Available options
            {showOptions ? (
              <ChevronUp size={20} style={styles.icon} />
            ) : (
              <ChevronDown size={20} style={styles.icon} />
            )}
          </p>
        </div>
      </div>
      {showOptions && (
        <div style={styles.optionsBox}>
          <ul style={styles.optionsList}>
            <li style={styles.optionItem}>Loan Services</li>
            <li style={styles.optionItem}>Mortgages</li>
            <li style={styles.optionItem}>Personal Loan</li>
          </ul>
        </div>
      )}
      
    </div>
  );
}

const styles = {
  faqSection: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: '0 auto',
  },
  faqHeader: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  title: {
    fontSize: '2.5rem',
    color: '#1e3a8a',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#4b5563',
  },
  faqBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  faqLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  lookingFor: {
    fontSize: '1.2rem',
    color: '#4b5563',
    marginRight: '15px',
  },
  faqLine: {
    width: '100px',
    height: '2px',
    backgroundColor: '#1e3a8a',
  },
  options: {
    cursor: 'pointer',
  },
  optionsText: {
    fontSize: '1.2rem',
    color: '#1e3a8a',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginLeft: '10px',
  },
  optionsBox: {
    backgroundColor: '#f3f4f6',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
  },
  optionsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  optionItem: {
    fontSize: '1.1rem',
    color: '#4b5563',
    padding: '10px 0',
    borderBottom: '1px solid #e5e7eb',
    ':last-child': {
      borderBottom: 'none',
    },
  },
  searchBox: {
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    left: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#9ca3af',
  },
};
