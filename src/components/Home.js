import react from "react";




const Home = ({userData, token}) => {
  
    return (
        <div className="home-container">
        
        {
        token ?  <h1>Welcome {userData.username}!</h1>: <h1>Please Login!</h1>
        }
        </div>
        
    )
}





export default Home