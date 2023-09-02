import React, { useState } from "react";
import axios from "axios";
import "./depositwithdraw.css";
import SideBarAgent from "../SideBarAgent/SideBarAgent";

function DepositWithdraw() {
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState(0);
  const [remarks, setRemarks] = useState("");

  const handleDeposit = async () => {
    try {
      const transaction = {
        userId,
        amount: parseFloat(amount),
        remarks,
      };

      const response = await axios.post(
        `http://localhost:8080/agent/deposit/${userId}/${amount}`,
        transaction
      );

      console.log("Deposit successful:", response.data);

      setUserId("");
      setAmount(0);
      setRemarks("");
    } catch (error) {
      console.error("Deposit error:", error);
    }
  };

  const handleWithdraw = async () => {
    try {
      const transaction = {
        userId,
        amount: parseFloat(amount),
        remarks,
      };

      const response = await axios.post(
        `http://localhost:8080/agent/withdraw/${userId}/${amount}`,
        transaction
      );

      console.log("Withdrawal successful:", response.data);

      setUserId("");
      setAmount(0);
      setRemarks("");
    } catch (error) {
      console.error("Withdrawal error:", error);
    }
  };

  return (
    <div>
      <SideBarAgent />
      <div className="container">
        <h2>Transaction Withdraw or Deposit</h2>
        <p>
          Please enter the required information and select either "Deposit" or
          "Withdraw" to perform the transaction.
        </p>
        <form>
          <div className="form-group">
            <label htmlFor="userId">Receiver ID</label>
            <input
              type="text"
              id="userId"
              name="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="remarks">Remarks</label>
            <input
              type="text"
              id="remarks"
              name="remarks"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              required
            />
          </div>
          <div className="btn-container">
            <button
              className="btn btn-deposit"
              type="button"
              onClick={handleDeposit}
            >
              Deposit
            </button>
            <button
              className="btn btn-withdraw"
              type="button"
              onClick={handleWithdraw}
            >
              Withdraw
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DepositWithdraw;
