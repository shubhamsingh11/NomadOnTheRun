import mongoose from 'mongoose';

//Mongoose Schema : Giving uniformity to our documents
const postSchema = mongoose.Schema({
    title : String,
    message : String,
    creator : String,
    tags : [String],
    selectedFile : String,
    likeCount : {
        type : Number,
        default : 0
    },
    createdAt : {
        type : Date,
        default : new Date()
    }
});

//Turning Schema to Model
const PostMessage = mongoose.model('PostMessae' , postSchema);

export default PostMessage;