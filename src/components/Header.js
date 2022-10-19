import React from "react";
import {BrowserRouter, Route, Link } from "react-router-dom";




const Logout = (action) => {
    
    action(false) 
    
}



const Header = ({setuserLoggedIn}) => {
return (
    <header className="siteheader">
        <h2>Welcome to Stanger Things</h2>
        <nav className="links">
           {/* <Link className="link">Home</Link>
           <Link className="link">Profile</Link> */}
           <Link className="link" to="/posts">Posts</Link>
           <Link to="/register" onClick={() => Logout(setuserLoggedIn)} className="link">Logout</Link>
        </nav>

        </header>
        
)
}



export default Header