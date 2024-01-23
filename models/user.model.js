/** This will hold the schema  for the user
 * 
 * It explains the different fields of use and how  it will be  stored in mongodb

*/
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        minLength: 10,
        lowercase: true
    },
    userType: {
        type: String,
        required: true,
        default: "customer",
        enum: ["Customer", "Admin"]
    }
},{timestamps:true});

module.exports=mongoose.model("User",userSchema);