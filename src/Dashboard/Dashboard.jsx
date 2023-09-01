import React, { useState, useEffect } from "react";
import "./Styles/Dashboard.css";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import DashboardData from "./Components/DashboardData/DashboardData.jsx";
import { Outlet } from "react-router-dom";
import axios from "axios"; // Import Axios

function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        // Make Axios GET requests to fetch user and agent data
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
        <div>
            <Sidebar />
            <DashboardData users={users} agents={agents} />
            <Outlet />
        </div>
    );
}

export default AdminDashboard;
