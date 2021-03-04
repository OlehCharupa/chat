import mongoose from 'mongoose'
const { Schema } = mongoose

const messageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

export const messageModel = mongoose.model("Message", messageSchema)