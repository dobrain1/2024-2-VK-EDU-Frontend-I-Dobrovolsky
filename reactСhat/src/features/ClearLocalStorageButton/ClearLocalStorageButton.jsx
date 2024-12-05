import React from 'react'
import './ClearLocalStorageButton.scss'
import CancelIcon from '@mui/icons-material/Cancel'

export const ClearLocalStorageButton = () => {

    return (
        <button onClick={() => localStorage.clear()} className="delete-button">
            <CancelIcon></CancelIcon>
        </button>
    )
}
