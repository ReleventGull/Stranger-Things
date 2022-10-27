import React, {useState} from "react";
import {Link} from "react-router-dom"
import {default as Postitem} from "./Postsitem"


const Posts = ({posts, token, setPosts, PostsResults, setPostsResult }) => {
const [searchInput, setSearchInput] = useState('')




const handlesubmit = (event) => {
   
    event.preventDefault()
    let searchLower = searchInput.toLowerCase()
    setSearchInput('')
    const filteredPost = posts.filter ((post) =>
        
        post.description.toLowerCase().includes(searchLower) || post.author.username.toLowerCase().includes(searchLower) || 
        post.price.toLowerCase().includes(searchInput) || post.title.toLowerCase().includes(searchLower) || post.location.toLowerCase().includes(searchLower)
)
setPostsResult(filteredPost)
}




return (
<div className="posts-body">
<div className="post-search">
    <form onSubmit={handlesubmit}>
    <input value={searchInput} onChange={(event) => setSearchInput(event.target.value)}className="search-post"  placeholder="Search for a Post"></input>
    <button type="submit" className="search-post-button">Search Post</button>
    </form>
    <button onClick={() => setPostsResult(posts)} className="back-button">Back</button>
    {token ?
    <>
    <Link to ="/makepost"className="create-post">Create a post</Link>
    </> 
    : 
    <div className="create-post">Create an account!</div>}
    </div>

        { PostsResults.map((post) =>
         <Postitem 
         key={post._id}
         post={post} 
         token={token} 
         setPosts={setPosts}/>
        
        )}
</div>
)}










export default Posts