import React, {useState} from "react";



const Postitem = ({post, children}) => {
    



return (
    <>
    <div className="post-container" key={post._id}>
    <h2>User: {post.author.username}</h2>
    <h2>Title: {post.title}: {post.price}</h2>
    <h3>Desc.: {post.description}</h3>
    <h3>Location: {post.location}</h3>
    {children}
    </div>
    
   </>
)}





export default Postitem
