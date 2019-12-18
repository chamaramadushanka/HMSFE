import React, { Component } from 'react';
import logo from '../Images/logo.svg';
import styles from '../../src/css/Login.css';
import {Redirect} from 'react-router-dom';
import { useAuth0 } from "../react-auth0-spa";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  




    const LoginForm =() =>{
        const { isAuthenticated, loginWithRedirect, logout } = useAuth0();


    return (
        <form>
            <div className="row submain">
                <div className="Loginside1 col-xs-6 col-sm-6">
                    <h1>Payroll Management System</h1>
                    <h4>Make Your Employees Happier</h4>
                </div>
                <div className="Form col-xs-6 col-sm-6">
                    <div className="subform">
                        <div className="userlogomain">
                            <img src={logo} className="userlogo" alt="User" />
                            <h2 >User Login</h2>
                        </div>
                        <div className="Username">
                            <label> UserName</label>
                            <input type="text" id="username" name="username" placeholder="Username" />
                            <label>Password</label>
                            <input type="text" id="password" name="password" placeholder="Password" />
                        </div>
                        {/* <Link to ="/Dashboard"><input type="submit" onClick={() => loginWithRedirect({})}/></Link> */}
                        <input type="submit" onClick={() => loginWithRedirect({})}/>
                    </div>
                </div>

            </div>
            </form>

    );
}


export default LoginForm