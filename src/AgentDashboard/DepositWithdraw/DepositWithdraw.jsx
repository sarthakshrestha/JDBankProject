import React from "react";
import "./depositwithdraw.css";
import SideBarAgent from "../SideBarAgent/SideBarAgent";

function DepositWithdraw() {
  return (
    <div>
      <SideBarAgent />
      <div class="container">
        <h2>Transaction Withdraw or Deposit</h2>
        <p>
          Please enter the required information and select either "Deposit" or
          "Withdraw" to perform the transaction.
        </p>
        <form>
          <div class="form-group">
            <label for="userId">Receiver ID</label>
            <input type="text" id="userId" name="userId" required />
          </div>
          <div class="form-group">
            <label for="amount">Amount</label>
            <input type="number" id="amount" name="amount" required />
          </div>
          <div class="form-group">
            <label for="remarks">Remarks</label>
            <input type="text" id="remarks" name="remarks" required />
          </div>
          <div class="btn-container">
            <button class="btn btn-deposit" type="button">
              Deposit
            </button>
            <button class="btn btn-withdraw" type="button">
              Withdraw
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DepositWithdraw;
