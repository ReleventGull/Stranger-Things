import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import {FetchPost} from "./api/Api"
import {BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Posts, Header, Register, Login } from "./components";










const App = () => {
    const [posts, setPosts] = useState([])
    const [userLoggedIn, setuserLoggedIn] = useState(true)
    
    useEffect(async () => setPosts(await FetchPost()), [])
    console.log("Posts here", posts)
    return (
        <>
        {
            userLoggedIn ? 
            <>
            <Header />
            <Route  path="/posts">
            <Posts posts={posts}/>
            </Route>
            </>
            :
            <>
            <Switch>
            <Route exact path="/">
            <Register/>
            </Route>
            <Route path="/login">
            <Login/>
            </Route>
            </Switch>
            
            
            
            </>
        }
        
        
        
        </>   
    )
}
   








const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
)




