import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true    
    },
    FullName : {
        type : String,
        required : true
    },
    Contact : {
        type : Number,
        required : true
    },
    posts :[ {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Post'
    }]
})
export const User  = mongoose.model('User', userSchema)