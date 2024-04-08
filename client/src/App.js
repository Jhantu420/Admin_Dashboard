import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Datapre from "./User/Datapre";
import Login from "./Components/Login";
import About from "./Components/About";
import Contributer from "./Components/Contributer";
import User from "./Components/User";
import DashBoard from "./Dashboard/Dashboard";
import CreateUser from "./Components/CreateUser";
import UpdateUser from "./Components/UpdateUser";
import SuperAdmin from "./Components/SupderAdmin";
import UpdateSuper from "./Update/Update_super";
import ForgotPasswordForm from "./Components/ForgotPasswordForm";
import TestingUser from "./Components/TestingUser";
import TrainingUser from "./Components/TrainingUser";
import ReportUser from "./Components/ReportUser";
import CreateUserForSuper from "./Components/CreateUserForSuper";
const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const checkTokenExpiration = () => {
      if (token) {
        const decodedToken = jwtDecode(token);
        const currentTimestamp = Date.now() / 1000;

        // Check if the token is about to expire (e.g., within the next 5 minutes)
        if (decodedToken.exp < currentTimestamp + 3) {
          console.log(
            "Token is about to expire or has expired. Re-authenticate."
          );

          // Show alert message
          alert("Token has expired. Please log in again.");
          // Remove the expired token
          localStorage.removeItem("token");
          setToken(null);
        }
      }
    };

    checkTokenExpiration();
  }, [token]);

  return (
    <>
      <Navbar />

      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/datapre-user" element={<Datapre />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/user" element={<User />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contributer" element={<Contributer />} />
        <Route path="/updateuser/:id" element={<UpdateUser/>} />
        <Route path="/superadmin" element={<SuperAdmin/>} />
        <Route path="/updateSuper" element={<UpdateSuper/>} />
        <Route path="/forgetpassword" element={<ForgotPasswordForm/>} />
        <Route path="/testinguser" element={<TestingUser/>} />
        <Route path="/traininguser" element={<TrainingUser/>} />
        <Route path="/reportuser" element={<ReportUser/>} />
        <Route path="/createusersuper" element={<CreateUserForSuper/>} />
      </Routes>
    </>
  );
};

export default App;
