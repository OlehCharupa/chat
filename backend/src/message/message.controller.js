import express from 'express'
import { asyncWrapper } from '../helpers/async-wrapper.js'
import { messagesService } from './message.service.js'

const controller = express.Router()

controller.post(
    '/',
    asyncWrapper(async (req, res) => {
        const newMessage = await messagesService.createMessage(req.body);
        console.log(newMessage);
        res.status(201).send(newMessage)
    })
)
controller.get('/',
    asyncWrapper(async (req, res) => {
        const messages = await messagesService.getMessages()
        res.send(messages)
    }))

export const messageController = controller