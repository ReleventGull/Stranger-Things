import React, {useState} from "react";

import { Link } from "react-router-dom";

const Postitem = ({post, children}) => {
    



return (
    <>
    <div className="post-container" key={post._id}>
    <h2>User: {post.author.username}</h2>
    <h2>{post.title}: {post.price}</h2>
    <h3>{post.description}</h3>
    <h3>{post.location}</h3>
    {children}
    
    
    </div>
   </>
)}





export default Postitem
