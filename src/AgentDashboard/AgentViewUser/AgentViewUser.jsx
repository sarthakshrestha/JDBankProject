import React, {useState, useEffect} from "react";
import axios from "axios";
import "./agentviewuser.css";
import SideBarAgent from "../SideBarAgent/SideBarAgent";

function AgentViewUser() {
    const [showForm, setShowForm] = useState(false);
    const [userId, setUserId] = useState("");
    const [userData, setUserData] = useState([]); // State to store user data as an array

    useEffect(() => {
        // Make an Axios GET request to fetch the user data when the component mounts
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/agent/1/user`);
                // Handle the response and set the user data state
                console.log("User data fetched successfully:", response.data);
                setUserData(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []); // Empty dependency array to run the effect only once

    const openForm = () => {
        setShowForm(true);
    };

    const closeForm = () => {
        setShowForm(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make an Axios POST request to add the user to the agent's table
            const response = await axios.post(
                `http://localhost:8080/agent/user/1/${userId}`,
                {
                    userId,
                }
            );

            // Handle the response and set the user data state
            console.log("User added successfully:", response.data);

            // Close the form
            closeForm();

            // Make an Axios GET request to fetch the updated user data
            const userResponse = await axios.get(`http://localhost:8080/agent/1/user`);
            // Handle the response and set the user data state
            console.log("User data fetched successfully:", userResponse.data);
            setUserData(userResponse.data);
        } catch (error) {
            console.error("Error adding user:", error);
        }
    };

    return (
        <div>
            <SideBarAgent/>
            <div className="view_user">
                <div className="view_header">
                    <h1>User Details</h1>
                </div>
                <div className="add_user">
                    <button className="add_user_button" onClick={openForm}>
                        Add User
                    </button>
                </div>

                {/* Form Popup */}
                {showForm && (
                    <div className="form-popup">
                        <div className="form-container">
              <span className="close-button" onClick={closeForm}>
                &times;
              </span>
                            <form onSubmit={handleSubmit}>
                                <label>User ID:</label>
                                <input
                                    type="text"
                                    placeholder="Enter User ID"
                                    value={userId}
                                    onChange={(e) => setUserId(e.target.value)}
                                    required
                                />
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                )}

                <div className="user_info_agent">
                    <table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Date of Birth</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                        </tr>
                        </thead>
                        <tbody>
                        {userData.map((user) => (
                            <tr key={user.user_id}>
                                <td>{user.user_id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.dateOfBirth}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td>{user.phoneNumber}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AgentViewUser;
