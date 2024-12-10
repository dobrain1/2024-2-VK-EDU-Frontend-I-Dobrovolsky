import React from 'react'
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './ChatHeader.scss'
import {Button} from '../../shared';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreIcon from '@mui/icons-material/MoreVert'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { chatList } from '../../features/mocks/Chats'

export const ChatHeader = ({chatID}) => {

    let navigate = useNavigate()

    const chats = chatList

    const [chat, setChat] = useState(null)

    useEffect(() => {

        const foundChat = chats.filter((chat) => chat.id === chatID)
        setChat(foundChat || null)

    }, [])

    console.log(chat)
    

    return (
        <div className='chat-header'>
            <Button 
                customClickEvent={() => navigate(`/`)}
                place={'haeader'}
            >
                <ArrowBackIcon></ArrowBackIcon>
            </Button>
            <div className="user-container">
                <AccountCircleIcon sx={{ fontSize: 44 }}></AccountCircleIcon>
                <div className="user-info">
                    <h2 className="chat-name">
                        <span>
                            {chat ?
                                (
                                    chat[0].name.length > 15 
                                    ?
                                    chat[0].name.slice(0, 13) + "..." 
                                    :
                                    chat[0].name
                                )
                                :
                                ' '
                            }
                        </span>
                    </h2>
                    <span className="last-seen">{chat ? 'Был(а) в сети 5 минут назад' : ' '}</span>
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
