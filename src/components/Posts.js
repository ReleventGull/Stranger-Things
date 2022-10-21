import React, {useState} from "react";
import {Link} from "react-router-dom"



const Posts = ({posts}) => {
const [searchBy, setSearchBy] = useState('')


return (
<div className="posts-body">

<div className="post-search">
    <form>
<input className="search-post"  placeholder="Search for a Post"></input>
</form>
<Link to ="/makepost"className="create-post">Create a post</Link>
</div>





{
    posts.map((post) =>  
    
        <div className="post-container" key={post._id}>
            <div></div>
        <h2>{post.title}: {post.price}</h2>
        <h3>{post.description}</h3>
        </div>
    )
}




</div>
)}










export default Posts