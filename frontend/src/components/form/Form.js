import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { postMessageOperations } from '../../redux/operations/postMessage.js';
import styles from './Form.module.css'

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
        <div className={styles.section}>
            <form onSubmit={submitHendler} className={styles.form}>
                <input className={styles.input} type="text" name="name" placeholder="Введите имя" value={name} onChange={inputHandler} />
                <textarea className={styles.textarea} type="text" name="message" placeholder="Введите сообщение" value={message} onChange={inputHandler} />
                <button className={styles.button} type="submit">отправить</button>
            </form>
        </div>
    );
};

export default Form;