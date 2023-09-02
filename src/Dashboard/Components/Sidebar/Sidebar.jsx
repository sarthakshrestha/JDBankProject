// Sidebar.js
import React from 'react';
import {Link} from 'react-router-dom';
import "../../Styles/Sidebar.css";
import logo from "./Logo.png";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src={logo} alt="Logo" /> {/* Replace with the actual path to your logo image */}
            </div>
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
                    <Link to="/Admin/Plans">
                        <i className="fas fa-exchange-alt"></i> View Plans
                    </Link>
                </li>
                <li>
                    <Link to="/Admin/Agents">
                        <i className="fas fa-user-tie"></i> View Agents
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
