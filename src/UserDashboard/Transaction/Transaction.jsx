import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import "./transaction.css";

function Transaction() {
  const [show, setShow] = useState(false);
  const [transferTo, setTransferTo] = useState("");
  const [amount, setAmount] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    // Handle form submission logic here
    // You can send the data to your server or perform any other actions
    // Clear the form and close the modal
    setTransferTo("");
    setAmount("");
    setRemarks("");
    handleClose();
  };

  return (
    <div>
      <SideBar />
      <div className="transaction_history">
        <div className="transaction_header">
          <h1>Transaction History</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>{/* fetch data */}</tbody>
        </table>
        <div className="btn_transaction">
          <button className="new_transfer" onClick={handleShow}>
            New Transfer
          </button>
          <button className="report_transfer">Report Transfer</button>
        </div>
      </div>
      {show && (
        <div className="modal-overlay">
          <div className="custom-modal">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            <h2>Transfer Balance</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Transfer To</label>
                <input
                  type="text"
                  value={transferTo}
                  onChange={(e) => setTransferTo(e.target.value)}
                  placeholder="Enter ID"
                />
              </div>
              <div className="form-group">
                <label>Amount</label>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Eg: 2000"
                />
              </div>
              <div className="form-group">
                <label>Remarks</label>
                <input
                  type="text"
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                  placeholder="Bill Sharing"
                />
              </div>
              <div className="modal-footer">
                <button type="button" onClick={handleClose}>
                  Cancel
                </button>
                <button type="submit">Transfer</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Transaction;
