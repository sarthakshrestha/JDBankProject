import React, { useEffect, useState } from "react";
import "./Styles/Dashboard.css";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import { Outlet, Route, Routes } from "react-router-dom";
import axios from "axios";
import AllAgents from "./Components/ViewAgents/AllAgents.jsx";

function viewAllAgents() {
  const [agents, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = "http://localhost:8080/agent";

    axios
      .get(apiUrl)
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Sidebar />
      <AllAgents agents={agents} />
      <Outlet />
    </div>
  );
}

export default viewAllAgents;
