import React from 'react'
import './NewChatButton.scss'
import EditIcon from '@mui/icons-material/Edit';

export const NewChatButton = () => {
  return (
    <div className="new-chat-button-container">
        <EditIcon sx={{ fontSize: 12 }} className="new-chat-icon" ></EditIcon>
    </div>
  )
}