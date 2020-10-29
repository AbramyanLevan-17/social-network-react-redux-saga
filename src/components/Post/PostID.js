import React from 'react'
import './postid.css'
import {  Button, Input,TextField, Typography, } from '@material-ui/core';
import {connect} from 'react-redux'
import {getComments,createComment} from '../../redux/actions'
import Comment from './Comment'


class PostID extends React.Component{
 constructor(props){
   super(props)
   this.state={
      button: false,
     class : 'hidden',
     title: this.props.location.post.title,
     description:this.props.location.post.description,
     comment:'',
   }
 }
 componentDidMount(){
   this.props.getComments();
 }
 showComments = () =>{
  this.setState({button:!this.state.button})
  this.setState({class:this.state.button ? 'list' : 'hidden'})
 } 
 handlerChange =(event)=>{
  this.setState(() => ({
    [event.target.name]: event.target.value
  }))
 } 
 handleSubmit = event => {
   event.preventDefault();
   const comment = {
    message:this.state.comment,
    commentable_id:this.props.location.post.id,
    commentable_type: 'Comment',
   }
   this.props.createComment(comment)
   this.setState({
     comment:''
   })
 }
 handleEditPost = event => {
   event.preventDefault();
   console.log(this.state.title,this.state.description)
 }
  render(){
   
    const {post} = this.props.location
    const {comments} = this.props

    const res = comments.length ? (comments.map(comment=>{
      if(comment.commentable_id === post.id){
        return (<Comment key={comment.id} comment={comment}></Comment>)
      }
    })) : (
        <Typography color='secondary'>No Comments</Typography>
    )
    return (
      <div>
          
        <div className='single-post'>
          <div className='info'>
    <Typography>User Id: {post.user_id}</Typography>
    <Typography>Created at: {post.created_at}</Typography>
          </div>
          <form onSubmit={this.handleEditPost} className='edit'>
            <label>Title: </label>
            <TextField onChange={this.handlerChange} name='title' placeholder={this.state.title}></TextField>
            <label>Description: </label>
            <TextField onChange={this.handlerChange} name='description' placeholder={this.state.description}></TextField>
            <Button variant='contained' color='primary' type='submit'>Save the changes</Button>
          </form>
          <div className='comments'>
            <form onSubmit={this.handleSubmit} className='add-comment'>
            <Input  onChange={this.handlerChange} style = {{width:'75%'}} name='comment' value={this.state.comment} placeholder='Add ur comment'></Input>
            <Button color='primary' type='submit'>Public</Button>
            </form>
            <Button onClick={this.showComments} variant='contained'>Show Comments</Button>
            <div className={this.state.class}>
              {res}
            </div>
          </div>
        </div>
      </div>
    )
  }
  }
  

const mapStateToProps = state => {
  return{
    comments: state.comments.comments
  }
}
const mapDispatchToSate = {
  getComments,createComment
}
export default connect(mapStateToProps,mapDispatchToSate)(PostID)
