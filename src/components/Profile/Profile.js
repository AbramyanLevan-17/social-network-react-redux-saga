import React from 'react'
import { Avatar,Typography } from '@material-ui/core';
import './profile.css'
import Post from '../Post/Post';
import {connect} from 'react-redux'

const Profile = () => {
  return (
    <div className='profile-page'>
        <div className='user'>
        <Avatar variant='square'></Avatar>
          <div className='info'>
            <Typography>Name: name</Typography>
            <Typography>Email: email</Typography>
          </div>
        </div>
        <div className='user-posts'>
         
        </div>
    </div>
  )
}

export default Profile
