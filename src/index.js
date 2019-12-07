import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import LoginForm from './Components/Loginform';
import Dashboard from './Components/Dashboard';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Parent from './Tests/Parent';


ReactDOM.render(
    <Router>         
        <Route path = "/Loginform" component={LoginForm}></Route>  
        <Route path = "/Dashboard" component={Dashboard}></Route>   
        <Route path = "/Parent" component={Parent}></Route>   
   </Router>
, document.getElementById('root'));

serviceWorker.unregister();
