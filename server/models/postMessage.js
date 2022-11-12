import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    },
    creator: {
        type: String,
        require: true
    },
    tags: [String],
    selectedFile: {
        type: String
    },
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }

})

const PostMessage = mongoose.model( 'PostMessage', postSchema)
export default PostMessage