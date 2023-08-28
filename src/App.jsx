import { useState } from "react";

import "./App.css";
import React from "react";

import LandingPage from "./Homepage/LandingPage";
import AboutPage from "./AboutUspage/Components/AboutPage";
import MeetOurTeam from "./ManagmentTeamPage/Components/MeetOurTeam";
import Header from "./Header/Header.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImageSlider from "./ImageSlider/ImageSlider.jsx";
import Footer from "./Footer/Footer.jsx";
import LoginPage from "./login/pages/Login";

export default function App() {
  return (
    <>
      <div className="App">
        {/*<>*/}
        {/*    <Routes>*/}
        {/*        <Route path="/HomePage" element={{""}}/>*/}
        {/*    </Routes>*/}
        {/*</>*/}
        {/*<Header/>*/}
        {/*<ImageSlider/>*/}
        <LandingPage />
        <Footer />
        {/*<AboutPage/>*/}
        {/*<MeetOurTeam/>*/}
      </div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
