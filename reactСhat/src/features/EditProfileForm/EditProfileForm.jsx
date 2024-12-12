import React from 'react'
import './EditProfileForm.scss'

export const EditProfileForm = () => {
  return (
    <>
        <form className="edit-form">
            <div className="form-group">
                <label htmlFor ="full-name">Full name</label>
                <textarea 
                    className='full-name' 
                    placeholder="Tony Jackobson"
                    rows="1" 
                />
            </div>
            <div className="form-group">
                <label htmlFor ="username">Username</label>
                <textarea 
                    className='username' 
                    placeholder="@tony"
                    rows="1" 
                />
                <small>Minimum length is 5 characters</small>
            </div>
            <div className="form-group">
                <label htmlFor ="bio">Bio</label>
                <textarea 
                    className='bio' 
                    placeholder="Subtitle 1"
                    rows="12"
                />
                <small>Any details about you</small>
            </div>
        </form>
    </>
  )
}
