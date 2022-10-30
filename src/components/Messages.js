import {useHistory} from "react-router-dom";



const Messages = ({userData, token}) => {


const history = useHistory()

if(!token) {
history.push("/")
}

return (

userData.posts? 
userData.posts.map((post) => 
post.messages.map( msg =>
    <div className="message-container">
        <h2>From:</h2>
    <div>{msg.fromUser.username}</div>
    
    <h2>Message:</h2>
    <div>{msg.content}</div>

    </div>
)
):
<div>No posts</div>

)

}





export default Messages 