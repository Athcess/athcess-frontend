import React from "react";
import NavigationBar from "../Components/NavigationBar";
import WelcomePage from "../Pages/WelcomePage";
import SignUpPage from "../Pages/SignUpPage";
import SelectRolePage from "../Pages/SelectRolePage";
import SignInPage from "../Pages/SignInPage";
import HomePage from "../Pages/HomePage";
import ChatBoxPage from "../Pages/ChatBoxPage";
import SearchPage from "../Pages/SearchPage";
import AthleteProfilePage from "../Pages/AthleteProfilePage";
import ScoutProfilePage from "../Pages/ScoutProfilePage";
import OrgProfilePage from "../Pages/OrgProfilePage";
import NotFoundPage from "../Pages/NotFoundPage";
import ForgetPasswordPage from "../Pages/ForgetPasswordPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";

export default function AppRouter() {
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
          <Route path="/home" element={<HomePage />} />
          <Route path="/chatbox" element={<ChatBoxPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/athleteprofile" element={<AthleteProfilePage />} />
          <Route path="/scoutprofile" element={<ScoutProfilePage />} />
          <Route path="/orgprofile" element={<OrgProfilePage />} />
        </Route>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/selectrole" element={<SelectRolePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
