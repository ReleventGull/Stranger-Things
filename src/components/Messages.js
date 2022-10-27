import react from "react";




const Messages = ({userData}) => {
console.log(userData.posts)
return (
userData.posts.map((post) => 
post.messages.map( msg =>
    
    <div className="message-container">
        <h2>From:</h2>
    <div>{msg.fromUser.username}</div>
    
    <h2>Message:</h2>
    <div>{msg.content}</div>

    </div>
)

))
}





export default Messages 