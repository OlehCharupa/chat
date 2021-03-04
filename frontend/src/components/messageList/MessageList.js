import React from 'react';
import { useSelector } from 'react-redux';

const MessageList = () => {
    const message = useSelector(state => state.message)
    return (
        <div>
            <ul>
                {message.map(elem => <li key={elem._id}>
                    <p>{elem.name}</p>
                    <p>{elem.message}</p>
                </li>)}
            </ul>
        </div>
    );
};

export default MessageList;