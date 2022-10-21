import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { registerUser } from "../api/Api";



const Register = ({setToken}) => {
const [username, setUsername] = useState('')
const [password, setPasssword] = useState('')
const [password2, setPassword2] = useState('')

const history = useHistory()
const handleSubmit = async (event) => {
    event.preventDefault()
    if (password !== password2){
    
    }else {
        try {
            const {data} = await registerUser(username, password)
            setToken(data.token)
            history.push("/")
        }
        catch(error) {
            console.log("This shit didn't work")
        }
    }
   
}
    
    


return (
        <div className="register-container">
        <div>Register An Account!</div>
        
        <form  onSubmit={handleSubmit} className="register-form">
        
        <label>Username</label>
        
        <input 
        value={username} 
        type="username"
        onChange={(event) => setUsername(event.target.value)}
        required
        minLength="6"

        />
        
        
        
        <label>Password</label>
        
        <input 
        value={password} 
        type="password"
        onChange={(event) => setPasssword(event.target.value)} 
        required
        minLength="6"

        />
        
        <label>Confirm Password</label>
        
        <input 
        type="password"
        value={password2}  
        onChange={(event) => setPassword2(event.target.value)}
        required
        minLength="6"
        />
         <button className="login-button" type="submit">Sign Up!</button>

        </form>


        <h3>Already have an account? <Link to="/login">Log in!</Link> </h3>
        </div>
    )
}









export default Register
