import react from "react";




const Home = ({userData}) => {
  
    return (
        <div className="home-container">
        
        {

         userData ? <h1>Welcome {userData.username}!</h1>: <h1>Loading</h1>
         
        
        
        
        }

        </div>
        
    )
}





export default Home