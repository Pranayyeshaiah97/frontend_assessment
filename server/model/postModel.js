const mongoose = require('mongoose')

const postSchema =  mongoose.Schema({
    title: {
        type: String,
    },
    desc: {
        type: String,
    },
}, {timestamps: true})


module.exports = mongoose.model('Post', postSchema);