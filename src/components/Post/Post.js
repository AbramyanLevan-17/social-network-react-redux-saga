import React from 'react'
import { Card,CardContent,CardActions,Typography,Button } from '@material-ui/core';

const Post = () => {
  return (
    <div>
        <Card style={{backgroundColor:'#e0e0e0'}}>
          <CardContent>
            <Typography variant='h5'>
              Title
            </Typography>
            <Typography>
              Description
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
