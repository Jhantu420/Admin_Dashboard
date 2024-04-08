import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

import "../Css/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  // Decode the token
  const token = localStorage.getItem("token");
  const decodedToken = token ? jwtDecode(token) : null;

  // Define allowedRoles within the component
  const allowedRoles = ["datapre", "training", "testing", "report", "super"];

  const handleLogout = async () => {
    try {
      if (!token || !decodedToken) {
        // No token or decoded token found, redirect to the login page
        navigate("/login");
        return;
      }

      console.log(decodedToken.role);

      // Check if the role is one of "datapre", "training", "testing", "report", or "super"
      if (decodedToken.role && allowedRoles.includes(decodedToken.role)) {
        localStorage.removeItem("token");
        navigate("/login");
        return;
      }

      // Make a request to the backend logout endpoint
      await axios.post("http://localhost:3001/userRoutes/logouttime", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Remove the token from local storage
      localStorage.removeItem("token");

      // Navigate to the login page
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
      // Handle any errors during logout
    }
  };

  return (
    <>
      <nav className="navbar">
        <label id="label">SONIC</label>
        <ul className="nav-Links">
          <NavLink to="/" className="navig">
            <u>Home</u>
          </NavLink>
          <NavLink to="/about" className="navig">
            <u>About us</u>
          </NavLink>
          {decodedToken && allowedRoles.includes(decodedToken.role) ? (
            <NavLink to="/dashboard" className="navig">
              <u>Dashboard</u>
            </NavLink>
          ) : null}
          {/* Conditionally render Login or Logout based on the presence of the token */}
          {token ? (
            <li className="navig" onClick={handleLogout}>
              <u id="logout">Logout</u>
            </li>
          ) : (
            <NavLink to="/login" className="navig">
              <u>Login</u>
            </NavLink>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
