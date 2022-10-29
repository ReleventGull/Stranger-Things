

const BASEURL = "https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT"

export const FetchPost = async (token) => {
    try {
        const response = await fetch(`${BASEURL}/posts`, {
          headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
          }
        })
        const {data} = await response.json()
        return data.posts

    }catch(error) {
        console.error(error)
    }
}




export const isUserLoggedIn = async (token) => {
    if (token) {
      console.log("token is true",token)
      return true
    } else {
      return false
    }
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
      return await response.json()
} catch(error) {
    console.error(error)
}
}



export const registerUser = async (username, password) => {
  try {
    const response = await fetch('https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT/users/register', {
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
      return  response.json()
} catch(error) {
    console.error(error)
}
}






export const createPost = async(title, description, price, willDeliver, token) => {
  try {
    const response = await fetch('https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT/posts', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price,
          willDeliver: willDeliver
          }
        })
      })
      return  response.json()
} catch(error) {
    console.error(error)
}}





















export const deleteUserPost = async(postID, token) => {
  try {
    console.log("From API", postID, token)
  const response = await fetch(`${BASEURL}/posts/${postID}`, {
  method: "DELETE",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
})
return(response.json())
}catch(error) {
  console.error(error)
}
}







export const createMessage = async(message, token, postID) => {
  try {
  const response = await fetch(`${BASEURL}/posts/${postID}/messages`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    message: {
      content: `${message}`
    }
  })
})

return response.json()
}catch(error) {
  console.error(error)
}}




export const fetchUserData = async(token) => {
  try {
    const response = await fetch(`${BASEURL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
    return response.json()
  }catch(error) {
    console.error(error)
  }
}


