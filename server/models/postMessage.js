import mongoose from 'mongoose';

const postSchema = mongoose.Schema({

    title:String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount:{ //it is an object of number for adding additional functionality
        type: Number,
        default : 0
    },
    createdAt:{ 
        type: Date,
        default: new Date()

    },

});

const PostMessage = mongoose.model('PostMessage', postSchema) 
//converting the schema into model

export default PostMessage;