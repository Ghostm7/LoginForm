import axios from "axios";
import React , { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUserAlt } from "react-icons/fa";
const RegForm = () => {
    const [data, setData] = useState({
        regName: '',
        RegEmail: '',
        regPassword: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData ((prev) => {
            return {...prev, [name]: value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form Validation
        if (data.name.length === 0) {
            toast.error("Name field cannot be empty", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        } else if (data.email.length === 0) {
            toast.error("Email field cannot be empty", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        } else if (data.password.length === 0) {
            toast.error("Password field cannot be empty", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        } else {
            axios.post ("http://localhost:4000/api/Reg/addReg", data)
            .then((res) => {
                // Handle successful response
                setData({
                    regName: '',
                    RegEmail: '',
                    regPassword: ''
                })
                toast.success("Registration successful", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                });
            })
            .catch((err) => {
                // Handle error response
                toast.error(err.response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                });
            });

    }}

    return (
        <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Registration Form</h1>
          <div className="input_box">
            <input
              type="text"
              placeholder="Name"
              name="RegName"
              value={data.RegName}
              onChange={handleChange}
              required
            />
            <FaUserAlt className="icon" />
          </div>
          <div className="input_box">
            <input
              type="email"
              placeholder="Email"
              name="RegEmail"
              value={data.regEmail}
              onChange={handleChange}
              required
            />
            <FaUserAlt className="icon" />
          </div>
          <div className="input_box">
            <input
              type="password"
              placeholder="Password"
              name="RegPassword"
              value={data.RegPassword}
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
}

export default RegForm;