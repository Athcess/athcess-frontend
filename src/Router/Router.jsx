import React from "react";
import NavigationBar from "../Components/NavigationBar";
import WelcomePage from "../Pages/WelcomePage";
import SignUpPage from "../Pages/SignUpPage";
import SignInPage from "../Pages/SignInPage";
import HomePage from "../Pages/HomePage";
import ChatPage from "../Pages/ChatPage";
import SearchPage from "../Pages/SearchPage";

import AthleteProfilePage from "../Pages/ProfilePage/AthleteProfilePage";
import AboutAthlete from "../Components/ProfilePageComponents/AthleteProfilePageComponents/AboutAthlete";
import PostAthlete from "../Components/ProfilePageComponents/AthleteProfilePageComponents/PostAthlete";
import HighlightAthlete from "../Components/ProfilePageComponents/AthleteProfilePageComponents/HighlightAthlete";

import ScoutProfilePage from "../Pages/ProfilePage/ScoutProfilePage";
import AboutScout from "../Components/ProfilePageComponents/ScoutProfilePageComponents/AboutScout";
import PostScout from "../Components/ProfilePageComponents/ScoutProfilePageComponents/PostScout";

import OrgProfilePage from "../Pages/ProfilePage/OrgProfilePage";
import AboutOrg from "../Components/ProfilePageComponents/OrgProfilePageComponents/AboutOrg";
import PostOrg from "../Components/ProfilePageComponents/OrgProfilePageComponents/PostOrg";
import EventOrg from "../Components/ProfilePageComponents/OrgProfilePageComponents/EventOrg";

import NotFoundPage from "../Pages/NotFoundPage";
import ForgetPasswordPage from "../Pages/ForgetPasswordPage";
import PostPage from "../Pages/PostPage";
import FriendListPage from "../Pages/FriendListPage";
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
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/athleteprofile" element={<AthleteProfilePage />}>
            <Route index element={<AboutAthlete></AboutAthlete>}></Route>
            <Route path="post" element={<PostAthlete></PostAthlete>}></Route>
            <Route
              path="highlight"
              element={<HighlightAthlete></HighlightAthlete>}></Route>
          </Route>
          <Route path="/search/:tosearch" element={<SearchPage />} />
          <Route path="/scoutprofile" element={<ScoutProfilePage />}>
            <Route index element={<AboutScout></AboutScout>}></Route>
            <Route path="post" element={<PostScout></PostScout>}></Route>
          </Route>
          <Route path="/orgprofile" element={<OrgProfilePage />}>
            <Route index element={<AboutOrg></AboutOrg>}></Route>
            <Route path="post" element={<PostOrg></PostOrg>}></Route>
            <Route path="event" element={<EventOrg></EventOrg>}></Route>
          </Route>
          <Route path="/post/:postid" element={<PostPage />} />
          <Route path="/friend" element={<FriendListPage />} />
        </Route>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
