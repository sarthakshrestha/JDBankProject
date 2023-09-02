import React from "react";
import "./Styles/DepositPlans.css";

import DepositIcon from "../icons/depositplan.png";
import Certificate from "../icons/certificate.png";
import Piggy from "../icons/piggy hehe.png";
import FixedAccount from "../icons/fixed account.png";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

export default function DepositPlans() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="deposit-plan">
      <div className="box-container-deposit">
        <div className="box-above-deposit">
          <div className="deposit-box">
            <div className="box-content-deposit">
              <img className="icon-deposit" src={Piggy} alt="Icon" />
              <h3>Saving Account</h3>
              <button className="view-more-button" onClick={handleShow}>
                View More
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Saving Accounts</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  "Savings Accounts: Building Financial Security" is a succinct
                  message that effectively conveys the purpose of saving
                  accounts. It communicates that savings accounts are a tool for
                  individuals to establish a foundation of financial stability.
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Ok
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
          <div className="deposit-box">
            <div className="box-content-deposit">
              <img className="icon-deposit" src={FixedAccount} alt="Icon" />
              <h3>Fixed Account</h3>
              <button className="view-more-button" onClick={handleShow}>
                View More
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Fixed Accounts</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  "Fixed Accounts: Secure Savings, Guaranteed Growth" is a
                  concise message that communicates the benefits of fixed
                  accounts. It conveys that fixed accounts offer a combination
                  of security and assured growth for savings.
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Ok
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>

          <div className="text-container-deposit">
            <h2>Explore our</h2>
            <h1>Deposit Plans</h1>
            <p>
              Discover the right plan for you and start your journey towards
              financial security and growth.
            </p>
            <img className="deposit-icon" src={DepositIcon} alt="Icon" />
          </div>
        </div>
        <div className="box-bottom-deposit">
          <div className="deposit-box">
            <div className="box-content-deposit">
              <img className="icon-deposit" src={Certificate} alt="Icon" />
              <h3>Certificate for Deposit</h3>
              <button className="view-more-button" onClick={handleShow}>
                View More
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Certificate for Deposit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  "Certificates of Deposit: Reliable Returns, Time-Tested
                  Savings" is a succinct message that effectively conveys the
                  advantages of investing in certificates of deposit. It
                  communicates that certificates of deposit provide dependable
                  returns and have a proven track record as a savings option.
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
