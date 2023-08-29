import { useState } from "react";

import "./App.css";
import React from "react";

import LandingPage from "./Homepage/LandingPage";
import AboutPage from "./AboutUspage/Components/AboutPage";
import MeetOurTeam from "./ManagementTeamPage/Components/MeetOurTeam";
import Header from "./Header/Header.jsx";
import { Route, Routes } from "react-router-dom";
import ImageSlider from "./ImageSlider/ImageSlider.jsx";
import Footer from "./Footer/Footer.jsx";
import LoginPage from "./login/pages/LoginPage";
import Registration from "./Registration/Registration.jsx";
import Register from "./Registration/Register.jsx";

export default function App() {
  return (
    <div className="App">
      {/*<>*/}
      {/*    <Routes>*/}
      {/*        <Route path="/HomePage" element={{""}}/>*/}
      {/*    </Routes>*/}
      {/*</>*/}
      {/*<LoginPage />*/}<Registration/>
      {/*<Header/>*/}
      {/*<ImageSlider/>*/}
      {/* <LandingPage/>*/}
      {/*<AboutPage/>*/}
      {/*<MeetOurTeam/>*/}
    </div>
  );
}
