import React, { useEffect, useState } from "react";
import "./Styles/Dashboard.css";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import { Outlet, Route, Routes } from "react-router-dom";
import axios from "axios";
import AllPlans from "./Components/ViewPlans/AllPlans.jsx";

function ViewAllPlans() {
  const [plans, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = "http://localhost:8080/plan";

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
      <AllPlans plans={plans} />
      <Outlet />
    </div>
  );
}

export default ViewAllPlans;
