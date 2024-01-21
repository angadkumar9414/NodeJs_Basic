import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
  title : {
    type : String,
    required : true,
  }  ,
  description : {
    type : String
  },
  photo : {
    type : String,
  },
  owner : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User'
  }
})
export const Post = mongoose.model('Post', postSchema)