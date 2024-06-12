const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const VoteModel = require('./models/votes')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/voting")

app.post("/votes",(req,res)=>{
    VoteModel.create(req.body)
    .then(votes => res.json(votes))
    .catch(err => res.json(err))
})

app.listen(3001,()=>{
    console.log("server is running")
})

