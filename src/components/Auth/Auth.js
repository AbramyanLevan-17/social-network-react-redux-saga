import React from 'react'
import './auth.css'
import { Input,Button,Typography } from '@material-ui/core';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchUser} from '../../redux/actions'


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
    const {email,password} = this.state;

    const data = {
      "email": email,
      "password": password
      }
  
    fetch(" https://postify-api.herokuapp.com/auth/sign_in", {
      method: "POST",
      body:  JSON.stringify(data)
    })
    .then(function(response){ 
      return response.json(); 
    })
    .then(function(data){ 
      console.log(data)
    });
    this.setState({
      email:'',
      password:''
    })
  }
  render(){
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
           <Button variant="contained" color="primary">
             Sing In
            </Button>

          <div className='auth-form-bottom'>
         
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
    fetchUser,
}

export default connect(mapStateToProps,mapDispacthToProps)(Auth)
