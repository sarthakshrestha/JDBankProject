import "./App.css";
import React from "react";
import {Route, Routes} from "react-router-dom";

import LandingPage from "./Homepage/Homepage";
import MeetOurTeamPage from "./ManagementTeamPage/Components/MeetOurTeam.jsx";
import AboutUsPage from "./AboutUspage/AboutUspage";
import LoginPageNewVersion from "./LoginPage/LoginPageNewVersion";
import Registration from "./Registration/Components/Registration.jsx"
import ServicesPage from "./Services/Components/ServicesPage.jsx";
import ServiceMain from "./Services/ServiceMain.jsx";
// import Dashboard from "./AdminDashboard/Components/Dashboard.jsx";
// import RootAdmin from "./Layouts/RootAdmin.jsx";
// import ShowAdmin from "./AdminDashboard/Components/ShowAdmin.jsx";
// import AdminMain from "./AdminDashboard/AdminMain.jsx";

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

                    <Route path="/Registration" element={<Registration/>}/>

                    <Route path="*" element={<h1>PageNotFound!</h1>}/>

                    <Route path="/Services" element={<ServiceMain/>}/>

                </Routes>
            </>
        </div>);
}
