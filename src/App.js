import React from 'react';
import './App.css';
import CourseForm from './Components/CourseForm';
import RegForm from './Components/RegForm';
import StudentForm from './Components/StudentForm';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/StudentForm">
              <StudentForm/>
            </Route>
            <Route path="/CourseForm">
              <CourseForm/>
            </Route>
            <Route path="/RegForm">
              <RegForm/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;


// // app.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import RegForm from './Components/RegForm';
// import StudentForm from './Components/StudentForm';
// import CourseForm from './Components/CourseForm';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/registration" component={RegForm} />
//           <Route path="/student" component={StudentForm} />
//           <Route path="/course" component={CourseForm} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
