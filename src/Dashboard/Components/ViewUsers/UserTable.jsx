import React, {useState, useEffect} from "react";
import Sidebar from "../Sidebar/Sidebar.jsx";
import axios from "axios";

function UserTable() {
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/user");
                setUserList(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data from the API:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const deleteUser = (id) => {
        const deleteUrl = `http://localhost:8080/user/${id}`;

        axios
            .delete(deleteUrl)
            .then((response) => {
                if (response.status === 204) {
                    const updatedUserList = userList.filter((user) => user.user_id !== id);
                    setUserList(updatedUserList);
                }
            })
            .catch((error) => {
                console.error("Error deleting user:", error);
            });
    };

    return (
        <div>
            <Sidebar/>
            <div className="admin_header">
                <h1>All Users of JD Bank</h1>
            </div>
            <div className="user_info_admin">
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
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {userList.map((user) => (
                        <tr key={user.user_id}>
                            <td>{user.user_id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.dateOfBirth}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>{user.phoneNumber}</td>
                            <td>
                                <button onClick={() => deleteUser(user.user_id)}>Delete</button>
                                {/* Add other action buttons here */}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserTable;
