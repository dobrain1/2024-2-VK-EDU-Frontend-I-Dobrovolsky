import React from 'react'
import './ChatListPage.scss'
import {ChatListHeader, ChatListContainer} from '../../widgets'
import {AddMessages, NewChatButton} from '../../features'

export const ChatListPage = () => {
  
  return (
    <>
      <div className="main-container">
        <ChatListHeader/>
        <ChatListContainer/>
        <NewChatButton></NewChatButton>
        <AddMessages></AddMessages>
      </div>
    </>
  )
}
