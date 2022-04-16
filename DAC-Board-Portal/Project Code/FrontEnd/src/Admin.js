import React from 'react';
import Nav from './Component/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import * as ReactBootStrap from "react-bootstrap";
import "./Register.css";



import HomeAdmin from './pages/HomeAdmin';
import QuizAdmin from './pages/QuizAdmin';

import MessagesAdmin from './pages/MessagesAdmin';
import RecordingAdmin from './pages/RecordingAdmin';
import ScheduledAdmin from './pages/ScheduledAdmin';
import Users from './pages/Users';
import CreateRecordingComponent from './Component/CreateRecordingComponent';
import CreateScheduleComponent from './Component/CreateScheduleComponent';
import UpdateRecordingComponent from './Component/UpdateRecordingComponent';
import UpdateScheduleComponent from './Component/UpdateScheduleComponent';
import AdminUser from './Component/AdminUser';
import AdminFeedback from './Component/AdminFeedback';



const Admin = () => {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
           <Route path='/Admin' exact component={HomeAdmin} />
           <Route path='/quizadmin' component={QuizAdmin} />
          
           <Route path='/messagesadmin' component={MessagesAdmin} />
           <Route path='/recordingadmin' component={RecordingAdmin} />
           <Route path='/scheduledadmin' component={ScheduledAdmin} />
           <Route path='/users' component={AdminUser} />
           <Route path='/admin-feedback' component={AdminFeedback} />
           <Route path = "/add-recording/:id" component = {CreateRecordingComponent}></Route>
           <Route path = "/add-schedule/:id" component = {CreateScheduleComponent}></Route>
           <Route path = "/add-recording/:id" component = {UpdateRecordingComponent}></Route>
           <Route path = "/add-schedule/:id" component = {UpdateScheduleComponent}></Route>


           
          
        </Switch>
      </Router>
    </>
  );
}

export default Admin;
