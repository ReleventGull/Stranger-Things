import React  from "react";
import {Link} from "react-router-dom"
import {default as Postitem} from "./Postsitem"


const Posts = ({posts, token, setPosts }) => {



return (
<div className="posts-body">
<div className="post-search">
    
    <form>
    <input className="search-post"  placeholder="Search for a Post"></input>
    </form>
    {token ? <Link to ="/makepost"className="create-post">Create a post</Link>: <div className="create-post">Create an account!</div>}
    </div>

        { posts.map((post) =>
         <Postitem 
         key={post._id}
         post={post} 
         token={token} 
         setPosts={setPosts}/>
        
        )}
</div>
)}










export default Posts