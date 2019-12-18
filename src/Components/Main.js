import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Dashboard from './Dashboard';
import Loginform from './Loginform';
import EmployeeDetails from './Employee/EmployeeDetails';
import { Positions } from './Positions/Positions';
import { AddAttendence } from './Attendence/AddAttendence';
import { Attendencedetails } from './Attendence/Attendencedetails';
import {OvertimeDetails} from './Overtime/OvertimeDetails';
import {PaymentDetails} from './Payment/PaymentDetails';

const Main = () =>(
  <Switch>
    {/* <Route exact path="/Loginform" component={Loginform}></Route> */}
    <Route exact path="/" component={Dashboard}></Route>
    <Route path="/EmployeeDetails" component={EmployeeDetails}></Route>
    <Route path="/Positions" component={Positions}></Route>
    <Route path="/AddAttendence" component={AddAttendence}></Route>
    <Route path="/Attendencedetails" component={Attendencedetails}></Route>
    <Route path="/OvertimeDetails" component={OvertimeDetails}></Route>
    <Route path="/PaymentDetails" component={PaymentDetails}></Route>
  </Switch>
)

export default Main;
