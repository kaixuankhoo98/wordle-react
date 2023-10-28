'use client'
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { BarChartOutlined, HelpOutline, Settings } from '@mui/icons-material';

const Navbar = () => {
  return (
    <div style={{ borderBottom: '1px solid #333' }}>
      <AppBar position="static" sx={{ backgroundColor: '#121213', height: 60 }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ height: '100%', width: '100%' }}
        >
          <Box sx={{ width: '33%', paddingLeft: '1rem'}}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ width: '33%', display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h6" component="div" sx={{ fontFamily: 'Neue Helvetica' }}>
              Wordle
            </Typography>
          </Box>
          <Box sx={{ width: '33%', display: 'flex', justifyContent: 'right' }}>
            <IconButton color="inherit">
              <HelpOutline />
            </IconButton>
            <IconButton color="inherit">
              <BarChartOutlined />
            </IconButton>
            <IconButton color="inherit">
              <Settings />
            </IconButton>
          </Box>
        </Box>
      </AppBar>
    </div>
  );
};

export default Navbar;
