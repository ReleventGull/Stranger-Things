import React, {useState} from "react";
import {deleteUserPost, createMessage} from "../api/Api"

const Postitem = ({post, token, setPosts }) => {
    const[message, setMessage] = useState('')
    const handleDelete = async (postID, token) => {
    try {
         await deleteUserPost(postID, token)
         const newPost = post.filter(post => post._id !== postID)
         setPosts(newPost)
        }catch(error) {
        console.error(error)
    }
}

const sendMessage = async(event, postID) => {
    event.preventDefault()
    setMessage('')
    const response = await createMessage(message, token, postID)
    console.log( response)
}


return (
    <>
    <div className="post-container" key={post._id}>
    <h2>User: {post.author.username}</h2>
    <h2>{post.title}: {post.price}</h2>
    <h3>{post.description}</h3>
    <h3>{post.location}</h3>
    {post.isAuthor? <button className="delete-post" onClick={() => handleDelete(post._id, token)}>Delete</button>: null}
    
    {post.isAuthor ? null : 
    <form onSubmit={(event) => sendMessage(event, post._id)}>
    <input  className="message"value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Send Message"></input>
    <button className="message-send" type="submit">Send Message</button>
    </form>}
    
    </div>
   </>
)}





export default Postitem
