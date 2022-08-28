const path = require('path')
const express = require('express')
var cors = require('cors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3001
const mongoose = require('mongoose');


const app = express()
app.use('/public', express.static('public'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Connecting to local Database
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("mongoDB Connected")).catch(err=>console.log(err))

// post API
app.use('/api/posts', require('./routes/postRoutes'))


app.listen(port, () => console.log(`Server started on server ${port}`))