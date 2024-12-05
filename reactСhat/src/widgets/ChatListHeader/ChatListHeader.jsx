import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {Button} from '../../shared';
import './ChatListHeader.scss'

export const ChatListHeader = () => {
  return (
    <div className='chat-list-header'>
      <Button place={'header'}>
        <MenuIcon></MenuIcon>
      </Button>     
      <div className="app-name-container">
        <h2>Messanger app</h2>
      </div>
      <Button place={'header'}>
        <SearchIcon></SearchIcon>
      </Button>   
    </div>
  )
}
