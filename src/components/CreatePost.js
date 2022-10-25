import React, { useState } from "react";
import {createPost} from "../api/Api"
import {useHistory} from "react-router-dom"

const CreatePost = ({token, setPosts}) => {
const [title, setTitle] = useState('')
const [desc, setDesc] = useState('')
const [price, setPrice] = useState('')
const [deliver, setDeliver] = useState(false)



const history = useHistory()
if(!token) {
    history.push("/")
}
    
const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await createPost(title, desc, price, deliver, token)
    console.log(response)
    setPosts((previousState) => [...previousState,  response.data.post])
    history.push("/posts")
}

return (
    
    <div className="create-post-container">
    <form  onSubmit={handleSubmit} className="post-form">
    
    <label>Create Title</label>
    <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Create a Title" className="post-title"></input>
    
    <label>Price</label>
    <input value={price} placeholder="Price" onChange={(event) => setPrice(event.target.value)} className="post-title"></input>
    
    <label>Message</label>
    <textarea value={desc} onChange={(event) => setDesc(event.target.value)} placeholder="Create a Message" className="post-message"></textarea>
   
   <span>
   <span>Will Deliver?</span>
   <input value={deliver} onChange={(event) => setDeliver(event.target.checked)}className="checkbox"type="checkbox"></input>
   </span>
  
   
    <button  className="create-post-button" type="submit">Create Post</button>
     </form>
    </div> 
    





    
)
}





export default CreatePost