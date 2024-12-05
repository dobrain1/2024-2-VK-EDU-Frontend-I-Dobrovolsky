import React from 'react'
import { useEffect, useContext } from 'react';
import './ChatHeader.scss'
import {Button} from '../../shared';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreIcon from '@mui/icons-material/MoreVert'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { chatList } from '../../features/mocks/Chats'
import { PageContext } from '../../app/App';

export const ChatHeader = ({chatID}) => {

    const chats = chatList

    const { dispatch } = useContext(PageContext);

    const chat = chats.filter((chat) => chat.id === chatID)

    useEffect(() => {
    
    }, [])
    

    return (
        <div className='chat-header'>
            <Button 
                customClickEvent={() => dispatch({ type: 'NAVIGATE', path: 'ChatListPage', params: {} })}
                place={'haeader'}
            >
                <ArrowBackIcon></ArrowBackIcon>
            </Button>
            <div className="user-container">
                <AccountCircleIcon sx={{ fontSize: 44 }}></AccountCircleIcon>
                <div className="user-info">
                    <h2 className="chat-name">
                        <span>
                            {
                                chat[0].name.length > 15 
                                ?
                                chat[0].name.slice(0, 13) + "..." 
                                :
                                chat[0].name
                            }
                        </span>
                    </h2>
                    <span className="last-seen">Был(а) в сети 5 минут назад</span>
                </div>
            </div>
            <div className="functional-icons">
                <Button place={'header'}>
                    <MenuIcon></MenuIcon>
                </Button>
                <Button place={'header'}>
                    <MoreIcon></MoreIcon>
                </Button>    
            </div>
        </div>
    )
}
