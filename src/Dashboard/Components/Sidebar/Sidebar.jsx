// Sidebar.js
import React from 'react';
import {Link} from 'react-router-dom';
import "../../Styles/Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src="Logo.png" alt="Logo" /> {/* Replace with the actual path to your logo image */}
            </div>
            {/*<div className="title">*/}
            {/*    <h1>Admin Dashboard</h1>*/}
            {/*</div>*/}
            <ul>
                <li>
                    <Link to="/Admin">
                        <i className="fas fa-tachometer-alt"></i> Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/Admin/Users">
                        <i className="fas fa-users"></i> View Users
                    </Link>
                </li>
                <li>
                    <Link to="/transactions">
                        <i className="fas fa-exchange-alt"></i> View Plans
                    </Link>
                </li>
                <li>
                    <Link to="/agents">
                        <i className="fas fa-user-tie"></i> View Agents
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
