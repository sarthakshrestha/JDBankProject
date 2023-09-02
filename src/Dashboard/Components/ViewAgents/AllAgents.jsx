import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar.jsx";
import axios from "axios";

function AllAgents() {
    const [agents, setAgents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/agent");
                setAgents(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data from the API:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const deleteAgent = (id) => {
        const deleteUrl = `http://localhost:8080/agent/${id}`;

        axios
            .delete(deleteUrl)
            .then((response) => {
                if (response.status === 204) {
                    const updatedAgents = agents.filter((agent) => agent.agent_id !== id);
                    setAgents(updatedAgents);
                }
            })
            .catch((error) => {
                console.error("Error deleting agent:", error);
            });
    };

    return (
        <div>
            <Sidebar />
            <div className="agent_info_admin">
                <div className="admin_header">
                    <h1>All Agents of JDBank</h1>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {agents.map((agent) => (
                        <tr key={agent.agent_id}>
                            <td>{agent.agent_id}</td>
                            <td>{agent.firstName}</td>
                            <td>{agent.lastName}</td>
                            <td>{agent.email}</td>
                            <td>{agent.address}</td>
                            <td>{agent.phoneNumber}</td>
                            <td>
                                <button onClick={() => deleteAgent(agent.agent_id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AllAgents;
