import React from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, ListItemIcon, Avatar } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Sidebar({ drawerOpen, handleDrawerToggle, isLoggedIn, handleLogin, handleLogout }) {

  return (
    <Drawer
      className="custom__drawer"
      anchor="right"
      open={drawerOpen}
      onClose={handleDrawerToggle}
    >
      <IconButton
        edge="end"
        color="inherit"
        onClick={handleDrawerToggle}  // Close the drawer when clicked
        aria-label="close"
        style={{ position: 'absolute' }}
      >
        <ChevronRightIcon />
      </IconButton>
      {isLoggedIn && (
        <div className="user__info">

          {/* Update the Avatar below with Src to get picture */}
          <Avatar  className="user__avatar" />
          <div className="user__details">
            <p>Shahzaib Saleem</p>
            <p>Shahzaibsaleem665@gmail.com</p>
          </div>
        </div>
      )}
      <div className="drawer__content">
        {isLoggedIn ? (
          <List className="custom__list">
            <ListItem button onClick={handleDrawerToggle} className="custom__listItem">
              <ListItemIcon className="list__itemIcon"><PersonIcon /></ListItemIcon>
              <ListItemText primary="Profile" className="custom__listItemText" />
            </ListItem>
            <ListItem button onClick={handleDrawerToggle} className="custom__listItem">
              <ListItemIcon className="list__itemIcon"><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Settings" className="custom__listItemText" />
            </ListItem>
            <ListItem button onClick={handleLogout} className="custom__listItem">
              <ListItemIcon className="list__itemIcon"><LogoutIcon /></ListItemIcon>
              <ListItemText primary="Logout" className="custom__listItemText" />
            </ListItem>
          </List>
        ) : (
          <List className="custom__list">
            <ListItem button onClick={handleLogin} className="custom__listItem">
              <ListItemIcon className="list__itemIcon"><PersonAddAltIcon /></ListItemIcon>
              <ListItemText primary="Sign Up" className="custom__listItemText" />
            </ListItem>
            <ListItem button onClick={handleLogin} className="custom__listItem">
              <ListItemIcon className="list__itemIcon"><LoginIcon /></ListItemIcon>
              <ListItemText primary="Login" className="custom__listItemText" />
            </ListItem>
          </List>
        )}
      </div>
      <hr/>
      <div className="drawer__contentBottom">
      
        <p>Follow us on</p>
        <div className="social__button">
        <FacebookIcon />
        <InstagramIcon />
        <LinkedInIcon />
        </div>
      </div>
    </Drawer>
  );
}

export default Sidebar;
