// pages/HomePage.js
import { Typography } from '@mui/material';
import React from 'react';

const HomePage = () => {

  return (
    <div>
        <Typography variant='h1'>Welcome</Typography>
        <Typography variant='h4'>A website concerning Peer-to-Peer Systems, Austrian Economics, Self-Sovereignty and the Human Condition.</Typography>
        <Typography variant='body1'>
          I am a guy who's concerned with the way I see my society 
          moving and hoping to have some small part to play in fixing it.
        </Typography>
        <Typography variant='body1'>
          I believe Bitcoin is the best tool that we have for this endeavour, both as a standalone 
          innovation, but arguably more importantly, in the set of philosophical tools that learning
          about it endows one with. I hope to make a contribution to this.
        </Typography>
    </div>
  );
};

export default HomePage;
