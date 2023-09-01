import React from "react";
import Sidebar from "../Sidebar/Sidebar.jsx";

function AllAgents({ agents }) {
    return (
        <div>
            <Sidebar />
            <div className="agent_info_admin">
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    {agents.map((agent) => (
                        <tr key={agent.id}>
                            <td>{agent.agent_id}</td>
                            <td>{agent.firstName}</td>
                            <td>{agent.lastName}</td>
                            <td>{agent.email}</td>
                            <td>{agent.address}</td>
                            <td>{agent.phoneNumber}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AllAgents;
