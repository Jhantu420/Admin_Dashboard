import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
  RiUserFill,
  RiMailFill,
  RiLockPasswordFill,
  RiPhoneFill,
} from "react-icons/ri";
import "./Update.css";
import image from "./signup.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
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

function UpdateDataPreUser() {
  const { id } = useParams();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  useEffect(() => {
    // Fetch user data based on ID when the component mounts
    axios
      .get(`http://localhost:3001/datapreparationuser/${id}`)
      .then((response) => {
        const user = response.data;
        setUserData({
          name: user.name,
          email: user.email,
          password: user.password,
          phoneNumber: user.phoneNumber,
        });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [id]);


  const handleSubmit = (values, { resetForm }) => {
    // Create a new user object with updated data
    const updatedUser = {
      name: values.name,
      email: values.email,
      password: values.password,
      phoneNumber: values.phoneNumber,
    };

    // Send a PUT request to update the user data
    axios
      .put(`http://localhost:3001/datapreparationuser/update/${id}`, updatedUser)
      .then((response) => {
        console.log("User updated:", response.data);
        alert("User updated successfully");
        resetForm();
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  return (
    <div className="main">
      <div>
        <div className="registration-form-container">
          <Formik
            initialValues={userData}
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
                <button type="submit" className="submit-button">
                  Update User
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

export default UpdateDataPreUser;
