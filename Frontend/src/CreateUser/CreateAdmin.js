import React from "react";
import { useNavigate } from "react-router-dom";
import {
  RiUserFill,
  RiMailFill,
  RiLockPasswordFill,
  RiPhoneFill,
} from "react-icons/ri";
import { FaUserTie } from "react-icons/fa";
import "./CreateUser.css";
import image from "./signup.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios"; // Import axios for making API requests

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  userType: Yup.string().required("User Type is required"),
});

function InputGroup({ icon, field, placeholder, type }) {
  return (
    <div className="input-group">
      {icon}
      <Field
        type={type}
        name={field.name}
        placeholder={placeholder}
        className="underlined-input"
      />
      <ErrorMessage
        name={field.name}
        component="div"
        className="error"
        style={{ color: "red" }} 
      />
    </div>
  );
}

function CreateUser() {
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    userType: "",
  };
  const handleSubmit = (values, { resetForm }) => {
    let baseUrl = "";

    switch (values.userType) {
      case "Data Preparation User":
        baseUrl = "http://localhost:3001/datapreparationuser/";
        break;
      case "Training User":
        baseUrl = "http://localhost:3001/traininguser";
        break;
      case "Testing User":
        baseUrl = "http://localhost:3001/testinguser/";
        break;
      case "Report User":
        baseUrl = "http://localhost:3001/reportuser/";
        break;
      default:
        console.error("Invalid user type:", values.userType);
        return;
    }

    axios
      .post(baseUrl, values)
      .then((response) => {
        console.log("User registered:", response.data);
        alert("User created successfully");
        resetForm();
      })
      .catch((error) => {
        console.error("Error registering user:", error);
      });
  };

  return (
    <div className="main">
      <div>
        <div className="registration-form-container">
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ errors, touched }) => (
              <Form className="registration-form">
                <InputGroup
                  icon={<RiUserFill className="input-icon" />}
                  field={{ name: "name" }}
                  placeholder="Name"
                  type="text"
                />
                <InputGroup
                  icon={<RiMailFill className="input-icon" />}
                  field={{ name: "email" }}
                  placeholder="Email"
                  type="email"
                />
                <InputGroup
                  icon={<RiLockPasswordFill className="input-icon" />}
                  field={{ name: "password" }}
                  placeholder="Password"
                  type="password"
                />
                <InputGroup
                  icon={<RiPhoneFill className="input-icon" />}
                  field={{ name: "phoneNumber" }}
                  placeholder="Phone Number"
                  type="tel"
                />
                <div className="input-group">
                  <FaUserTie className="input-icon" />
                  <Field
                    as="select"
                    name="userType"
                    className="underlined-input"
                  >
                    <option value="" disabled>
                      User Type
                    </option>
                    <option value="Data Preparation User">
                      Data Preparation User
                    </option>
                    <option value="Training User">Training User</option>
                    <option value="Testing User">Testing User</option>
                    <option value="Report User">Report User</option>
                  </Field>
                  <ErrorMessage
                    name="userType"
                    component="div"
                    className="error"
                    style={{ color: "red" }} 
                  />
                </div>
                <button type="submit" className="submit-button">
                  Create User
                </button>
                
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="img">
        <img src={image} alt="My Image" />
      </div>
    </div>
  );
}

export default CreateUser;
