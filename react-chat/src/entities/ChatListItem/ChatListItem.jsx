import React, { useEffect, useState } from 'react'
import {useContext} from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ImageIcon from'@mui/icons-material/Image'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DoneIcon from '@mui/icons-material/Done';
import { PageContext } from '../../app/App';
import './ChatListItem.scss'

export const ChatListItem = ({chat, messages}) => {
  const { dispatch } = useContext(PageContext);

  const [messageCount, setMessageCount] = useState(0)

  const userMessages = () => messages.filter(message => message.chatID === chat.id);

  const lastMessage = userMessages()[userMessages().length - 1]

  useEffect(() => {

    setMessageCount(userMessages().length)
  
  }, [lastMessage])

  return (
    <div id={chat.id} className="chat-item-container" onClick={() => dispatch({ type: "NAVIGATE", path: "ChatPage", params: { chatId: chat.id } })}>
      <div className="left-container">
        <AccountCircleIcon sx={{ fontSize: 40 }}></AccountCircleIcon>
        <div className="chat-info">
          <div className="chat-name-wrapper">
            <span className='chat-name'>
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
        <div className="status-time">
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
