import "./App.css";
import React from "react";
import {Route, Routes} from "react-router-dom";

import LandingPage from "./Homepage/LandingPage";
import MeetOurTeamPage from "./ManagementTeamPage/Components/MeetOurTeam.jsx";
import AboutUsPage from "./AboutUspage/Components/AboutPage";
import RegistrationPage from "./Registration/Registration";
import LoginPageNewVersion from "./LoginPage/LoginPageNewVersion";

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

                    <Route path="/Registration" element={<RegistrationPage/>}/>

                    <Route path="*" element={<h1>PageNotFound!</h1>}/>
                </Routes>
            </>
        </div>);
}
