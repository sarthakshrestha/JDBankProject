import React, { useState } from "react";
import "./Styles/Dashboard.css";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import AllUsersTable from "./Components/ViewUsers/UserTable.jsx";
import DashboardData from "./Components/DashboardData/DashboardData.jsx";
import {Outlet, Route, Routes} from "react-router-dom";
import AllUsers from "./Components/ViewUsers/AllUsers.jsx";

function viewAllUsers() {
    const [showAllUsersTable, setShowAllUsersTable] = useState(false);

    const users = [
        { id: 1, firstName: "John", lastName: "Doe", email: "john.doe@example.com", address: "123 Main St, City, Country", phoneNumber: "123-456-7890", dob: "DD/MM/YYYY" },
        { id: 2, firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com", address: "456 Elm St, City, Country", phoneNumber: "987-654-3210", dob: "DD/MM/YYYY" },
        { id: 3, firstName: "Alice", lastName: "Johnson", email: "alice.johnson@example.com", address: "789 Oak St, City, Country", phoneNumber: "555-123-4567", dob: "DD/MM/YYYY" },
        { id: 4, firstName: "Bob", lastName: "Brown", email: "bob.brown@example.com", address: "456 Birch St, City, Country", phoneNumber: "555-555-5555", dob: "DD/MM/YYYY" },
        { id: 5, firstName: "Eva", lastName: "Evans", email: "eva.evans@example.com", address: "111 Pine St, City, Country", phoneNumber: "777-777-7777", dob: "DD/MM/YYYY" },
        { id: 5, firstName: "Sheva", lastName: "Evans", email: "eva.evans@example.com", address: "111 Pine St, City, Country", phoneNumber: "777-777-7777", dob: "DD/MM/YYYY" }
    ];

    const agents = [
        { id: 1, firstName: "Agent", lastName: "One", email: "agent1@example.com", phoneNumber: "111-111-1111", address: "Agent Address 1", dob: "DD/MM/YYYY", name: "Agent 1", joinedDate: "DD/MM/YYYY" },
        { id: 2, firstName: "Agent", lastName: "Two", email: "agent2@example.com", phoneNumber: "222-222-2222", address: "Agent Address 2", dob: "DD/MM/YYYY", name: "Agent 2", joinedDate: "DD/MM/YYYY" },
        { id: 3, firstName: "Agent", lastName: "Three", email: "agent3@example.com", phoneNumber: "333-333-3333", address: "Agent Address 3", dob: "DD/MM/YYYY", name: "Agent 3", joinedDate: "DD/MM/YYYY" },
        { id: 4, firstName: "Agent", lastName: "Four", email: "agent4@example.com", phoneNumber: "444-444-4444", address: "Agent Address 4", dob: "DD/MM/YYYY", name: "Agent 4", joinedDate: "DD/MM/YYYY" },
        { id: 5, firstName: "Agent", lastName: "Five", email: "agent5@example.com", phoneNumber: "555-555-5555", address: "Agent Address 5", dob: "DD/MM/YYYY", name: "Agent 5", joinedDate: "DD/MM/YYYY" },
    ];

    return (
        <div>
            <Sidebar /> {/* Include the Sidebar component */}
            <AllUsers users={users}/>
            <Outlet/>
        </div>
    );
}

export default viewAllUsers;
