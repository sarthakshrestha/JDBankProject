import React, { useState } from "react";
import Header from "../../Header/Header.jsx";
import Footer from "../../Footer/Footer.jsx";
import { ChevronDown, ChevronUp } from "lucide-react";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={styles.faqItem}>
      <div
        style={{
          ...styles.faqQuestion,
          ...(isOpen ? styles.faqQuestionOpen : {}),
        }}
        onClick={toggleOpen}
      >
        <span style={styles.questionText}>{question}</span>
        <span style={styles.faqIcon}>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </div>
      {isOpen && <div style={styles.faqAnswer}>{answer}</div>}
    </div>
  );
}

function FAQPage() {
  const faqData = [
    {
      question: "What is the minimum amount to deposit for a customer of JDBank",
      answer: "Rs. 10000",
    },
    {
      question: "What are the benefits of JDBank's savings account?",
      answer: "Our savings account offers competitive interest rates, online banking access, free ATM withdrawals, and no monthly fees.",
    },
    {
      question: "Are all my EMI purchases insured by JDBank?",
      answer: "Yes, all the purchases made through JDBank are insured",
    },
    {
      question: "What is the interest rate for JDBank?",
      answer: "The interest rate for JDBank is 6.9% p.a.",
    },
    {
      question: "Are my deposits insured by JDBank with its full protection?",
      answer: "Yes, JDBank is fully protected and insured by JDBank",
    },
  ];

  return (
    <div style={styles.fullPage}>
      <div style={styles.headerContainer}>
        <Header />
      </div>
      <div style={styles.faqPage}>
        <h1 style={styles.faqHeader}>Frequently Asked Questions</h1>
        <div style={styles.faqContent}>
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
      <div style={styles.footerContainer}>
        <Footer />
      </div>
    </div>
  );
}

const styles = {
  fullPage: {
    backgroundColor: '#ffffff',
    width: '180vh',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  headerContainer: {
    width: '100%',
  },
  faqPage: {
    flex: 1,
    margin: '0 auto',
    padding: '40px 20px',
  },
  faqHeader: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#1e3a8a',
    textAlign: 'center',
    marginBottom: '40px',
  },
  faqContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  faqItem: {
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
  faqQuestion: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 20px',
    backgroundColor: '#f0f4f8',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  faqQuestionOpen: {
    backgroundColor: '#e0e7ff',
  },
  questionText: {
    fontSize: '18px',
    fontWeight: '500',
    color: '#1e3a8a',
  },
  faqIcon: {
    color: '#1e3a8a',
  },
  faqAnswer: {
    padding: '20px',
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#4b5563',
    backgroundColor: '#ffffff',
  },
  footerContainer: {
    width: '100%',
  },
};

export default FAQPage;
