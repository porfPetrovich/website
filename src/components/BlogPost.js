// pages/BlogPost.js
import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import fm from 'front-matter';

// custom renderer for images
const CustomImage = ({ alt, src }) => (
  <img alt={alt} src={src} className="custom-image" />
);

// custom renderer for blockquotes
const CustomBlockquote = ({ children }) => (
  <blockquote className="custom-blockquote">
    {children}
  </blockquote>
);

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    // gets the markdown files from /public/blog-posts/
    const fetchMarkdownContent = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/blog-posts/${slug}.md`);
        const markdownContent = await response.text();
        console.log(markdownContent)
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
        Post
      </Typography>
      <Box px={4}> {/* add padding on the left and right sides */}
        <ReactMarkdown components={{ img: CustomImage, blockquote: CustomBlockquote  }}>
          {content}
        </ReactMarkdown>
      </Box>
    </Box>
  );
};

export default BlogPost;
