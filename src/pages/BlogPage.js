// pages/BlogPage.js
import React, { useEffect, useState } from 'react';
import { Box, Typography} from '@mui/material';
import PostCard from '../components/PostCard';

const BlogPage = () => {
  // { text: 'Sneaking Shitcoinery into Bitcoin', blurb: "Lorem Ipsum",link: '/blog/sneaking_shitcoins'},
  const posts = [
    { text: 'RHIB', blurb: 'ETFs, Faketoshi, Trump, Regulation, Yuval Harari', date: new Date("2024-05-24"), link: '/blog/rhib24May' },
    { text: 'Second Post', blurb: 'Consectetur adipiscing elit.', date: new Date("2024-05-24"), link: '/blog/second-post' },
  ];

  return (
    <Box p={2} width="100%">
      <Typography variant="h2" gutterBottom>
        Recent Happenings In Bitcoin
      </Typography>
      <Typography variant="body1" gutterBottom>
        In which I discuss current events in the Bitcoin World, 
        and related topics, interspered with searing hot takes
        and ruminations
      </Typography>

      <Box display="flex" flexDirection="column">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}

      </Box>
    </Box>
    );
  };
      
export default BlogPage;