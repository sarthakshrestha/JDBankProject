import React from "react";

import "./Styles/Investment.css";
import MoneyArrow from "../icons/money-graph-with-up-arrow (1).png";
import Bonds from "../icons/bonds.png";
import RealEstate from "../icons/real-estate.png";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

export default function Investment() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="investment">
      <h1>Investment Sector</h1>
      <p>
        Unlock a world of financial possibilities with our diverse range of
        investment opportunities. Whether you’re a seasoned investor or just
        starting out on your financial journey, we have options tailored to your
        goals.
      </p>
      <div className="box-container">
        <div className="investment-box">
          <div className="box-content">
            <img className="icon" src={MoneyArrow} alt="Icon" />

            <h3>Stocks: Your Path to Ownership</h3>
            <button className="view-more-button-stocks" onClick={handleShow}>
              View More
            </button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Stocks: Your Path to Ownership</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                "Stocks: Your Path to Ownership" succinctly conveys the concept
                that investing in stocks provides individuals with a route to
                become partial owners in companies.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Ok
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        <div className="investment-box">
          <div className="box-content">
            <img className="icon" src={Bonds} alt="Icon" />

            <h3>Bonds: Steady Income, Secure Future</h3>

            <button className="view-more-button" onClick={handleShow}>
              View More
            </button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Bonds: Steady Income, Secure Future</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                "Bonds: Steady Income, Secure Future" encapsulates the essence
                of what bonds offer and their significance. This concise
                statement highlights that bonds provide a reliable source of
                income and contribute to building a financially secure future.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Ok
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        <div className="investment-box">
          <div className="box-content">
            <img className="icon" src={RealEstate} alt="Icon" />
            <h3>Real Estate: Tangible Assets, Tangible Returns</h3>
            <button className="view-more-button" onClick={handleShow}>
              View More
            </button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Bonds: Steady Income, Secure Future</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                "Bonds: Steady Income, Secure Future" encapsulates the essence
                of what bonds offer and their significance. This concise
                statement highlights that bonds provide a reliable source of
                income and contribute to building a financially secure future.
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
  );
}
