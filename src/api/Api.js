

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








