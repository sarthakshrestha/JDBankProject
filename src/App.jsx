import { useState } from "react";

import "./App.css";
import React from "react";

import LandingPage from "./Homepage/LandingPage";
import AboutPage from "./AboutUspage/Components/AboutPage";
import MeetOurTeam from "./ManagmentTeamPage/Components/MeetOurTeam";
import Header from "./Header/Header.jsx";
import {Route, Routes} from "react-router-dom";

export default function App() {
  return (

    <div className="App">
        {/*<>*/}
        {/*    <Routes>*/}
        {/*        <Route path="/HomePage" element={{""}}/>*/}
        {/*    </Routes>*/}
        {/*</>*/}
        <Header/>
        <LandingPage/>
        {/*<AboutPage/>*/}
        {/*<MeetOurTeam/>*/}
    </div>
  );
}
