import React from "react";
import "./Styles/LoanPlans.css";
import Personal from "../icons/personal.png";
import HomeLoan from "../icons/loan.png";
import Mortgage from "../icons/mortgage-loan.png";
import LoanIcon from "../icons/loanicon.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

export default function LoanPlans() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="loan-plan">
      <div className="box-container-loan">
        <div className="box-above">
          <div className="text-container">
            <h2>Explore Our</h2>
            <h1>Loan Plans</h1>
            <p>
              We're committed to helping you achieve your financial goals with
              our range of carefully crafted loan plans
            </p>
            <img className="loan-icon" src={LoanIcon} alt="Icon" />
          </div>
          <div className="loan-box">
            <div className="box-content">
              <img className="icon" src={Personal} alt="Icon" />
              <h3>Personal Loans</h3>
              <button className="view-more-button" onClick={handleShow}>
                View More
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Personal Loans</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  "Personal Loans: Your Financial Solution" is a succinct
                  message that informs users that personal loans can serve as a
                  means to address their financial needs.
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Ok
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
          <div className="loan-box">
            <div className="box-content">
              <img className="icon" src={HomeLoan} alt="Icon" />
              <h3>Home Loans</h3>
              <button className="view-more-button" onClick={handleShow}>
                View More
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Home Loans</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  "Home Loans: Turning Dreams into Reality" effectively
                  communicates that home loans can help individuals achieve
                  their dream of owning a home.
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Ok
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
        <div className="box-bottom">
          <div className="loan-box">
            <div className="box-content">
              <img className="icon" src={Mortgage} alt="Icon" />
              <h3>Mortgages</h3>
              <button className="view-more-button" onClick={handleShow}>
                View More
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Mortgages</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  "Mortgages: Unlocking Homeownership Potential" is a concise
                  and impactful message that conveys the idea that mortgages are
                  a key to making homeownership achievable.
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Ok
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
