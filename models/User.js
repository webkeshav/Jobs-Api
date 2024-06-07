const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,"Please provide a name"],
        minLength:3,
        maxLength:50
    },
    email:{
        type:String,
        require:[true,"Please provide a email"],
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Please provide a valid email"],
        unique:true
    },
    password:{
        type:String,
        require:[true,"Please provide a Password"],
        minLength:6,
       
    },
})



module.exports = mongoose.model("User",UserSchema)