import React from "react";
import SideBar from "../SideBar/SideBar";
import "./userdashboard.css";

function UserDashboard() {
  return (
    <div>
      <SideBar />
      <div class="dashboard">
        <h1>
          Welcome, <span id="user-name">John Doe</span>!
        </h1>
        <div class="user-info">
          <div class="balance">
            <h2>
              <strong>Available Balance</strong>
            </h2>
            <p id="balance-amount">Rs 10,000.00</p>
          </div>
          <div class="user-details">
            <div class="user-id">
              <label for="user-id">
                <strong>User ID</strong>
              </label>
              <p id="user-id">12345</p>
            </div>
            <div class="user-fullname">
              <label for="full-name">
                <strong>Full Name</strong>
              </label>
              <p id="full-name">John Doe</p>
            </div>
            <div class="user-email">
              <label for="email">
                <strong>Email</strong>
              </label>
              <p id="email">johndoe@example.com</p>
            </div>
            <div class="user-phone">
              <label for="phone-number">
                <strong>Phone Number</strong>
              </label>
              <p id="phone-number">123-456-7890</p>
            </div>
            <div class="user-address">
              <label for="address">
                <strong>Address</strong>
              </label>
              <p id="address">123 Main St, City</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
