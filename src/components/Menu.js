// components/Menu.js
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';

const Menu = ({ items }) => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '13%',
          backgroundColor: '#E1F5FE',
          '@media (max-width: 600px)': {
            width: '20%', // adjust the width for smaller screens
          },
          '@media (max-width: 400px)': {
            width: '25%', // adjust the width for even smaller screens
          },
        },
      }}
    >
      <Typography variant='h4' sx={{ px: 2 }}>
        Porfiry Petrovich
      </Typography>
      {items.map((items, index) => (
          <List key={index} sx={{ display: 'flex', flexDirection: 'column' }}>
          {items.map((item, idx) => (
              <ListItem key={idx} button component={RouterLink} to={item.link}>
                <ListItemText primary={item.text} />
              </ListItem>
          ))}
          </List>
      ))}
    </Drawer>
  );
};

export default Menu;
