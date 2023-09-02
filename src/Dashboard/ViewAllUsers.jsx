import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Styles/Dashboard.css";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import AllUsersTable from "./Components/ViewUsers/UserTable.jsx";
import { Outlet } from "react-router-dom";

function ViewAllUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = "http://localhost:8080/user";

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

  const deleteUser = (id) => {
    const deleteUrl = `http://localhost:8080/user/${id}`;

    axios
      .delete(deleteUrl)
      .then((response) => {
        if (response.status === 204) {
          // Updates the user list to remove the deleted user
          const updatedUsers = users.filter((user) => user.user_id !== id);
          setUsers(updatedUsers);
        }
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <div>
      <Sidebar />
      <AllUsersTable users={users} deleteUser={deleteUser} />
      <Outlet />
    </div>
  );
}

export default ViewAllUsers;
