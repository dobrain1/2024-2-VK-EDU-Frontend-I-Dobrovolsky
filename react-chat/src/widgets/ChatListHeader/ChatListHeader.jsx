import React from 'react'
import BurgerButton from '../../shared/buttons/BurgerButton/BurgerButton'
import SearchButton from '../../shared/buttons/SearchButton/SearchButton'
import './ChatListHeader.scss'

export default function ChatListHeader() {
  return (
    <div className='chat-list-header'>
        <BurgerButton></BurgerButton>
        <div className="app-name-container">
            <h2>Messanger app</h2>
        </div>
        <SearchButton></SearchButton>
    </div>
  )
}
