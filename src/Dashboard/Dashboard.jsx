import React, { useState, useEffect } from "react";
import "./Styles/Dashboard.css";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import DashboardData from "./Components/DashboardData/DashboardData.jsx";
import { Outlet } from "react-router-dom";
import axios from "axios";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/user")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data: ", error);
      });

    axios
      .get("http://localhost:8080/agent")
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
