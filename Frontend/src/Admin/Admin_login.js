import React, { useState } from "react";
import { RiMailFill, RiLockPasswordFill } from "react-icons/ri";
import "./Admin_login.css";
import img from "./signup.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Admin_loginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [subrole, setSubrole] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please provide both email and password.");
      return;
    }
    const data = { email, password };

    try {
      const response = await axios.post(
        "http://localhost:3001/adminroute/login",
        data
      );
      console.log("API Response:", response);

      if (response.status === 200 && response.data.success) {
        // Authentication successful
        const { subrole } = response.data;
        alert("Subrole is"+" "+subrole)
        setSubrole(subrole);

        // Redirect to the appropriate dashboard based on subrole
        navigate("/dashboard", { state: { subrole: subrole } });
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred while logging in: " + error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="main">
      <div className="img">
        <img src={img} alt="Signup" />
      </div>
      <div className="registration-form-container">
        <form className="registration-form">
          <div className="input-group">
            <RiMailFill className="input-icon" />
            <input
              type="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              placeholder="Email"
              className="underlined-input"
            />
          </div>
          <div className="input-group">
            <RiLockPasswordFill className="input-icon" />
            <input
              type={passwordVisible ? "text" : "password"}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              placeholder="Password"
              className="underlined-input"
            />
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              {passwordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </div>
          <div className="button-group">
            <button onClick={handleLogin} className="admin-button">
              Login
            </button>
          </div>
          {subrole}
        </form>
      </div>
    </div>
  );
};

export default Admin_loginForm;
