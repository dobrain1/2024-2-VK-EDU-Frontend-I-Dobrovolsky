import React, {useState, useEffect} from 'react'
import './ChatListContainer.scss'
import {ChatListItem} from '../../entities';
import { chatList } from '../../features/mocks/Chats'

export const ChatListContainer = () => {

  const chats = chatList

  const [messages, setMessages] = useState([])

  const getMessages = () => {
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    return messages;
  }

  useEffect(() => {
    
    setMessages(getMessages())
  
  }, [])

  return (
    <div className='chat-list-container'>
      {chats.map((chat) => {
        return(
          <ChatListItem chat={chat} messages={messages}/>
        )
      })
      }
    </div>
  );
}