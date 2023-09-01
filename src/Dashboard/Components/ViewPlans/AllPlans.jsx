import React from "react";
import Sidebar from "../Sidebar/Sidebar.jsx";

function AllPlans({ plans }) {
    return (
        <div>
            <Sidebar />
            <div className="agent_info_admin">
                <div className="admin_header">
                    <h1>All Plans of JDBank</h1>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Details</th>
                        <th>Interest Rate</th>
                    </tr>
                    </thead>
                    <tbody>
                    {plans.map((plans) => (
                        <tr key={plans.id}>
                            <td>{plans.plan_id}</td>
                            <td>{plans.details}</td>
                            <td>{plans.interestRate}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AllPlans;
