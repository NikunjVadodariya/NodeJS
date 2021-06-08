const mongoose = require("mongoose")
const validater = require('validator')

const User = mongoose.model("User", {
    name: {
        type: String,
        required: true
    },
    age : {
        type: Number,
        validate(value){
            // if (value < 0){
            //     throw new error("Age positive must")
            // }
        }
    },
    email : {
        type: String,
        validate(value){
            if (!validater.isEmail(value)){
                throw new error("Invalid Email")
            }
        }
    },
    password : {
        type: String,
        // minimumLength: 10,
        required: true,
        validate(value){
            if (value.toLowerCase().includes("password")){
                throw new error("Invalid Password")
            }
        }
    }
})


module.exports = User