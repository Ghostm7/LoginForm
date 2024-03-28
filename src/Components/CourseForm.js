import React , { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const CourseForm = () => {
    const [data, setData] = useState({
        courseName: '',
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
        if (data.courseName.length === 0) {
            toast.error("Course name field cannot be empty", {
                position: "top-right",
                autoClose: 3000,
            });
        } else {
            axios.post("http://localhost:4000/api/courses/addCourse", data)
            .then(res => {
                setData(res.data);
    
                toast.success("New course successfully added", {
                    position: "top-right",
                    autoClose: 3000,
                })
            }).catch (err => {
                console.log(err)
        })  
    }}

    return (
        <div className="wrapper">
           <form onSubmit={handleSubmit}>
        <h1>Course Form</h1>
        <div className="input_box">
          <input
            type="text"
            placeholder="Course"
            name="courseName"
            value={data.courseName}
            onChange={handleChange}
            required
          />
         
        </div>
       

       

        <button type="submit">Enter Course</button>

        <ToastContainer />

        
      </form>
        </div>
    );
}

export default CourseForm;