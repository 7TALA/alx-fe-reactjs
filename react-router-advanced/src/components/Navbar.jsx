import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1.5rem",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/Profile">Profile</Link>
      <Link to="/Blog">Blog</Link>
    </nav>
  );
};

export default Navbar;