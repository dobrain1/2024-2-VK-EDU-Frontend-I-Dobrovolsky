import React from 'react'
import './Message.scss'
import DoneAll from '@mui/icons-material/DoneAll';

export const Message = ({message}) => {

  const time = new Date(message.time).toLocaleTimeString()

  return (
    <div className={message.sender === "you" ? 'message sender show animate' : 'message receiver show animate'}>
      {message.text && message.image ? (
        <>
          <img src={message.image} alt="Image"/>
          <p>{message.text}</p>
        </>
      ) : message.text ? (
        <p>{message.text}</p>
      ) : (
        <img src={message.image} alt="Image"/>
      )}
      <div className="message-info">
          <span className="message-time">{time}</span>
          <DoneAll className="message-check"></DoneAll>
      </div>
    </div>
  )
}