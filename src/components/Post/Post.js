import React from 'react'
import "./post.css"
import { Card,CardContent,CardActions,Typography,Button } from '@material-ui/core';

const Post = ({post}) => {

  return (
  
        <Card>
            <div className='item'>
          <CardContent>
            <Typography variant='h5'>
              {post.title}
            </Typography>
            <Typography >
              {post.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant='contained' color='primary'>Show more</Button>
          </CardActions>
          </div>
        </Card>
    
  )
}

export default Post
