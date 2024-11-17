import React from 'react'
import './ChatListPage.scss'
import ChatListHeader from '../../widgets/ChatListHeader/ChatListHeader'
import ChatListContainer from '../../widgets/ChatListContainer/ChatListContainer'
import EditIcon from '@mui/icons-material/Edit';

export default function ChatListPage() {
  return (
    <body>
      <div className="main-container">
          <ChatListHeader/>
          <ChatListContainer/>

          {/* <div className="new-chat-button-container">
            <button class="new-chat-button">
              <EditIcon className="new-chat-icon"></EditIcon>
            </button>
          </div> */}
      </div>
    </body>
  )
}
