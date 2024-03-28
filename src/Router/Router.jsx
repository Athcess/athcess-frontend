import React from "react";
import NavigationBar from "../Components/NavigationBar";
import WelcomePage from "../Pages/WelcomePage";
import SignUpPage from "../Pages/SignUpPage";
import SelectRolePage from "../Pages/SelectRolePage";
import SignInPage from "../Pages/SignInPage";
import HomePage from "../Pages/HomePage";
import ChatPage from "../Pages/ChatPage";
import SearchPage from "../Pages/SearchPage";
import AthleteProfilePage from "../Pages/AthleteProfilePage";
import AboutAthlete from "../Components/AthleteProfilePageComponents/AboutAthlete";
import ScoutProfilePage from "../Pages/ScoutProfilePage";
import OrgProfilePage from "../Pages/OrgProfilePage";
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
import styles from "../scss/AppRouter.module.scss";
import PostAthlete from "../Components/AthleteProfilePageComponents/PostAthlete";
import HighlightAthlete from "../Components/AthleteProfilePageComponents/HighlightAthlete";

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
          <Route path="/scoutprofile" element={<ScoutProfilePage />} />
          <Route path="/orgprofile" element={<OrgProfilePage />} />
          <Route path="/post/:postid" element={<PostPage />} />
          <Route path="/friend" element={<FriendListPage />} />
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
