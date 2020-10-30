import React from 'react'
import './postid.css'
import {  Button, Input,TextField, Typography, } from '@material-ui/core';
import {connect} from 'react-redux'
import {getComments,createComment,putPost,fetchPosts,deletePost} from '../../redux/actions'
import Comment from './Comment'


class PostID extends React.Component{
 constructor(props){
   super(props)
   this.state={
      button: true,
      class : 'hidden',
      title: '',
      description:'',
      comment:'',
      post:{},
   }
 }
 componentDidMount(){
   this.props.getComments();
 }
 componentWillReceiveProps(nextProps){
   if(nextProps.location !== this.props.location){
     this.setState({
       title:nextProps.location.post.title,
       description:nextProps.location.post.description,
       post:nextProps.location.post,
     })
   }
 }
 showComments = () =>{
  this.props.getComments();
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
   this.props.getComments();
 }
 handleEditPost = event => {
   event.preventDefault();
   const editedPost = {
     id:this.props.location.post.id,
     title:this.state.title,
     description:this.state.description,
   }
   this.props.putPost(editedPost)
  
 }
 handlerDelete = () =>{
   this.props.deletePost(this.props.location.post.id);
   this.props.fetchPosts();
    window.history.back();
 }
  render(){
   
    const {post} = this.stateppppppppppppppp
    const {comments} = this.props
    const currentCom = comments.filter(comment=>{
        if(comment.commentable_id === post.id){
          return comment
        }
    })
    const res = currentCom.length ? (currentCom.map(comment=>{
      return <Comment key={comment.id} comment={comment}></Comment>
    })):(<Typography color='secondary'>No Comments</Typography>)
     
    return(
     <div>
          
        <div className='single-post'>
          <div className='info'>
    <Typography>User Id: {post.user_id}</Typography>
    <Typography>Created at: {post.created_at}</Typography>
          </div>
          <form onSubmit={this.handleEditPost} className='edit'>
            <label>Title: </label>
            <TextField onChange={this.handlerChange} name='title' value={this.state.title} placeholder={this.state.title}></TextField>
            <label>Description: </label>
            <TextField onChange={this.handlerChange} name='description' value={this.state.description} placeholder={this.state.description}></TextField>
            <Button variant='contained' color='primary' type='submit'>Save the changes</Button>
            <Button onClick={this.handlerDelete} variant='contained' color='secondary'>Delete</Button>
          </form>
          <div className='comments'>
            <form onSubmit={this.handleSubmit} className='add-comment'>
            <Input  onChange={this.handlerChange} style = {{width:'75%'}} name='comment' value={this.state.comment} placeholder='Add ur comment'></Input>
            <Button color='primary' type='submit'>Public</Button>
         
            </form>
    <Button onClick={this.showComments} variant='contained'>Show Comments: {currentCom.length}</Button>
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
  getComments,createComment,putPost,fetchPosts,deletePost
}
export default connect(mapStateToProps,mapDispatchToSate)(PostID)
