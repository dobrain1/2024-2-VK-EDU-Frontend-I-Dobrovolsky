import React from 'react'
import './BurgerButton.scss'
import MenuIcon from '@mui/icons-material/Menu';

export default function BurgerButton() {
  return (  
    <button className="burger-button">
        <MenuIcon></MenuIcon>
    </button>  
  )
}

