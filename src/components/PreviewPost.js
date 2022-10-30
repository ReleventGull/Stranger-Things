import React, {useState} from "react";
import {default as Postitem} from "./Postsitem"
import { useParams } from "react-router-dom";
import {createMessage} from "../api/Api"

const PreviewPost = ({posts, token}) => {
    const [message, setMessage] = useState('')
    const  {postID} = useParams()
   
   
    
    
    const sendMessage = async(event, postID, token) => {
        event.preventDefault()
        setMessage('')
        const response = await createMessage(message, token, postID)
        
    }
   
   
const singlePost = posts.find(post => post._id == postID )
  
return (

        singlePost ? 
        <>
        <Postitem key={singlePost._id} post={singlePost} >
        {singlePost.isAuthor ? null : 
        <form onSubmit={(event) => sendMessage(event, singlePost._id, token)}>
        <input  className="message"value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Send Message"></input>
        <button className="message-send" type="submit">Send Message</button>
        </form>
        }
        </Postitem> 
        {
            singlePost.messages.map( msg =>
                <div className="message-container">
                    <h2>From:</h2>
                <div>{msg.fromUser.username}</div>
                
                <h2>Message:</h2>
                <div>{msg.content}</div>
            
                </div>
            )
        }
        
       
        </>
        
        
        :
        <div>Loading</div>

        

    
    
    
    
)

}




export default  PreviewPost 



 