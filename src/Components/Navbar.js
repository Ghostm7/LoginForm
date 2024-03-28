import { Link } from 'react-router-dom';


import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
           
            <div className="links">
        
                <Link to="/">Home </Link>
                <Link to="/RegForm">Register Form</Link>
                <Link to="/StudentForm">Student Form</Link>
                <Link to="/CourseForm">Course Form</Link>
            </div>
        </nav> 
    );
}

export default Navbar;


// // Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/registration">Registration Form</Link>
//         </li>
//         <li>
//           <Link to="/student">Student Form</Link>
//         </li>
//         <li>
//           <Link to="/course">Course Form</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


