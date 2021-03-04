import { messageModel } from './message.model.js'

export class MessagesService {
    async createMessage(params) {
        return messageModel.create(params)
    }
    async getMessages() {
        return messageModel.find()
    }

}

export const messagesService = new MessagesService()