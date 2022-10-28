import React from "react";
import {default as Postitem} from "./Postsitem"
import { useParams } from "react-router-dom";

const PreviewPost = ({posts}) => {
    const  {postID} = useParams()
    console.log(postID)
    console.log(posts)
    const singlePost = posts.find(post => post._id == postID )

    console.log("Single Post Here",singlePost)
    
return (
    


    
        singlePost ? <Postitem 
        key={singlePost._id}
        post={singlePost} 
         >
        {singlePost.isAuthor? <button className="delete-post" onClick={() => handleDelete(singlePost._id, token)}>Delete</button>: null}   
        </Postitem> :
        <div>Loading</div>


    
    
    
    
)

}




export default  PreviewPost 



 