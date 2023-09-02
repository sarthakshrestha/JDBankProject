import React, {useState} from "react";
import axios from "axios"; // Import Axios
import "./depositwithdraw.css";
import SideBarAgent from "../SideBarAgent/SideBarAgent";

function DepositWithdraw() {
    const [userId, setUserId] = useState("");
    const [amount, setAmount] = useState(0); // Set the initial value as an integer
    const [remarks, setRemarks] = useState("");

    const handleDeposit = async () => {
        try {
            // Create a transaction object with user input
            const transaction = {
                userId,
                amount: parseFloat(amount), // Use the amount state directly
                remarks,
            };

            // Make an Axios POST request to deposit
            const response = await axios.post(
                `http://localhost:8080/agent/deposit/${userId}/${amount}`, // Adjust the API endpoint
                transaction
            );

            // Handle the response as needed
            console.log("Deposit successful:", response.data);

            // Clear the input fields after a successful deposit
            setUserId("");
            setAmount(0); // Reset to 0
            setRemarks("");
        } catch (error) {
            console.error("Deposit error:", error);
        }
    };

    const handleWithdraw = async () => {
        try {
            // Create a transaction object with user input
            const transaction = {
                userId,
                amount: parseFloat(amount), // Use the amount state directly
                remarks,
            };

            // Make an Axios POST request to withdraw
            const response = await axios.post(
                `http://localhost:8080/agent/withdraw/${userId}/${amount}`, // Adjust the API endpoint
                transaction
            );

            // Handle the response as needed
            console.log("Withdrawal successful:", response.data);

            // Clear the input fields after a successful withdrawal
            setUserId("");
            setAmount(0); // Reset to 0
            setRemarks("");
        } catch (error) {
            console.error("Withdrawal error:", error);
        }
    };

    return (
        <div>
            <SideBarAgent/>
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
                            onChange={(e) => setAmount(e.target.value)} // Use the form input directly
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
