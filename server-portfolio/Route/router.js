const  express = require('express')
const route = express.Router()
const receiveMessages = require('../Controller/querycontroller')

route.post('/accept' , receiveMessages)

module.exports = route