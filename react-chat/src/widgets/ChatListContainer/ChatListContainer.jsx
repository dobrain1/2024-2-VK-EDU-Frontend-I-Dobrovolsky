import React from 'react'
import './ChatListContainer.scss'
import ChatListItem from '../ChatList/ChatListItem';

export default function ChatListContainer() {

  const chats = [
    { id: 1, name: "John", lastMessage: 'dkdkdkdk', lastMessageTime:"08:08", isRead: true },
    { id: 2, name: "Alice", lastMessage: 'allalalala', lastMessageTime:"18:33", isRead: false },
    { id: 3, name: "Bob", lastMessage: '', lastMessageTime:"02:46", isRead: true },
  ];

  return (
    <div className='chat-list-container'>
      {chats.map((chat) => {
        return(
          <ChatListItem chat={chat}/>
        )
      })
      }
    </div>
  );
}