// pages/BlogPage.js
import React, { useEffect, useState } from 'react';
import { Box, Typography} from '@mui/material';
import PostCard from '../components/PostCard';

// const BlogPage = () => {
//   const posts = [
//     { text: 'Title of first post', blurb: 'Lorem Ipsum 1', date: new Date("2024-05-24"), link: '/blog/firstpost' },
//     { text: 'Title of second post', blurb: 'A post about lorem ipsum', date: new Date("2024-05-28"), link: '/blog/secondpost' },
//   ];

//   return (
//     <Box p={2} width="100%">
//       <Typography variant="h2" gutterBottom>
//         My Blog
//       </Typography>
//       <Typography variant="body1" gutterBottom>
//         Lipsem Orem
//       </Typography>

//       <Box display="flex" flexDirection="column">
//         {posts.map((post, index) => (
//           <PostCard key={index} post={post} />
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default BlogPage;

const BlogPage = () => {
  const posts = [
    { text: 'Recent Happenings in Bitcoin', blurb: 'ETFs, Faketoshi, Trump, Regulation, Yuval Harari', date: new Date("2024-05-24"), link: '/blog/rhib24May' },
    { text: 'Concerning Privacy', blurb: 'An imploration to get people to care about their privacy', date: new Date("2024-05-28"), link: '/blog/concerning-privacy' },
  ];

  return (
    <Box p={2} width="100%">
      <Typography variant="h2" gutterBottom>
        Notes and Essays
      </Typography>
      <Typography variant="body1" gutterBottom>
        In which I discuss current events in the Bitcoin World, 
        and related topics, interspered with searing hot takes
        and ruminations, as well as offering the odd essay on various topics
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