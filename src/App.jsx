import "./App.css";
import React from "react";
import {Route, Routes} from "react-router-dom";

import LandingPage from "./Homepage/Homepage";
import MeetOurTeamPage from "./ManagementTeamPage/Components/MeetOurTeam.jsx";
import AboutUsPage from "./AboutUspage/AboutUspage";
import LoginPageNewVersion from "./LoginPage/LoginPageNewVersion";
import Registration from "./Registration/Components/Registration.jsx"
import ServicesPage from "./Services/Components/ServicesPage.jsx";
import ServiceMain from "./Services/ServiceMain.jsx";
import FAQMain from "./FAQ/FAQMain.jsx";
import Sidebar from "./Dashboard/Components/Sidebar/Sidebar.jsx";
import AdminDashboard from "./Dashboard/Dashboard.jsx";
import UserTable from "./Dashboard/Components/ViewUsers/UserTable.jsx";
import AllUsers from "./Dashboard/Components/ViewUsers/AllUsers.jsx";
import ViewAllUsers from "./Dashboard/ViewAllUsers.jsx";
import ViewAllAgents from "./Dashboard/ViewAllAgents.jsx";
import ViewAllPlans from "./Dashboard/ViewAllPlans.jsx";
import UserDashboard from "./UserDashboard/DashboardUser/UserDashboard.jsx";
import EditProfile from "./UserDashboard/EditProfile/EditProfile.jsx";
import Transaction from "./UserDashboard/Transaction/Transaction.jsx";
import AgentViewUser from "./AgentDashboard/AgentViewUser/AgentViewUser.jsx";
import DepositWithdraw from "./AgentDashboard/DepositWithdraw/DepositWithdraw.jsx";
// import ShowAdmin from "./DashBoards/AdminDashboard/ShowAdmin.jsx";
// import ShowDashBoard from "./DashBoards/UserDashboard/ShowDashBoard.jsx";
// import Dashboard from "./AdminDashboard/Components/Dashboard.jsx";
// import RootAdmin from "./Layouts/RootAdmin.jsx";
// import ShowAdmin from "./AdminDashboard/Components/ShowAdmin.jsx";
// import AdminMain from "./AdminDashboard/AdminMain.jsx";

export default function App() {
    return (<div className="App">
            <>
                <Routes>
                    <Route path="/" element={<LandingPage/>}>
                        <Route path="/Login" element={<LoginPageNewVersion/>}/>
                    </Route>

                    <Route path="/ManagementTeam" element={<MeetOurTeamPage/>}>
                        <Route
                            path="/ManagementTeam/Login"
                            element={<LoginPageNewVersion/>}
                        />
                    </Route>

                    <Route path="/AboutUsPage" element={<AboutUsPage/>}>
                        <Route
                            path="/AboutUsPage/Login"
                            element={<LoginPageNewVersion/>}
                        />
                    </Route>

                    {/*<Route path="/Admin/AllUsers" element={<AllUsers users={users} />} />*/}

                    <Route path="/Registration" element={<Registration/>}/>

                    <Route path="*" element={<h1>PageNotFound!</h1>}/>

                    <Route path="/Services" element={<ServiceMain/>}/>

                    <Route path="/FAQ" element={<FAQMain/>}/>

                    <Route path="/Agent" element={<AgentViewUser/>}/>

                    <Route path="/Agent/DepositOrWithdraw" element={<DepositWithdraw/>}/>

                    <Route path ="/Admin/Users" element={<ViewAllUsers/>}/>

                    <Route path ="/Admin/Agents" element={<ViewAllAgents/>}/>

                    <Route path="/User" element={<UserDashboard/>}/>

                    <Route path="/User/Edit" element={<EditProfile/>}/>

                    <Route path ="/User/Transaction" element={<Transaction/>}/>

                    <Route path ="/Admin/Plans" element={<ViewAllPlans/>}/>

                    <Route path="/Admin" element={<AdminDashboard/>}>
                        {/*<Route path="/AllUsers" element={<AllUsers users={users} />} />*/}
                        {/*<Route path="/Users" element={<AllUsersData/>} />*/}
                    </Route>

                </Routes>
            </>
        </div>);
}
