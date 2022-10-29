

const Home = ({userData}) => {
  
    return (
        <div className="home-container">   
       
        {
         userData ? <h1>Welcome {userData.username}!</h1>: <h1>Please Login!</h1>
        }

        </div>
        
    )
}





export default Home