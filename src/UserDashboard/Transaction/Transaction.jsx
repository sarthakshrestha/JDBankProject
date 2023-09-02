import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../SideBar/SideBar";
import "./transaction.css";

function Transaction() {
  const [show, setShow] = useState(false);
  const [transferTo, setTransferTo] = useState("");
  const [amount, setAmount] = useState("");
  const [remarks, setRemarks] = useState("");
  const [transactionHistory, setTransactionHistory] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create a transaction object with user input
      const transaction = {
        receiver_id: transferTo, // Use transferTo as the receiver_id
        amount: parseFloat(amount),
        remarks,
      };

      // Make an Axios POST request to transfer money
      const response = await axios.post(
          `http://localhost:8080/user/1/transaction`, // Use transferTo in the URL
          transaction
      );

      // Handle the response as needed
      console.log("Transfer successful:", response.data);

      // Clear the form and close the modal
      setTransferTo("");
      setAmount("");
      setRemarks("");
      handleClose();

      // Fetch updated transaction history after the transfer
      fetchTransactionHistory();
    } catch (error) {
      console.error("Transfer error:", error);
    }
  };

  const fetchTransactionHistory = async () => {
    try {
      // Make an Axios GET request to fetch transaction history data
      const response = await axios.get(
          `http://localhost:8080/user/${transferTo}/transactionList`
      );

      // Set the transaction history state with the fetched data
      setTransactionHistory(response.data);
    } catch (error) {
      console.error("Error fetching transaction history:", error);
    }
  };

  // Fetch transaction history data when the component mounts and when transferTo changes
  useEffect(() => {
    fetchTransactionHistory();
  }, [transferTo]);

  // Function to format a date in the "YYYY-MM-DD" format
  const formatDate = (date) => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
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
              <th>ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Remarks</th>
            </tr>
            </thead>
            <tbody>
            {transactionHistory.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.id}</td>
                  <td>{formatDate(new Date())}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.remarks}</td>
                </tr>
            ))}
            </tbody>
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
                    <label>Receiver ID</label>
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
