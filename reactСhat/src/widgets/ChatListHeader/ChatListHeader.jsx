import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from 'react-router-dom';
import {Button} from '../../shared';
import './ChatListHeader.scss'

export const ChatListHeader = () => {

  let navigate = useNavigate()

  return (
    <div className='chat-list-header'>
      <Button 
        place={'header'}
        customClickEvent={() => navigate('/profile/edit')}
        // customClickEvent={() => navigate('/profile/edit/:profileId')}
      >
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
