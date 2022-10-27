import  React  from "react";
import {deleteUserPost} from "../api/Api"






const handleDelete = async (postID, token) => {
    try {
         await deleteUserPost(postID, token)
         const newPost = post.filter(post => post._id !== postID)
         setPosts(newPost)
        }catch(error) {
        console.error(error)
    }
}




const UserPost = ({token, userData}) => {
     console.log("User Data", userData.posts)
return (

    userData.posts.map(post =>
    post.active? 
    <div className="post-container" key={post._id}>
    <div>{post.author.username}</div>
    <h2>{post.title}: {post.price}</h2>
    <h3>{post.description}</h3>
    <button className="delete-post" onClick={() => handleDelete(post._id, token)}>Delete</button>
    </div>:
    null
        )
)}





export default UserPost