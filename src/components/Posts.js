import React from "react";



const Posts = ({posts}) => {
console.log("Posts from Posts", posts)

return (
<div className="posts-body">



{
    posts.map((post, index) =>  
        <div className="post-container" key={post.id}>
        <h2>{post.title}: {post.price}</h2>
        <h3>{post.description}</h3>
        </div>
    )
}




</div>




)}










export default Posts