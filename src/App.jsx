import "./App.css";
import React from "react";
import {Route, Routes} from "react-router-dom";

import LandingPage from "./Homepage/LandingPage.jsx";
import MeetOurTeamPage from "./ManagementTeamPage/Components/MeetOurTeam.jsx"
import AboutUsPage from "./AboutUspage/Components/AboutPage.jsx";
import RegistrationPage from "./Registration/Registration.jsx";
import Login from "./login/components/Login.jsx";
import LoginPage from "./login/pages/LoginPage.jsx";

export default function App() {
    return (<div className="App">
        <>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/ManagementTeam" element={<MeetOurTeamPage/>}/>
                <Route path="/AboutUsPage" element={<AboutUsPage/>}/>
                <Route path="/LoginPage" element={<LoginPage/>}/>
                <Route path="/Registration" element={<RegistrationPage/>}/>
                <Route path="*" element={<h1>PageNotFound!</h1>}/>
            </Routes>
        </>
    </div>);
}