import React from "react";
import { Link } from "react-router-dom";






const Login = () => {
    return (
        <div className="login-container">
        <div>Register An Account!</div>
        <form className="login-form">
        
        <label>Username</label>
        <input type="username"></input>
        
        <label type="password">Password</label>
        <input type="password"></input>
        
    

        </form>

        <h3>Don't have an account?<Link to="/"> Create an Account!</Link> </h3>
        </div>
    )
}



export default Login