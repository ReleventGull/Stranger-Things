import React from "react";
import { Link } from "react-router-dom";



const Register = () => {
    return (
        <div className="register-container">
        <div>Register An Account!</div>
        <form className="register-form">
        
        <label>Username</label>
        <input type="username"></input>
        
        <label type="password">Password</label>
        <input type="password"></input>
        
        <label type="password">Confirm Password</label>
        <input type="password"></input>

        </form>


        <h3>Already have an account? <Link to="/login">Log in!</Link> </h3>
        </div>
    )
}









export default Register
