import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';
import {useNavigate} from 'react-router-dom';
import {Button} from '../../shared';
import './EditProfileHeader.scss'

export const EditProfileHeader = () => {

  let navigate = useNavigate()

  return (
    <div className='edit-profile-header'>
      <Button 
        place={'header'}
        customClickEvent={() => navigate('/')}
      >
        <ArrowBackIcon></ArrowBackIcon>
      </Button>     
      <div className="label-container">
        <h2>Edit profile</h2>
      </div>
      <Button place={'header'}>
        <CheckIcon></CheckIcon>
      </Button>   
    </div>
  )
}
