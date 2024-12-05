import React, { useState } from 'react';
import logo_black from '../Images/logo_black.svg';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Drawer, List, ListItem, ListItemText, IconButton, ListItemIcon } from '@mui/material'; // Import necessary components
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RangePicker from '../Components/RangePicker';
import LocationSearch from '../Components/LocationSearch';
import Guest from '../Components/Guest';
import FilterButtons from '../Components/FilterButtons';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';


function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false); // State for the drawer open/close
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if the user is logged in

  // Open the drawer
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Close the drawer
  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  // Toggle login state (for demonstration purposes)
  const handleLogin = () => {
    setIsLoggedIn(true); // Simulating a login action
    handleCloseDrawer();  // Close the drawer on login
  };

  // Logout function
  const handleLogout = () => {
    setIsLoggedIn(false); // Simulating a logout action
    handleCloseDrawer();  // Close the drawer on logout
  };

  return (
    <div className="header">
      <div className="header__content">
        <div className="header__left">
          <img src={logo_black} alt="logo" />
        </div>
        <div className="header__middle">
          <div className="header__input">
            <LocationSearch />
          </div>
          <div className="header__range">
            <RangePicker />
          </div>
          <div className="header__guest">
            <Guest />
          </div>
          <div className="header__filter">
            <FilterButtons />
          </div>
          <SearchIcon className="search__icon" />
        </div>
        <div className="header__right">
          <Avatar 
            onClick={handleDrawerToggle} // Toggle drawer when avatar is clicked
            aria-label="User Avatar" 
            className="header__avatar"
          />
        </div>
      </div>

      {/* Drawer (Slider Menu) */}
      <Drawer
        className="custom__drawer"
        anchor="right" // You can change this to "left" if you want the drawer to slide from the left
        open={drawerOpen}
        onClose={handleCloseDrawer}
      >
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleCloseDrawer}  // Close the drawer when clicked
          aria-label="close"
          style={{ position: 'absolute' }}
        >
          <ChevronRightIcon /> {/* Close Icon */}
        </IconButton>
        <div className="drawer__content">
        {isLoggedIn ? (

            <List className="custom__list">
              <ListItem button onClick={handleCloseDrawer} className="custom__listItem">
              <ListItemIcon className='list__itemIcon'><PersonIcon /></ListItemIcon>
                <ListItemText primary="Profile" className="custom__listItemText" />
              </ListItem>
              <ListItem button onClick={handleCloseDrawer} className="custom__listItem">
              <ListItemIcon className='list__itemIcon'><SettingsIcon /></ListItemIcon>
                <ListItemText primary="Settings " className="custom__listItemText" />
              </ListItem>
              <ListItem button onClick={handleLogout} className="custom__listItem">
              <ListItemIcon className='list__itemIcon'><LogoutIcon /></ListItemIcon>
                <ListItemText primary="Logout" className="custom__listItemText" />
              </ListItem>
            </List>
          ) : (
            // User is not logged in, show Login and Sign Up options
            <List className="custom__list">
               <ListItem button onClick={handleLogin} className="custom__listItem">
              <ListItemIcon className='list__itemIcon'><PersonAddAltIcon /></ListItemIcon>
                <ListItemText primary="Sign Up" className="custom__listItemText" />
              </ListItem>
              <ListItem button onClick={handleLogin} className="custom__listItem">
              <ListItemIcon className='list__itemIcon'><LoginIcon /></ListItemIcon>
                <ListItemText primary="Login" className="custom__listItemText" />
              </ListItem>
             
            </List>
                 )}
        </div>
      </Drawer>
    </div>
  );
}

export default Header;
