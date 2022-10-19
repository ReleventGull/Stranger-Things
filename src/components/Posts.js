import React from "react";



const Posts = ({posts}) => {
console.log("Posts from Posts", posts)

return (
<div className="posts-body">



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