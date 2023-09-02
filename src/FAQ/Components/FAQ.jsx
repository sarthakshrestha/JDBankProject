import React, { useState } from "react";
import "./FAQ.css";
import Header from "../../Header/Header.jsx";
import Footer from "../../Footer/Footer.jsx";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div
        className={`faq-question ${isOpen ? "open" : ""}`}
        onClick={toggleOpen}
      >
        {question}
        <span className="faq-icon">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
}

function FAQPage() {
  const faqData = [
    {
      question:
        "What is the minimum amount to deposit for a customer of JDBank",
      answer: "Rs. 10000",
    },
    {
      question: "What are the benefits of JDBank's savings account?",
      answer:
        "Our savings account offers competitive interest rates, online banking access, free ATM withdrawals, and no monthly fees.",
    },
    {
      question: "Are all my EMI purchases insured by JDBank?",
      answer: "Yes, all the purchases made through JDBank are insured",
    },
    {
      question: 'What is the interest rate for JDBank"?',
      answer: "The interest rate for JDBank is 6.9% p.a.",
    },
    {
      question: 'Are my deposits insured by JDBank with its full protection"?',
      answer: "Yes JDBank is fully protected and insured by JDBank",
    },
  ];

  return (
    <div className="full=-page">
      <div class="header-container">
        <Header />
      </div>
      <div className="faq-page">
        <div className="faq-header">Frequently Asked Questions</div>
        <div className="faq-content">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default FAQPage;
