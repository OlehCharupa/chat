import './App.css';
import Form from './form/Form';
import MessageList from './messageList/MessageList';
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { getMessageOperations } from '../redux/operations/postMessage.js';
import Header from './header/Header';



function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMessageOperations())
  }, [dispatch])


  return (
    <div className="App">
      <Header />
      <Form />
      <MessageList />
    </div>
  );
}

export default App;
