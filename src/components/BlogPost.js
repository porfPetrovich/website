// pages/BlogPost.js
import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams, useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import fm from 'front-matter';

// Custom renderer for images
const CustomImage = ({ node, ...props }) => (
  <img
    {...props}
    style={{ display: 'block', margin: '0 auto', maxWidth: '50%' }}
    alt={props.alt || ''}
  />
);

// Custom renderer for blockquotes
const CustomBlockquote = ({ children }) => (
  <blockquote className="custom-blockquote">
    {children}
  </blockquote>
);

const BlogPost = () => {
  const { slug } = useParams();
  const location = useLocation();
  const { post } = location.state || {}; // get the post object from the router state
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/blog-posts/${slug}.md`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const markdownContent = await response.text();
        const parsedContent = fm(markdownContent);
        setContent(parsedContent.body);
      } catch (error) {
        console.error('Error fetching markdown content:', error);
      }
    };

    fetchMarkdownContent();
  }, [slug]);

  return (
    <Box p={2} width="100%">
      <Typography variant="h2" gutterBottom>
        {post.text}
      </Typography>
      <Box px={4}>
        <ReactMarkdown components={{ img: CustomImage, blockquote: CustomBlockquote }}>
          {content}
        </ReactMarkdown>
      </Box>
    </Box>
  );
};

export default BlogPost;
