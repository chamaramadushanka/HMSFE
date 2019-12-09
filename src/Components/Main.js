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

const Main = () =>(
  <Switch>
    {/* <Route exact path="/Loginform" component={Loginform}></Route> */}
    <Route path="/PatientRegistration" component={PatientRegistration}></Route>
    <Route path="/Dashboard" component={Dashboard}></Route>
    <Route path="/Patientdetails" component={Patientdetails}></Route>
    <Route path="/Background" component={Background}></Route>
    <Route path="/Doctordetails" component={DoctorDetails}></Route>
    <Route path="/Docregistration" component={Docregistration}></Route>
  </Switch>
)

export default Main;
