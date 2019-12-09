import React from 'react';
import '../../src/css/Admin.css';
import Main from '../Components/Main';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MenuIcon from '@material-ui/icons/Menu';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import EmailIcon from '@material-ui/icons/Email';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';

import AccessibleIcon from '@material-ui/icons/Accessible';
import AddBoxIcon from '@material-ui/icons/AddBox';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Layout() {
  return (
    <div className = "Layout">
      <Dashboardnavbar />
      <Wrapper />
    </div>
  )
}

function Dashboardnavbar() {
  return (
    <div>
      <nav class="navbar navbar-expand navbar-dark bg-dark  navbar-fixed-top">
        <a class="navbar-brand mr-1" href="index.html">HMS-HealthLine </a>
        <button class="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
        <MenuIcon/>
        </button>
        <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
          <div class="input-group">
          <div style={{
                display: 'flex',
                alignItems: 'center'
                }}>
            <input type="text" class="form-control" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
            <div class="input-group-append srchbtn">
            <button class="btn btn-primary btn-xs" type="button">
                <SearchIcon/>
              </button></div>


              
            </div>
          </div>
        </form>

        <ul class="navbar-nav ml-auto ml-md-0">
          <li class="nav-item dropdown no-arrow mx-1">
            <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <NotificationsActiveIcon/>
              <span class="badge badge-danger">9+</span>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item dropdown no-arrow mx-1">
            <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <EmailIcon/>
              <span class="badge badge-danger">7</span>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="messagesDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item dropdown no-arrow">
            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <AccountCircleIcon/>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
              <a class="dropdown-item" href="#">Settings</a>
              <a class="dropdown-item" href="#">Activity Log</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">Logout</a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function Wrapper() {
  return (
    <div>
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        <ul class="sidebar navbar-nav">
          <li class="nav-item active">
              <span><Link class = "nav-link" to="/Dashboard" style={{ textDecoration: 'none', color: 'white' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center'
                }}><DashboardIcon style={{ fontSize: 18},{padding:2}}/>Dashboard</div></Link>
              </span>
            
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-fw fa-folder"></i>
              <span><AccessibleIcon style={{ fontSize: 25},{padding:1}}/>Patient</span>
            </a>
            <div class="dropdown-menu" aria-labelledby="pagesDropdown">
              <Link className = "dropdown-item" to="/PatientRegistration">patient Register</Link>
              <Link className = "dropdown-item" to="/PatientDetails">PatientDetails</Link>
              <a class="dropdown-item" href="forgot-password.html">Prescription</a>
              <a class="dropdown-item" href="forgot-password.html">xxxx</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              
              <span><AddBoxIcon style={{ fontSize: 18},{padding:1}}/>Doctor</span>
            </a>
            <div class="dropdown-menu" aria-labelledby="pagesDropdown">
              <Link className = "dropdown-item" to="/Docregistration">Doctor Register</Link>
              <Link className = "dropdown-item" to="/doctordetails">Doctor Details</Link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-fw fa-folder"></i>
              <span><SupervisorAccountIcon style={{ fontSize: 18},{padding:1}}/>Master</span>
            </a>
            <div class="dropdown-menu" aria-labelledby="pagesDropdown">
              <a class="dropdown-item" href="login.html">Test Register</a>
              <a class="dropdown-item" href="register.html">Medicine Details</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="charts.html">
              <i class="fas fa-fw fa-chart-area"></i>
              <span>Charts</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="tables.html">
              <i class="fas fa-fw fa-table"></i>
              <span>Tables</span></a>
          </li>
        </ul>
         <Main/> 
      </div>
    </div>
  )
}
export default Layout;