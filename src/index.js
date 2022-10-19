import React, { useEffect, useState, } from "react"
import ReactDOM from "react-dom/client"
import {FetchPost, isUserLoggedIn} from "./api/Api"
import {BrowserRouter, Route, Link, Switch, useHistory } from "react-router-dom";
import { Posts, Header, Register, Login } from "./components";











const App = () => {
    const [posts, setPosts] = useState([])
    const [userLoggedIn, setuserLoggedIn] = useState(false)
    
    useEffect(() => {
        async function LoadPosts() {
        setPosts(await FetchPost())
        }
        LoadPosts();
      }, []); // Or [] if effect doesn't need props or state
      
      
      const history = useHistory();

     
   
    
      useEffect(() => {
        isUserLoggedIn().then(loggedIn => {
            setuserLoggedIn(loggedIn);
        if (!loggedIn) {
          history.push('/login');
       } else {
        history.push('/posts')
       }
       
        });
            }, []);

    
    return (
        <>
        
        <Header setuserLoggedIn={setuserLoggedIn}/>
            
            
            <Switch>
            
            <Route  exact path="/posts">
            <Posts posts={posts}/>
            </Route>
        
            
            <Route  path="/register">
            <Register/>
            </Route>
            
            <Route path="/login">
            <Login/>
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




