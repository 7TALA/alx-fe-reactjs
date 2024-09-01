import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";

const Profile = () => {
  return (
    <>
      <div>Profile Page </div>
      <div>
        <h1>Profile Page</h1>
        // Logout button
        <button onClick={() => fakeAuth.signout(() => window.location.href = './login')}>Logout</button>
      </div>
      <nav>
        <Link to="details"> Details </Link>
        <Link to="settings"> Settings </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Profile;