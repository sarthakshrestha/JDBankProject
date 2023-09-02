import React from "react";
import "./dashboardagent.css";
import SideBarAgent from "../SideBarAgent/SideBarAgent";

function DashboardAgent() {
  return (
    <div>
      <SideBarAgent />
      <div className="header_agent_dash">
        <h1>Welcome Agent Name</h1>
        <h3>Recently Added Users</h3>
      </div>
      <div className="user_info_admin">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date of Birth</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {/* {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.user_id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.dateOfBirth}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>{user.phoneNumber}</td>
                        </tr>
                    ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardAgent;
