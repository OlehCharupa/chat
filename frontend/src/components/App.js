import './App.css';
import Form from './form/Form';
import MessageList from './messageList/MessageList';
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { getMessageOperations } from '../redux/operations/postMessage.js';



function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMessageOperations())
  }, [dispatch])


  return (
    <div className="App">
      <h1>Chat</h1>
      <Form />
      <MessageList />
    </div>
  );
}

export default App;
