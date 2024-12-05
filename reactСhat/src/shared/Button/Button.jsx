import React from 'react'
import './Button.scss'

export const Button = ({customClickEvent, children, place, type}) => {

  return (
    <button
      type={type} 
      className={place === 'header' 
        ? 
        'header-button' 
        : 
        place === 'form'
        ?
        'form-button'
        :
        'header-button' 
        } 
      onClick={customClickEvent}
    >
      {children}
    </button>
  )
}
