import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { BarChartOutlined, HelpOutline, Menu, SettingsOutlined } from "@mui/icons-material"
import { FC } from "react";

const NavBar: FC = () => {
  return (
    <>
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton>
            <Menu />
          </IconButton>
          <Typography sx={{ paddingLeft: '0.5rem', fontWeight: '700' }}>
            Wordle
          </Typography>
          <Box sx={{ marginLeft: 'auto' }}>
          <IconButton>
            <HelpOutline />
          </IconButton>
          <IconButton>
            <BarChartOutlined />
          </IconButton>
          <IconButton>
            <SettingsOutlined />
          </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
};

export default NavBar;