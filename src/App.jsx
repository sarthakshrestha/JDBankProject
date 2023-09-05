import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import ServicesMain from "./Services/ServiceMain";
import MeetOurTeamPage from "./ManagmentTeamPage/MeetOurTeamPage";
import AboutUsPage from "./AboutUspage/AboutUsPage";
import RegistrationPage from "./Registration/RegistrationPage";
import LoginPage from "./Login/pages/LoginPage";
import FAQMain from "./FAQ/FAQMain.jsx";
import AdminDashboard from "./Dashboard/Dashboard.jsx";
import ViewAllUsers from "./Dashboard/ViewAllUsers.jsx";
import ViewAllAgents from "./Dashboard/ViewAllAgents.jsx";
import ViewAllPlans from "./Dashboard/ViewAllPlans.jsx";
import UserDashboard from "./UserDashboard/DashboardUser/UserDashboard.jsx";
import EditProfile from "./UserDashboard/EditProfile/EditProfile.jsx";
import Transaction from "./UserDashboard/Transaction/Transaction.jsx";
import AgentViewUser from "./AgentDashboard/AgentViewUser/AgentViewUser.jsx";
import DepositWithdraw from "./AgentDashboard/DepositWithdraw/DepositWithdraw.jsx";
import AccountBubble from "./AccountBubble/AccountBubble";

export default function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Homepage />}>
            <Route path="/Login" element={<AccountBubble />} />
          </Route>

          <Route path="/Services" element={<ServicesMain />}>
            <Route path="/Services/Login" element={<AccountBubble />} />
          </Route>

          <Route path="/ManagementTeam" element={<MeetOurTeamPage />}>
            <Route path="/ManagementTeam/Login" element={<AccountBubble />} />
          </Route>

          <Route path="/AboutUsPage" element={<AboutUsPage />}>
            <Route path="/AboutUsPage/Login" element={<AccountBubble />} />
          </Route>

          <Route path="/Registration" element={<RegistrationPage />}>
            <Route path="/Registration/Login" element={<AccountBubble />} />
          </Route>

          <Route path="/LoginDefault" element={<LoginPage />} />

          <Route path="/FAQ" element={<FAQMain />}>
            <Route path="/FAQ/Login" element={<AccountBubble />} />
          </Route>

          <Route path="/Agent" element={<AgentViewUser />} />
          <Route
            path="/Agent/DepositOrWithdraw"
            element={<DepositWithdraw />}
          />

          <Route path="/Admin" element={<AdminDashboard />} />
          <Route path="/Admin/Users" element={<ViewAllUsers />} />
          <Route path="/Admin/Agents" element={<ViewAllAgents />} />
          <Route path="/Admin/Plans" element={<ViewAllPlans />} />
          <Route path="/User" element={<UserDashboard />} />
          <Route path="/User/Edit" element={<EditProfile />} />
          <Route path="/User/Transaction" element={<Transaction />} />

          <Route path="*" element={<h1>PageNotFound! :(</h1>} />
        </Routes>
      </>
    </div>
  );
}
