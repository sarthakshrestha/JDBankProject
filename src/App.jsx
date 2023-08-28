import { useState } from "react";

import "./App.css";
import React from "react";

import LandingPage from "./Homepage/LandingPage";
import AboutPage from "./AboutUspage/Components/AboutPage";
import MeetOurTeam from "./ManagmentTeamPage/Components/MeetOurTeam";

export default function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}
