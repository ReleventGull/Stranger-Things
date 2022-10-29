import  React  from "react";
import {deleteUserPost} from "../api/Api"
import {useHistory} from "react-router-dom"






const handleDelete = async (postID, token, fetchUser) => {
    try {
         await deleteUserPost(postID, token)
         fetchUser(token)
        }catch(error) {
        console.error(error)
    }
}




const UserPost = ({token, userData, fetchUser}) => {
    


    const history = useHistory()

    if(!token) {
    history.push("/")
}

return (


    
    !userData ? <h1>Loading</h1> :
   
    userData.posts.map(post =>
        post.active? 
        <div className="post-container" key={post._id}>
        <div>{post.author.username}</div>
        <h2>{post.title}: {post.price}</h2>
        <h3>{post.description}</h3>
        <button className="delete-post" onClick={() => handleDelete(post._id, token, fetchUser)}>Delete</button>
        </div>:
        null
            )

)}





export default UserPost