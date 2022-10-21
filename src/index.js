import React, { useEffect, useState, } from "react"
import ReactDOM from "react-dom/client"
import {FetchPost, isUserLoggedIn} from "./api/Api"
import {BrowserRouter, Route, Link, Switch, useHistory } from "react-router-dom";
import { Posts, Register, Login, CreatePost } from "./components";











const App = () => {
    const [posts, setPosts] = useState([])
    const [token, setToken] = useState(window.localStorage.getItem("token" || ""))
    
    useEffect(() => {
        async function LoadPosts() {
        setPosts(await FetchPost())
        }
        LoadPosts();
      }, []); // Or [] if effect doesn't need props or state
      
      
      const history = useHistory();

     
      console.log("Mother fucking", token)
    
      useEffect(() => {
        if (localStorage.getItem("token")){
            setToken(localStorage.getItem("token"))
        }else {
        history.push("/login")
        }
            }, []);

    
    return (
        <>
        
        <header className="siteheader">
        <img className="logo"src="https://wallpaperaccess.com/full/1920259.jpg"/>
        <nav className="links">
           
           
            <Link to="/" className="link">Home</Link>
            <Link className="link">Profile</Link>
            <Link className="link" to="/posts">Posts</Link>
           {
            token ? <a href="#" onClick={() => 
                {
                    setToken('')
                    localStorage.removeItem("token")
                    history.push("/login")
                }}className="link">Logout</a>: 
            <>
            <Link className="link" to="/login">Login</Link> 
            <Link className="link" to="/register">Register</Link>
            </>
           }
            
            
        
        
        
        
        </nav>

        </header>
            
            
            <Switch>
            <Route exact path = "/">
            
            </Route>
            <Route  exact path="/posts">
            <Posts posts={posts}/>
            </Route>
        
            
            
            
            
            
            
            <Route  path="/register">
            <Register setToken={setToken}/>
            
            </Route>
            
            <Route path="/login">
            <Login setToken={setToken}/>
            </Route>
            
            
            
            </Switch>
            
            <Route path="/makepost">
            <CreatePost token={token}/>
            </Route>
            
            
            
        </> 
        
    )
}
   








const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
)




