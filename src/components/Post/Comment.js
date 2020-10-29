import React from 'react'
import { Typography, } from '@material-ui/core';
import './comment.css'

export default class Comment extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const {comment} = this.props
    return (
      <div className='comment'>
         <Typography>{comment.message}</Typography>
         <div className='comment-info'>
    <Typography style={{fontSize:'14px',color:'#777'}}>Author: {comment.user_id}</Typography>
         <Typography style={{fontSize:'14px',color:'#777'}}>Date: {comment.created_at}</Typography>
         </div>
      </div>
    )
  }
}
