
import React from "react";

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import StudentRegistration from "./Components/Section/StudentRegistration";
import FacultyRegistration from "./Components/Section/FacultyRegistration";
import Profile from "./Components/Section/Profile";


function App() {
  return (
    <div >
        <main>
            <Router>
                <Route path="/" component={Home} exact />
                <Route path="/register" component={Register}  />
                <Route path="/login" component={Login}  />
                <Route path="/profile" component={Profile}/>
                <Route path="/studentregister" component={StudentRegistration} />
                <Route path="/facultyregister" component={FacultyRegistration} />
             </Router>
        </main>
    </div>
  );
}

export default App;
