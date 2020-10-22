import React from 'react'
import { Card,CardContent,CardActions,Typography,Button } from '@material-ui/core';

const Post = ({post}) => {

  return (
    <div>
        <Card style={{backgroundColor:'#e0e0e0',textTransform:'capitalize'}}>
          <CardContent>
            <Typography variant='h5'>
              {post.title}
            </Typography>
            <Typography>
              {post.body}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant='contained' color='primary'>Comments</Button>
          </CardActions>
        </Card>
    </div>
  )
}

export default Post
