import React from 'react';
import { useSelector } from 'react-redux';
import './MessageList.css'

const MessageList = () => {
    const message = useSelector(state => state.message)
    return (
        <div>
            <ul className="message_list">
                {message.map(elem => <li className="message_item" key={elem._id}>
                    <p>{elem.name}</p>
                    <p>{elem.message}</p>
                </li>)}
            </ul>
        </div>
    );
};

export default MessageList;