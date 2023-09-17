const mongoose = require('mongoose')


const QuerySchema = new mongoose.Schema(({
     email : {
        type:String , 
        required : true
     },
     queries : {
        type  : String,
        required : true
     }
}))


module.exports = mongoose.model('querys' , QuerySchema)