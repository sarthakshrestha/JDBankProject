import React from "react";
import Sidebar from "../Sidebar/Sidebar.jsx";
import AllUsersTable from "../ViewUsers/UserTable.jsx";
import {Outlet} from "react-router-dom";

function AllUsers({users, deleteUser}) {
    return (
        <div>
            <Sidebar/>
            <div className="admin_dashboard">
                <div className="admin_header">
                    <h1>All Users Registered to JDBank</h1>
                </div>
                <AllUsersTable users={users} deleteUser={deleteUser}/>
            </div>
            <Outlet/>
        </div>
    );
}

export default AllUsers;
