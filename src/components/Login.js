import React, { useState } from "react"
import { Link  } from "react-router-dom";
import { checkUsers } from "../api/Api";






const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState('')
    
    
    const handleLogin = (event) => {
    event.preventDefault()
    checkUsers(username, password)
   
    }
    
    
    
    
    
    return (
        
        <div className="login-container">
        <div>Register An Account!</div>
        
        
        
        <form onSubmit = {handleLogin} className="login-form">
        
        <label>Username</label>
        <input value={username} onChange={(event) => setUsername(event.target.value)} type="username"></input>
        
        <label type="password">Password</label>
        <input onChange={(event) => setPassword(event.target.value)} value={password} type="password"></input>
        <button className="login-button" type="submit">Login!</button>
        
    

        </form>

        <h3>Don't have an account?<Link to="/register"> Create an Account!</Link> </h3>
        
        </div>
    )
}



export default Login