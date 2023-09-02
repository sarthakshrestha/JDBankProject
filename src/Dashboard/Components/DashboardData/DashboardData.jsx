import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import AllUsersTable from "../ViewUsers/UserTable.jsx";
import { Outlet } from "react-router-dom";

export default function DashboardData() {
    const [users, setUsers] = useState([]);
    const [agents, setAgents] = useState([]);

    // Make an Axios GET request to fetch user and agent data
    useEffect(() => {
        axios
            .get("http://localhost:8080/user") // Replace with your API endpoint
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error("Error fetching user data: ", error);
            });

        axios
            .get("http://localhost:8080/agent") // Replace with your API endpoint
            .then((response) => {
                setAgents(response.data);
            })
            .catch((error) => {
                console.error("Error fetching agent data: ", error);
            });
    }, []);

    return (
        <div className="admin_dashboard">
            <div className="admin_header">
                <h1>Administrator Dashboard</h1>
            </div>
            <div className="admin_header_message">
                <h2>Recently Joined Users</h2>
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
                    {users.slice(0, 5).map((user) => (
                        <tr key={user.id}>
                            <td>{user.user_id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.dateOfBirth}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>{user.phoneNumber}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <br />
            {/* Table for Recently Joined Agents */}
            <div className="recently_joined_agents">
                <h2>Recently Joined Agents</h2>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {agents.slice(0,5).map((agent) => (
                        <tr key={agent.id}>
                            <td>{agent.agent_id}</td>
                            <td>{agent.firstName}</td>
                            <td>{agent.lastName}</td>
                            <td>{agent.email}</td>
                            <td>{agent.phoneNumber}</td>
                            <td>{agent.address}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <Outlet />
        </div>
    );
}
