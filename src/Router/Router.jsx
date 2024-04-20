import React, { useState, useEffect } from "react";
import NavigationBar from "../Components/NavigationBar";
import WelcomePage from "../Pages/WelcomePage";
import SignUpPage from "../Pages/SignUpPage";
import SignInPage from "../Pages/SignInPage";
import HomePage from "../Pages/HomePage";
import ChatPage from "../Pages/ChatPage";
import SearchPage from "../Pages/SearchPage";
import BodyAnalyzerPage from "../Pages/BodyAnalyzerPage";

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
import { ProtectedRoute } from "../Components/ProtectedRoute";
import { AuthProvider } from "../hooks/useAuth";
import {
  getUserFromLocalStorage,
  saveUserToLocalStorage,
} from "../hooks/useLocalStorage";

import MyCalendar from "../Pages/Calendar";
import HomePageGuest from "../Pages/HomePageGuest";
import SubscriptionPage from "../Pages/SubscriptionPage";
import CheckoutPage from "../Pages/CheckoutPage";

export default function AppRouter() {
  const [user, setUser] = useState(
    getUserFromLocalStorage() || {
      username: "",
      first_name: "",
      last_name: "",
      role: "",
      age: "",
      hometown: "",
      position: "",
      birth_date: "",
      education: ["", ""],
      teir: false,
      //organization
      organization: "",
    }
  );

  const updateteir = (newteir) => {
    setUser((prevUser) => ({
      ...prevUser,
      teir: newteir,
    }));
  };

  const newUser = (data) => {
    setUser(data);
    console.log(user);
  };

  useEffect(() => {
    saveUserToLocalStorage(user);
  }, [user]);

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            element={
              <>
                <ProtectedRoute>
                  <NavigationBar
                    user={user}
                    updateteir={updateteir}></NavigationBar>
                  <Outlet />
                </ProtectedRoute>
              </>
            }>
            <Route path="/home" element={<HomePage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/calendar" element={<MyCalendar />} />
            <Route
              path="/subscription"
              element={<SubscriptionPage user={user} updateteir={updateteir} />}
            />
            <Route
              path="/checkout"
              element={
                <CheckoutPage updateteir={updateteir}></CheckoutPage>
              }></Route>
            <Route
              path="/search/:tosearch"
              element={<SearchPage user={user} />}
            />
            <Route path="/post/:postid" element={<PostPage />} />
            <Route path="/friend" element={<FriendListPage />} />
            <Route
              path="/bodyanalyzer"
              element={<BodyAnalyzerPage user={user} />}
            />
            <Route path="/Calendar" element={<MyCalendar />} />

            <Route
              path="/athleteprofile"
              element={<AthleteProfilePage user={user} />}>
              <Route index element={<AboutAthlete></AboutAthlete>}></Route>
              <Route
                path="post"
                element={<PostAthlete user={user}></PostAthlete>}></Route>
              <Route
                path="highlight"
                element={<HighlightAthlete></HighlightAthlete>}></Route>
            </Route>
            <Route
              path="/scoutprofile"
              element={<ScoutProfilePage user={user} />}>
              <Route index element={<AboutScout></AboutScout>}></Route>
              <Route path="post" element={<PostScout user={user} ></PostScout>}></Route>
            </Route>
            <Route path="/orgprofile" element={<OrgProfilePage />}>
              <Route index element={<AboutOrg></AboutOrg>}></Route>
              <Route path="post" element={<PostOrg></PostOrg>}></Route>
              <Route path="event" element={<EventOrg></EventOrg>}></Route>
            </Route>
          </Route>

          <Route path="/" element={<WelcomePage />} />
          <Route path="/homeguest" element={<HomePageGuest />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage newUser={newUser} />} />
          <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
