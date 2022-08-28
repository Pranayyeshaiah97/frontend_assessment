const asyncHandler = require('express-async-handler')
const Post  = require('../model/postModel')



//Add Post
const createPost = asyncHandler(async (req,res) => {
    const {title, desc} = req.body;
    if(!title || !desc ){
        res.status(400).json({message: "Please add all fields"})
    }

    //create post
    const post = await Post.create({
        title,
        desc,
    })

    if(post){
        res.status(200).json({
            id: post._id,
            title: post.title,
            body: post.desc
        })
    }else{
        res.status(400).json({message: "Something went wrong, please try again later."})
    }

})



module.exports = {
    createPost
}