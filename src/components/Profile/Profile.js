import React from 'react'
import { Avatar,Typography } from '@material-ui/core';
import './profile.css'
import Post from '../Post/Post';
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
class Profile extends React.Component{



  render(){
    const user = this.props.auth.data
    const userPosts = this.props.posts.filter(post=>{
      if (user.id === post.user_id) return post
    })
    return (
      <div className='profile-page'>
          <div className='user'>
          <Avatar variant='square'></Avatar>
            <div className='info'>
              <Typography className='fio'>Имя Фамилия</Typography> 
             
             <Typography className='email'>{user.email}</Typography>
            </div>
          </div>
          <div className='user-posts'>
            {userPosts.map(post=>{
              return (
                <NavLink className="no-style" key={post.id} to={{
                  pathname:`/posts/${post.id}`,
                  post: post,
                }}>
              <Post
                post={post}
                key={post.id}
                
              />
              </NavLink>
              )
              
            })}
          </div>
      </div>
    )
  }
  }
  
const mapStateToProps = (state) =>{
  return{
    auth:state.auth,
    posts: state.posts.posts
  }
  }
 

export default connect(mapStateToProps,null)(Profile)
