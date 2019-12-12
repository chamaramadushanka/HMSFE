import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import PatientRegistration from './PatientRegistration';
import Dashboard from './Dashboard';
import Patientdetails from './PatientDetails';
import Background from './Background';
import DoctorDetails from './DoctorDetails';
import Loginform from './Loginform';
import Docregistration from './DoctorRegistration';
import EmployeeDetails from './EmployeeDetails';
import { Positions } from './Positions';
import { AddAttendence } from './AddAttendence';
import { Attendencedetails } from './Attendencedetails';
import {OvertimeDetails} from './OvertimeDetails';

const Main = () =>(
  <Switch>
    {/* <Route exact path="/Loginform" component={Loginform}></Route> */}
    <Route path="/PatientRegistration" component={PatientRegistration}></Route>
    <Route path="/Dashboard" component={Dashboard}></Route>
    <Route path="/Patientdetails" component={Patientdetails}></Route>
    <Route path="/Background" component={Background}></Route>
    <Route path="/Doctordetails" component={DoctorDetails}></Route>
    <Route path="/Docregistration" component={Docregistration}></Route>
    <Route path="/Docregistration" component={Docregistration}></Route>
    <Route path="/EmployeeDetails" component={EmployeeDetails}></Route>
    <Route path="/Positions" component={Positions}></Route>
    <Route path="/AddAttendence" component={AddAttendence}></Route>
    <Route path="/Attendencedetails" component={Attendencedetails}></Route>
    <Route path="/OvertimeDetails" component={OvertimeDetails}></Route>
  </Switch>
)

export default Main;
