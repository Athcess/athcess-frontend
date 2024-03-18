import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import WelcomePage from "../pages/WelcomePage";
import SignUpPage from "../pages/SignUpPage";
import SelectRolePage from "../pages/SelectRolePage";
import SignInPage from "../pages/SignInPage";
import HomePage from "../pages/HomePage";
import ChatBoxPage from "../pages/ChatBoxPage";
import SearchPage from "../pages/SearchPage";
import AthleteProfilePage from "../pages/AthleteProfilePage";
import ScoutProfilePage from "../pages/ScoutProfilePage";
import OrgProfilePage from "../pages/OrgProfilePage";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";

export default function AppRouter({}) {
  return (
    <Router>
      <Routes>
        <Route
          element={
            <>
              <NavigationBar></NavigationBar>
              <Outlet />
            </>
          }>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/selectrole" element={<SelectRolePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/home" element={<HomePage />} />
        <Route path="/chatbox" element={<ChatBoxPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/athleteprofile" element={<AthleteProfilePage />} />
        <Route path="/scoutprofile" element={<ScoutProfilePage />} />
        <Route path="/orgprofile" element={<OrgProfilePage />} />
      </Routes>
    </Router>
  );
}
