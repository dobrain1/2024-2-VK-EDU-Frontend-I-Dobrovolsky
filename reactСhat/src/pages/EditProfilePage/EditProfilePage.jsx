import React from 'react'
import {EditProfileHeader} from '../../widgets'
import { EditProfileForm } from '../../features'
import CameraAltRoundedIcon from'@mui/icons-material/CameraAltRounded'
import './EditProfilePage.scss'
import { Button } from '../../shared'
import ImageCat from '../../features/mocks/Hao.jpeg'

export const EditProfilePage = () => {
  return (
    <>
        <div className="edit-profile-main-container">
            <EditProfileHeader></EditProfileHeader>
            <div className='edit-profile-form-container'>
                <div className="profile-pic">
                    <img src={ImageCat} alt="Profile Picture" />
                    <Button className="edit-pic-btn">
                        <CameraAltRoundedIcon></CameraAltRoundedIcon>
                    </Button>
                </div>
                <EditProfileForm></EditProfileForm>
            </div>
        </div>
    </>
  )
}
