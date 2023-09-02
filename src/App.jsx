import "./App.css";
import React, { useState } from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
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
import AccountPopUp from "./AccountPopUp/AccountPopUp";

export default function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Homepage />}>
            <Route
              path="/Login"
              element={
                JSON.parse(localStorage.getItem("UserToken")) != "" &&
                JSON.parse(localStorage.getItem("UserData")) != "" ? (
                  <AccountPopUp />
                ) : (
                  <LoginPageNewVersion />
                )
              }
            />
          </Route>

          <Route path="/Services" element={<ServicesMain />}>
            <Route
              path="/Services/Login"
              element={
                JSON.parse(localStorage.getItem("UserToken")) != "" &&
                JSON.parse(localStorage.getItem("UserData")) != "" ? (
                  <AccountPopUp />
                ) : (
                  <LoginPageNewVersion />
                )
              }
            />
          </Route>

          <Route path="/ManagementTeam" element={<MeetOurTeamPage />}>
            <Route
              path="/ManagementTeam/Login"
              element={
                JSON.parse(localStorage.getItem("UserToken")) != "" &&
                JSON.parse(localStorage.getItem("UserData")) != "" ? (
                  <AccountPopUp />
                ) : (
                  <LoginPageNewVersion />
                )
              }
            />
          </Route>

          <Route path="/AboutUsPage" element={<AboutUsPage />}>
            <Route
              path="/AboutUsPage/Login"
              element={
                JSON.parse(localStorage.getItem("UserToken")) != "" &&
                JSON.parse(localStorage.getItem("UserData")) != "" ? (
                  <AccountPopUp />
                ) : (
                  <LoginPageNewVersion />
                )
              }
            />
          </Route>

          <Route path="/Registration" element={<RegistrationPage />} />

          <Route path="/LoginDefault" element={<LoginPage />} />

          <Route path="/FAQ" element={<FAQMain />}>
            <Route
              path="/FAQ/Login"
              element={
                JSON.parse(localStorage.getItem("UserToken")) != "" &&
                JSON.parse(localStorage.getItem("UserData")) != "" ? (
                  <AccountPopUp />
                ) : (
                  <LoginPageNewVersion />
                )
              }
            />
          </Route>

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
