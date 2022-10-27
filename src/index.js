import React, { useEffect, useState, } from "react"
import ReactDOM from "react-dom/client"
import {FetchPost, fetchUserData} from "./api/Api"
import {BrowserRouter, Route, Link, Switch, useHistory } from "react-router-dom";
import { Posts, Register, Login, CreatePost, Profile, UserPost, Home, Messages} from "./components";



    const App = () => {
    const [posts, setPosts] = useState([])
    const [PostsResults, setPostsResult] = useState([])
    const [token, setToken] = useState(window.localStorage.getItem("token" || ""))
    const [userData, setUserData] = useState({messages:[], posts:[], username:""})
    console.log(posts)


    
    useEffect(() => {
        async function LoadPosts() {
        setPosts(await FetchPost(token))
        setPostsResult(await FetchPost(token))
        }
        LoadPosts();
      }, []); // Or [] if effect doesn't need props or state
      
      
      const history = useHistory();

    
      useEffect(() => {
        async function LoadUserData() {
            if (localStorage.getItem("token")){
                setToken(localStorage.getItem("token"))
                const response = await fetchUserData(token)
                setUserData(response.data)
                history.push("/")
                }
                else {
                history.push("/login")
                }
        }
        LoadUserData()
            }, [token]);


    return (
        <>
        
        <header className="siteheader">
        
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
            <Home token={token} userData={userData}/>
            </Route>
            
            <Route  exact path="/posts">
            <Posts token={token} PostsResults={PostsResults} setPostsResult={setPostsResult} setPosts={setPosts} posts={posts} />
            </Route>
         
            
            <Route  path="/register">
            <Register setToken={setToken}/>
            </Route>
            
            <Route path="/login">
            <Login  setUserData={setUserData} setToken={setToken}/>
            </Route>
            
        
            <Route path="/makepost">
            <CreatePost setPosts={setPosts} token={token}/>
            </Route>

           <Route path="/profile/messages">
           <Messages userData={userData}/>
           </Route>


            <Route path="/profile">
            <Profile token={token} />
            </Route>


           
            <Route path="/mypost">
            <UserPost token={token} userData={userData}  />
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




