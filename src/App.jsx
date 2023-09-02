import "./App.css";
import React, { useState } from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";
import LandingPage from "./Homepage/LandingPage";
import ServicesMain from "./Services/ServiceMain";
import MeetOurTeamPage from "./ManagmentTeamPage/MeetOurTeamPage";
import AboutUsPage from "./AboutUspage/AboutUsPage";
import RegistrationPage from "./Registration/RegistrationPage";
import LoginPageNewVersion from "./LoginPage/LoginPageNewVersion";
import LoginPage from "./Login/pages/LoginPage";
import FAQMain from "./FAQ/FAQMain.jsx";
import AdminDashboard from "./Dashboard/Dashboard.jsx";
import ViewAllUsers from "./Dashboard/ViewAllUsers.jsx";
import ViewAllAgents from "./Dashboard/ViewAllAgents.jsx";
import ViewAllPlans from "./Dashboard/ViewAllPlans.jsx";

export default function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<LandingPage />}>
            <Route path="/Login" element={<LoginPageNewVersion />} />
          </Route>

          <Route path="/Services" element={<ServicesMain />}>
            <Route path="/Services/Login" element={<LoginPageNewVersion />} />
          </Route>

          <Route path="/ManagementTeam" element={<MeetOurTeamPage />}>
            <Route
              path="/ManagementTeam/Login"
              element={<LoginPageNewVersion />}
            />
          </Route>

          <Route path="/AboutUsPage" element={<AboutUsPage />}>
            <Route
              path="/AboutUsPage/Login"
              element={<LoginPageNewVersion />}
            />
          </Route>

          <Route path="/Registration" element={<RegistrationPage />} />

          <Route path="/LoginDefault" element={<LoginPage />} />

          <Route path="/FAQ" element={<FAQMain />} />

          <Route path="/Admin" element={<AdminDashboard />}>
            {/*<Route path="/AllUsers" element={<AllUsers users={users} />} />*/}
            {/*<Route path="/Users" element={<AllUsersData/>} />*/}
          </Route>
          <Route path="/Admin/Users" element={<ViewAllUsers />} />
          <Route path="/Admin/Agents" element={<ViewAllAgents />} />
          <Route path="/Admin/Plans" element={<ViewAllPlans />} />

          <Route path="*" element={<h1>PageNotFound! :(</h1>} />
        </Routes>
      </>
    </div>
  );
}
