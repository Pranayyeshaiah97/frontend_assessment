const express = require('express')
const router = express.Router();
const {createPost} = require('../controllers/postController')


router.post('/createPost',createPost) //Route to create post


module.exports = router