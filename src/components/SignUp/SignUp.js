import React from 'react'
import './signup.css'
import { Input,Button,Typography } from '@material-ui/core';
import {connect} from 'react-redux'
import {fetchSignUp} from '../../redux/actions'
import {Link} from 'react-router-dom'
class SingUp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email:'',
      password:'',
      confirm: '',
    }
  }
  handlerSubmit = event => {
    event.preventDefault();
    const action = fetchSignUp({
      email: this.state.email,
      password: this.state.password,
      confirm: this.state.confirm,
    });
    this.props.dispatch(action);
  }
  handlerChange = (event) =>{
    this.setState(()=>({
      [event.target.name]:event.target.value
    }))
  }
  render(){
    const res = this.props.signup.status === 'success' ? 
    (
      <p className='succes'>Success Registrationp. Go to the <Link to='/auth'>Sign In</Link> Page</p>
    )
     : (
     <p className='error'>{this.props.signup.error}</p>
    )

    return (
      <form onSubmit={this.handlerSubmit} className='signup-form'>
      <Typography variant='h3'>Sign Up</Typography>
        <Input color='primary' onChange={this.handlerChange} style = {{width:'75%'}} placeholder='Enter you email' required={true} type='email' value={this.state.email} name='email'></Input>
        <Input color='primary' onChange={this.handlerChange} style = {{width:'75%'}} placeholder='Enter you password' required={true} type='password' value={this.state.password} name='password'></Input>  
        <Input color='primary' onChange={this.handlerChange} style = {{width:'75%'}} placeholder='Enter you password' required={true} type='password' value={this.state.confirm} name='confirm'></Input>  
        <Button type='submit' variant="contained" color="primary">
           Sign Up
          </Button>
          {
          res
        } 
    </form>
        )
  }
  }

  const mapStateToProps = (state) => {
        return {signup: state.signUp}
  }
 

  export default connect(mapStateToProps, null)(SingUp)
