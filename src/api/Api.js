

const BASEURL = "https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT"
export const FetchPost = async () => {
    
    try {
        const response = await fetch(`${BASEURL}/posts`)
        const {data} = await response.json()
        return data.posts

    }catch(error) {
        console.error(error)
    }


}



export const isUserLoggedIn = async () => {
    return true ;
 };



export const  checkUsers = async (username, password) => {
try {
    const response = await fetch('https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT/users/login', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password
          }
        })
      })
} catch(error) {
    console.error(error)
}
}













