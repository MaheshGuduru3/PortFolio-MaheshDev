const querys = require('../Schema/queryschema')


const receiveMessages = async(req,res)=>{
     const { email , query } = req.body
     try{
          const result = await querys.create({ email : email ,  queries : query})
          if(result){
               res.status(200).json({ success : true , info : result , message : "Successfully submitted"})
          } 
     }

     catch(err){
          res.status(500).json({message : err.message , success:false})
     }
     
}


module.exports = receiveMessages   