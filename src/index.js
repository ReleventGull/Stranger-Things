import React, { useEffect, useState, } from "react"
import ReactDOM from "react-dom/client"
import {FetchPost, fetchUserData} from "./api/Api"
import {BrowserRouter, Route, Link, Switch, useHistory } from "react-router-dom";
import { Posts, Register, Login, CreatePost, Profile, UserPost } from "./components";












const App = () => {
    const [posts, setPosts] = useState([])
    const [token, setToken] = useState(window.localStorage.getItem("token" || ""))
    const [userData, setUserData] = useState([])
    const [postID, setpostID] = useState('')
    
    console.log("POST ID TO RENDER",postID)



console.log("All post", posts)
console.log("User Data",userData)
 
   useEffect(() => {
    async function LoadData() {
        setUserData(await fetchUserData(token))
    }
    LoadData()
   }, [])

    
    useEffect(() => {
        async function LoadPosts() {
        setPosts(await FetchPost(token))
        }
        LoadPosts();
      }, []); // Or [] if effect doesn't need props or state
      
      
      const history = useHistory();

     
      
    
      useEffect(() => {
        if (localStorage.getItem("token")){
        setToken(localStorage.getItem("token"))
        }
        else {
        history.push("/login")
        }
            }, [token]);

    





    return (
        <>
        
        <header className="siteheader">
        <img className="logo"src="https://wallpaperaccess.com/full/1920259.jpg"/>
        <nav className="links">
           
            
            <Link to="/" className="link-one">Home</Link>

            <Link className="link-two" to="/profile">Profile</Link>
           
            
            <Link className="link-three" to="/posts">Posts</Link>
           
           {
            token ? <a href="#" onClick={() => 
                {
                    localStorage.removeItem("token")
                    setToken(null)
                    history.push("/login")
                }}className="link-six">Logout</a>: 
           
           <>
            <Link className="link-four" to="/login">Login</Link> 
            <Link className="link-five" to="/register">Register</Link>
            </>
           }
            
            
        
        
        
        
        </nav>

        </header>
            
            
            <Switch>
           
            <Route exact path = "/">
            <div>Welcome!</div>
            </Route>
            
            <Route  exact path="/posts">
            <Posts token={token} setPosts={setPosts} posts={posts} />
            </Route>
        
            
            
            
            
            
            
            <Route  path="/register">
            <Register setToken={setToken}/>
            </Route>
            
            <Route path="/login">
            <Login  setToken={setToken}/>
            </Route>
            
            
            
            
            
            <Route path="/makepost">
            <CreatePost setPosts={setPosts} token={token}/>
            </Route>



            <Route path="/profile">
            <Profile token={token} />
            </Route>


            <Route path="/mypost">
            <UserPost userData={userData}  />
            </Route>

          
            
            </Switch>
            
            
        </> 
        
    )
}
   








const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
)




