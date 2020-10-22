import React from 'react'
import './auth.css'
import { Input,Button,Typography } from '@material-ui/core';
import {Link} from 'react-router-dom'


const Auth = () => {
  return (
    <div className='auth-form'>
      <Typography variant='h3'>Sign In</Typography>
        <Input color='primary'  style = {{width:'75%'}} placeholder='Enter you email' required={true} type='email'></Input>
        <Input color='primary'  style = {{width:'75%'}}placeholder='Enter you password' required={true} type='password'></Input>
        <div className='auth-form-bottom'>
        <Button variant="contained" color="primary">
           Sing In
          </Button>
          <span>Don't have an account yet?<Link to='/signup'> Sign Up!</Link></span>
          </div>
    </div>
  )
}

export default Auth
