const mongoose = require('mongoose')
const url = process.env.MONGODB_URL

const dbconnect = async ()=>{
    try{
        await mongoose.connect(url)
        .then(()=>{
            console.log("db connected")
        })
    }
    catch(err){
        console.log(err)
    }
}

dbconnect()

module.exports = mongoose