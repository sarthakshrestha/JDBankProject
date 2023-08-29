import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import LandingPage from "./Homepage/LandingPage";
import MeetOurTeamPage from "./ManagmentTeamPage/MeetOurTeamPage";
import AboutUsPage from "./AboutUspage/AboutUsPage";

export default function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ManagementTeam" element={<MeetOurTeamPage />} />
          <Route path="/AboutUsPage" element={<AboutUsPage />} />

          <Route path="*" element={<h1>PageNotFound!</h1>} />
        </Routes>
      </>
    </div>
  );
}
