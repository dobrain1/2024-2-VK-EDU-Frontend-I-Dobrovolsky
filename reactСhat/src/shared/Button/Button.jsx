import React from 'react'
import './Button.scss'

export const Button = ({customClickEvent, children, place, type, className}) => {

  return (
    <button
      type={type} 
      className={
        (place === 'header'
        ? 
        `header-button ${className}` 
        : 
        place === 'form'
        ?
        `form-button ${className}`
        :
        `header-button ${className}`)
        } 
      onClick={customClickEvent}
    >
      {children}
    </button>
  )
}
