import React, { Component } from 'react';
import logo from '../Images/logo.svg';
import styles from '../../src/css/Login.css';
import {Redirect} from 'react-router-dom';
import { useAuth0 } from "../react-auth0-spa";




    const LoginForm =() =>{
        const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

// export class LoginForm extends Component {

    // constructor(props) {
    //     super(props)
        
        // let loggedIn = false
        // this.state = {
            //  username:'',
            //  password:'',
            //  loggedIn
        // }
        // this.onChange = this.onChange.bind(this)
        // this.submitForm = this.submitForm.bind(this)
    // }
//     refresList(){
//         fetch('http://localhost:59388/api/employees')
//         .then(Response =>Response.json())
//         .then(data=>{
//             this.setState({Employees:data});
//         });
//    }
    
    // onChange(e){
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    //     console.log(this.state);
    // }
    
    // submitForm(e){
    //     e.preventDefault()
    //     const{username,password} = this.state
    //     //login state
    //     if(username === "A" && password ==="B"){
    //         localStorage.setItem("token","sdfsdfsdfhgsdhgfaygwjavsjhdf551531351315")
    //         this.setState({
    //             loggedIn:true
    //         })
    //     }
    // }
    // render(){
        // if(this.state.loggedIn){
        //     return <Redirect to ="/Dashboard"/>
        // }
    return (
        
        // <form onSubmit = {this.submitForm}>
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
                        <input type="submit" onClick={() => loginWithRedirect({})}/>
                    </div>
                </div>

            </div>
            </form>

    );
}


export default LoginForm