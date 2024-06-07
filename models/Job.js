const mongoose = require('mongoose')

const JobsSchema = new mongoose.Schema({
    company:{
        type:String,
        required:[true,"Please provide a company name"],
        maxLength:50
    },
    position:{
        type:String,
        required:[true,"Please provide a position"],
        maxLength:100
    },
    status:{
        type:String,
        enum:["interview","declined","pending"],
        default:"pending"
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:[true,"please provide user"]
    }

},{timestamps:true})

module.exports = mongoose.model("Job",JobsSchema)