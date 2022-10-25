import React, { useState,  } from "react"
import { Link, useHistory  } from "react-router-dom";
import { checkUsers } from "../api/Api";






const Login = ({setToken, setUserPost}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    
    const history = useHistory()

    
    const handleLogin = async (event) => {
    event.preventDefault()
    try {
        const data = await checkUsers(username, password)
        console.log(data)
        
        
        if (data.success){
            setToken(data.token)
            localStorage.setItem("token", data.data.token)
            history.push("/")
            // const data2 = await fetchUserData(data.token)
            // const posts= data2.data.posts
            // console.log(posts)
            // setUserPost(posts)
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