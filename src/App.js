// App.js
import React from 'react';
import { BrowserRouter as Router, HashRouter, Route, Routes } from 'react-router-dom';
import { Box, CssBaseline, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from'./Theme';
import './styles.css';
import Menu from './components/Menu';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import BlogPost from './components/BlogPost';

function App() {
  const mainMenuItems = [
    { text: 'Home', link: '/'},
    { text: 'Blog', link: '/blog/'},
    { text: 'About', link: '/about'},
    { text: 'Contact', link: '/contact'},
  ]

  return (
    <ThemeProvider theme = {theme}>
      <HashRouter>
        <CssBaseline />
        <Box display="flex">
          <Grid container>
            <Grid item xs={3}>
              <Menu items={[mainMenuItems]} />
            </Grid>
            <Grid item xs={7} sx={{py:2}}>
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Grid>
          </Grid>
        </Box>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;