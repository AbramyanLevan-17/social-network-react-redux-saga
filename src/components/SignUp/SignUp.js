import React from 'react'
import './signup.css'
import { Input,Button,Typography } from '@material-ui/core';

const SingUp = () => {
  return (
    <div className='signup-form'>
    <Typography variant='h3'>Sign Up</Typography>
    <Input color='primary'  style = {{width:'75%'}}   placeholder='Enter you name' required={true} type='text'></Input>
      <Input color='primary'  style = {{width:'75%'}} placeholder='Enter you email' required={true} type='email'></Input>
      <Input color='primary'  style = {{width:'75%'}} placeholder='Enter you password' required={true} type='password'></Input>  
      <Button variant="contained" color="primary">
         Sign Up
        </Button>
       
  </div>
  )
}

export default SingUp
