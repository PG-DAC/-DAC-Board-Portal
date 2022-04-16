import React from 'react';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import * as ReactBootStrap from "react-bootstrap";
import "./Register.css";
import "bootstrap/dist/css/bootstrap.css";
import Logout from "./Component/Logout.js";



import Quiz from './pages/Quiz';
import Feedback from './pages/Feedback';
import Messages from './pages/Messages';
import Recording from './pages/Recording';
import Scheduled from './pages/Scheduled';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import CreateMessage from './Component/CreateMessage';



const Homepage1 = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
           <Route path='/Homepage1' exact component={Home} />
           <Route path='/quiz' component={Quiz} />
           <Route path='/feedback' component={Feedback} />
           <Route path='/messages' component={Messages} />
           <Route path='/recording' component={Recording} />
           <Route path='/scheduled' component={Scheduled} />
           <Route path='/profile' component={Profile} />
           <Route path='/contact' component={Contact} />
           <Route path='/add-message/:id' component={CreateMessage} />
           <Route path='/logout' component={Logout} />
           
          
        </Switch>
      </Router>
    </>
  );
}

export default Homepage1;
