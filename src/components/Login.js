import React, { useState,  } from "react"
import { Link, useHistory  } from "react-router-dom";
import { checkUsers } from "../api/Api";






const Login = ({setToken}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState('')
    
    const history = useHistory()

    
    const handleLogin = async (event) => {

    event.preventDefault()
    try {
        const {data} = await checkUsers(username, password)
        setToken(data.token)
        localStorage.setItem("token", data.token)
        
        
        history.push("/")
    }catch(error){
        console.error(error)
    }
 }

    
    
    
    
    return (
        
        <div className="login-container">
        <div>Register An Account!</div>
        
        
        
        <form onSubmit = {handleLogin} className="login-form">
        
        <label>Username</label>
        
        <input 
         value={username}
         onChange={(event) => setUsername(event.target.value)} 
         type="username"
         minLength="6"
         required
        />
        
        <label type="password">Password</label>
        
        <input 
        onChange={(event) => 
        setPassword(event.target.value)} 
        value={password} 
        type="password"
        minLength="6"
        required
        />
        
        
        <button className="login-button" type="submit">Login!</button>
        
    

        </form>
        
        <h3>Don't have an account?<Link to="/register"> Create an Account!</Link> </h3>
        </div>
    )
}



export default Login