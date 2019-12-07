import React from 'react';
import logo from '../Images/logo.svg';
import styles from '../../src/css/Login.css';
// import '../../src/css/Login.css';


function LoginForm(props) {
    return (
        <div className={styles.Main}>
            <div className="row submain">
                <div className="Loginside1 col-xs-6 col-sm-6">
                    <h1>Hospital Management System</h1>
                    <h4>Make Your Customers Happier</h4>
                </div>

                <div className="Form col-xs-6 col-sm-6">
                    <div className="subform">
                        <div className="userlogomain">
                            <img src={logo} className="userlogo" alt="User" />
                            <h2 >User Login</h2>
                        </div>
                        <div className="Username">
                            <label> UserName</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                            <label>Password</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                        </div>
                        <input type="submit" value="Login" />
                    </div>
                </div>
            </div>
        </div>

    );
}


export default LoginForm