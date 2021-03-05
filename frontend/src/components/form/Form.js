import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { postMessageOperations, getMessageOperations } from '../../redux/operations/postMessage.js';
import './Form.css'

const initialData = {
    name: "",
    message: ""
}

const Form = () => {
    const [data, setData] = useState(initialData)
    const { name, message } = data
    const dispatch = useDispatch()


    const inputHandler = ({ target }) => {
        setData({ ...data, [target.name]: target.value })
    }
    const submitHendler = (e) => {
        e.preventDefault();
        if (!name || !message) {
            return
        }
        const singleMessage = {
            name,
            message
        }
        dispatch(postMessageOperations(singleMessage))
        setData(initialData)
    }
    return (
        <div>
            <form onSubmit={submitHendler} className="form">
                <input type="text" name="name" placeholder="введите имя" value={name} onChange={inputHandler} />
                <textarea type="text" name="message" placeholder="введите сообщение" value={message} onChange={inputHandler} />
                <button type="submit">отправить</button>
            </form>
        </div>
    );
};

export default Form;