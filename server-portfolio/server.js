const express = require('express')
const app = express()
require('dotenv').config()
const db = require('./Database/db')
const routeApi = require('./Route/router')
const cors = require('cors')
const port = process.env.PORT
app.use(cors({
     origin: process.env.ORIGIN_STATE,
     credentials : true,
}))
app.use(express.json()) 
app.use('/api' , routeApi)
app.get('/' ,(req,res)=>{
       res.status(200).json({message : "Welcome to portfolio server"})
})
app.listen(port , ()=>{
    console.log("server is connected...")
}) 