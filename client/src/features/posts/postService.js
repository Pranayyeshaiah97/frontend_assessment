import axios from 'axios'

//Registe User
const getPosts = async () => {

    const res = await axios.get('https://gorest.co.in/public/v2/posts')
    console.log("resresresr", res.data)
    return res.data
}

const createPost = async (formData, token) => {
 
    const res = await axios.post('http://localhost:5000/api/posts/createPost', formData)
    return res.data
}




const postService = {
    getPosts,
    createPost
}

export default postService