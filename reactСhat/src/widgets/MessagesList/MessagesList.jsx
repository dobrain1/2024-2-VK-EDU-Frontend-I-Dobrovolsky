import React, { useEffect, useRef } from 'react'
import {Message} from '../../entities'
import './MessagesList.scss'

export const MessagesList = ({messages}) => {

  const messageListRef = useRef(null)

  const scrollToBottom = () => {
    if(messageListRef.current){
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div ref={messageListRef} className='chat-container'>
        <div className='messages-container'>
          {
            messages.map(message => 
              <Message key={message.id} message={message}></Message>
            )
          }
        </div>
    </div>
  )
}
