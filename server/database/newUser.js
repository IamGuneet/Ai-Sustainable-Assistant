const mongoose = require('mongoose')

const newUser = new mongoose.Schema({
    Username:{
        type:String,
        required:true
    },
    createdDate:{
        type: Date,
        default:Date.now,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const userSign = mongoose.model('newUser',newUser)

module.exports = userSign