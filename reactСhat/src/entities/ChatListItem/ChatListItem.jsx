import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ImageIcon from'@mui/icons-material/Image'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DoneIcon from '@mui/icons-material/Done';
import './ChatListItem.scss'

export const ChatListItem = ({chat, messages}) => {
  
  let navigate = useNavigate()

  const [messageCount, setMessageCount] = useState(0)

  const userMessages = () => messages.filter(message => message.chatID === chat.id);

  const lastMessage = userMessages()[userMessages().length - 1]

  useEffect(() => {

    setMessageCount(userMessages().length)
  
  }, [lastMessage])

  return (
    <div id={chat.id} className="chat-item-container" onClick={() => navigate(`/chat/${chat.id}`)}>
      <div className="left-container">
        <AccountCircleIcon sx={{ fontSize: 40 }}></AccountCircleIcon>
        <div className="chat-info">
          <div className="chat-name-wrapper">
            <span className='chat-item-name'>
                {
                  chat.name.length > 15 
                  ?
                  chat.name.slice(0, 13) + "..." 
                  :
                  chat.name
                }
            </span>
          </div>
          <div className="chat-last-message-wrapper">
            {lastMessage ? 
              (
                lastMessage.text && lastMessage.image ? 
                  <span className="chat-last-message">
                    <ImageIcon /> 
                    {
                      lastMessage.text.length > 15 
                      ?
                      lastMessage.text.slice(0, 13) + "..." 
                      :
                      lastMessage.text
                    }
                  </span> 
                : lastMessage.text ? 
                  <span className="chat-last-message">
                    {
                      lastMessage.text.length > 15 
                      ?
                      lastMessage.text.slice(0, 13) + "..." 
                      :
                      lastMessage.text
                    }
                  </span> 
                : lastMessage.image ? 
                  <span className="chat-last-message">
                    <ImageIcon />
                  </span> 
                : <span className="chat-last-message">
                    нет сообщений
                  </span>
              ) 
              : <span className="chat-last-message">
                  нет сообщений
                </span>
            }
          </div>
        </div>
      </div>
      <div className="right-container">
        <span className="message-count">
          {messageCount}
        </span>
        <div className="status-item">
          {
            chat.isRead 
            ?
            <DoneAllIcon></DoneAllIcon> 
            :
            <DoneIcon></DoneIcon>
          }
          <span className="message-time">{chat.lastMessageTime}</span>
        </div>
      </div>
    </div>
  )
}
