import React, {useEffect, useState} from "react";
import "./Styles/Dashboard.css";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import AllUsersTable from "./Components/ViewUsers/UserTable.jsx";
import DashboardData from "./Components/DashboardData/DashboardData.jsx";
import {Outlet, Route, Routes} from "react-router-dom";
import AllUsers from "./Components/ViewUsers/AllUsers.jsx";
import axios from "axios";

function viewAllUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Define your API URL
        const apiUrl = "http://localhost:8080/user";

        // Make an HTTP GET request to fetch user data
        axios.get(apiUrl)
            .then((response) => {
                setUsers(response.data); // Assuming the API returns an array of user data
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data from the API:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <Sidebar /> {/* Include the Sidebar component */}
            <AllUsers users={users}/>
            <Outlet/>
        </div>
    );
}

export default viewAllUsers;
