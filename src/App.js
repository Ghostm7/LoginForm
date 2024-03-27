import './App.css';
import CourseForm from './Components/CourseForm';
import RegForm from './Components/RegForm';
import StudentForm from './Components/Assets/LoginForm/StudentForm';
import Home from './Components/Home';
import Navbar from './Components/Navbar';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

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
          <Route path="/RegForm">
            <RegForm/>
          </Route>
          <Route path="/StudentForm">
            <StudentForm/>
          </Route>
          <Route path="/CourseForm">
            <CourseForm/>
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;