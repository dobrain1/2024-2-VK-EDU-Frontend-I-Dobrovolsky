import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import './ChatPage.scss'
import {ChatHeader, MessagesList} from '../../widgets'
import {ChatForm, ClearLocalStorageButton} from '../../features'

export const ChatPage = () => {

  const { chatId } = useParams();

  const chatID = +chatId

  const [messages, setMessages] = useState([])

  const getMessages = () => {
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    return messages;
  }

  const updateMessages = (newMessage) => {
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    localStorage.setItem("messages", JSON.stringify(updatedMessages));
  }

  useEffect(() => {
    
    setMessages(getMessages())
  
  }, [])

  const filteredMessages = messages.filter((message) => message.chatID === chatID);

  return (
    <>
      <div className='chat-page-main-container'>
        <ChatHeader chatID={chatID}></ChatHeader>
        <MessagesList messages={filteredMessages}></MessagesList>
        <ChatForm chatID={chatID} updateMessages={updateMessages}></ChatForm>
        <ClearLocalStorageButton></ClearLocalStorageButton>
      </div>
    </>
  )
}
