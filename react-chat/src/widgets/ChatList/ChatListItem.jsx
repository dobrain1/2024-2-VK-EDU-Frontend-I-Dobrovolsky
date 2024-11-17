import React from 'react'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DoneIcon from '@mui/icons-material/Done';
import ChatIcon from '../../entities/ChatIcon/ChatIcon';
import './ChatListItem.scss'

export default function ChatList({chat}) {
  return (
    <div id={chat.id} className="chat-item-container">
      <div className="left-container">
          {/* <AccountCircleIcon sx={{ fontSize: 40 }}></AccountCircleIcon> */}
          <ChatIcon size={40}></ChatIcon>
          <div className="chat-info">
              <div className="chat-name-wrapper"><span className='chat-name'>{chat.name}</span></div>
              <div className="chat-last-message-wrapper">
                {chat.lastMessage ?
                  <span className="chat-last-message">
                    {chat.lastMessage}
                  </span> :
                  <span className="chat-last-message">
                    нет сообщений
                  </span>
                }
              </div>
          </div>
      </div>
      <div className="chat-status">
          <span className="message-count"></span>
          <div className="status-time">
            {chat.isRead ?
              <DoneAllIcon></DoneAllIcon> :
              <DoneIcon></DoneIcon>
            }
            <span className="message-time">{chat.lastMessageTime}</span>
          </div>
      </div>
    </div>
  )
}
