import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./LoginForm.css";
import { FaUserAlt } from "react-icons/fa";

const FormComponent = () => {
  const [data, setFormData] = useState({
    firstname: "",
    lastname: "",
    gender: "",
  });

  const handleChange = (e) => {
 const {name, value} = e.target;
    setFormData ((prev) => {
      return {...prev, [name]: value}
    })
  }
  const saveStudent = (e) => {
    e.preventDefault();
    // Form Validation
    if (data.firstname.length === 0) {
      toast.error("First name field cannot be empty", {
        position: "top-right",
        autoClose: 3000,
      });
    } else if (data.lastname.length === 0) {
      toast.error("Last name field cannot be empty", {
        position: "top-right",
        autoClose: 3000,
      });
    } else if (data.gender.length === 0) {
      toast.error("Gender field cannot be empty", {
        position: "top-right",
        autoClose: 3000,
      });
    } else {
      axios
        .post("http://localhost:4000/api/students/addStudent", data)
        .then((res) => {
          // Handle successful response
          setFormData(res.data);

          toast.success("New student successfully added", {
            position: "top-right",
            autoClose: 3000,
          });
        })
        .catch((error) => {
          console.error("Axios error:", error);
          toast.error("An error occurred while adding the student", {
            position: "top-right",
            autoClose: 3000,
          });
        });
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={saveStudent}>
        <h1>Student Form</h1>
        <div className="input_box">
          <input
            type="text"
            placeholder="Firstname"
            name="firstname"
            value={data.firstname}
            onChange={handleChange}
            required
          />
          <FaUserAlt className="icon" />
        </div>
        <div className="input_box">
          <input
            type="text"
            placeholder="Lastname"
            name="lastname"
            value={data.lastname}
            onChange={handleChange}
            required
          />
          <FaUserAlt className="icon" />
        </div>
        <div className="input_box">
          <input
            type="text"
            placeholder="Gender"
            name="gender"
            value={data.gender}
            onChange={handleChange}
            required
          />
          <FaUserAlt className="icon" />
        </div>

       

        <button type="submit">Register</button>

        <ToastContainer />

        
      </form>
    </div>
  );
};

export default FormComponent;
