import React, {useState} from "react";
import {Link} from "react-router-dom"
import {deleteUserPost} from "../api/Api"



const Posts = ({posts, token, setPosts}) => {


const handleDelete = async (postID, token) => {
    try {
        console.log("Token", token)
        console.log( "Post ID" , postID)
        const response = await deleteUserPost(postID, token)
        const newPost = posts.filter(post => post._id !== postID)
        setPosts(newPost)
    }catch(error) {
        console.error(error)
    }
}
return (
<div className="posts-body">

<div className="post-search">
    
    <form>
    <input className="search-post"  placeholder="Search for a Post"></input>
    </form>
    {token ? <Link to ="/makepost"className="create-post">Create a post</Link>: <div className="create-post">Create an account!</div>}
    </div>





        { posts.map((post) =>  
        <div className="post-container" key={post._id}>
        <div>{post.author.username}</div>
        <h2>{post.title}: {post.price}</h2>
        <h3>{post.description}</h3>
        <button >View</button>
        {post.isAuthor? <button onClick={() => handleDelete(post._id, token)}>Delete</button>: null}
        </div>
        )}

</div>



)}










export default Posts