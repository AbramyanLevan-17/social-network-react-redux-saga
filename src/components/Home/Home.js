import React,{Component} from 'react'
import './home.css'
import { Typography,Input,Button,TextField} from '@material-ui/core';
import Post from '../Post/Post'

 
class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      description:''
    }
  }
  
  render(){
    return (
      <div>
          
         
          <form className='add-form' onSubmit={this.handlerSubmit}>
          <Typography variant='h5'>Create a new post</Typography>
          <Input color='primary'  
          placeholder='Title' 
          required={true} 
          type='text'
          name='title'
          ></Input>
          <TextField
            color='primary'  
            name='description'
            label="Description"
            helperText="Add description to your post"
            variant="filled"
          />
          <Button  type='submit' style = {{width:'25%'}} variant="contained" color="primary">Create</Button>
          </form>
         
          <Typography id='posts-count'>The number: 30</Typography>
          <div className='all-posts'>
            <Post></Post>
            <Post></Post>
            <Post></Post>
          </div>
      </div>
          
      
    )
  }

}


export default Home
