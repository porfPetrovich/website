import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';

const PostCard = ({post, index}) => {
    return (
        <Card key={index} sx={{ width: '80%', marginBottom: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {post.text}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {post.date.toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric'})}
              </Typography>
              <Typography variant="body2">
                {post.blurb}
              </Typography>
            </CardContent>
            <CardActions>
            <Button size="small" component={RouterLink} to={post.link} state={{ post }}>
                Read More
              </Button>
            </CardActions>
          </Card>
    )
};

export default PostCard;