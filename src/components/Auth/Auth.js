import React from 'react'
import './auth.css'
import { Input,Button,Typography } from '@material-ui/core';
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {signIn} from '../../redux/actions'

class Auth extends React.Component{
  constructor(props){
    super(props)
    this.state={
      email:'',
      password:'',
    }
   
  }
  handlerChange = (event) => {
    this.setState(()=>({
      [event.target.name]:event.target.value
    }))
  }
  handlerSubmit = event => {
    event.preventDefault();

    const loginData = {
      email: this.state.email,
      password: this.state.password,
    }
    this.props.signIn(loginData)
    this.setState({
      email:'',
      password:''
    })
  }
  render(){
    if(this.props.auth.isAuthorized) {
      return <Redirect to='/'></Redirect>
    }
    return (
      <form className='auth-form' onSubmit={this.handlerSubmit}>
        <Typography variant='h3'>Sign In</Typography>

          <Input 
          color='primary'  
          name='email'
          style = {{width:'75%'}} 
          placeholder='Enter you email' 
          required={true} type='email' 
          value={this.state.email}
          onChange={this.handlerChange}
      
          ></Input>
          <Input 
          color='primary'  
          style = {{width:'75%'}}
          name='password'
          placeholder='Enter you password' 
          required={true} 
          type='password' 
          value={this.state.password}
          onChange={this.handlerChange}
          ></Input>
          <div className='auth-form-bottom'>
          <Button type='submit' variant="contained" color="primary">
             Sing In
            </Button>
            <span>Don't have an account yet?<Link to='/signup'> Sign Up!</Link></span>
            </div>
      </form>
    )
  }
  }


const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}
const mapDispacthToProps ={
  signIn,   
}

export default connect(mapStateToProps,mapDispacthToProps)(Auth)
