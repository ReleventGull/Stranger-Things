import React, { useState,  } from "react"
import { Link, useHistory  } from "react-router-dom";
import { checkUsers, fetchUserData } from "../api/Api";






const Login = ({setToken, setUserData}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    
    const history = useHistory()

    
    const handleLogin = async (event) => {
    event.preventDefault()
    try {
        const data = await checkUsers(username, password)
        console.log("Data", data)
        
        
        if (data.success){
            
            localStorage.setItem("token", data.data.token)
            console.log("Token here", data.data.token)
            setToken(data.data.token)
        
            history.push("/")
           
        } else {
            setUsername('')
            setPassword('')
            
            setErrorMessage(data.error.message)
        }
       
        
        
                
            
         
    
    }catch(error){
        console.error(error)
    }
 }

    
    
    
    
    return (
        
        <div className="login-container">
        <div>Login!</div>
        
        
        
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
        <div>{errorMessage}</div>
        <h3>Don't have an account?<Link to="/register"> Create an Account!</Link> </h3>
        </div>
    )
}



export default Login