const mongoose = require('mongoose')

const emissionData = new mongoose.Schema({
    Carbon:{
        type:String,
        required:true
    },
    createdDate:{
        type: Date,
        default:Date.now,
    },
    Electricity:{
        type:String,
        required:true
    },
    Fashion:{
        type:String,
        required:true
    },
    Organic:{
        type:String,
        required:true
    },
    // uid:{
    //     type:String,
    //     required:true
    // }
})


const eData = mongoose.model('emissionData',emissionData)

module.exports = eData