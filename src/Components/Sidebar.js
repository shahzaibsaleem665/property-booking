import React, { useState } from 'react';
import { Drawer, IconButton, Avatar, List } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SideBarItem from './SideBarItem'; // Import the SideBarItem component
import DashboardIcon from '@mui/icons-material/Dashboard';

import shahzaib from '../Images/shahzaib.jpeg';

function Sidebar({ drawerOpen, handleDrawerToggle }) {
  // Simulate the logged-in state and user role (useState for testing)
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Change to true for logged-in state
  const [userRole, setUserRole] = useState('guest'); // Default role is 'guest'

 
  // Simulate login (you can change the user role here for testing)
  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setUserRole(role); // You can set any role here for testing (e.g., 'renter', 'admin', 'host')
  };

  // Simulate logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole('guest');
  };

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
        onClick={handleDrawerToggle} // Close the drawer when clicked
        aria-label="close"
        style={{ position: 'absolute' }}
      >
        <ChevronRightIcon />
      </IconButton>

      {isLoggedIn && (
        <div className="user__info">
          <Avatar className="user__avatar" src={shahzaib} />
          <div className="user__details">
            <p>Shahzaib Saleem</p>
            <p>Shahzaibsaleem665@gmail.com</p>
          </div>
        </div>
      )}

      <div className="drawer__content">
        {isLoggedIn ? (
          <div>
            <List className="custom__list" style={{ marginTop: '20px' }}>
              {/* Shared Profile and Settings for all users */}
              <SideBarItem
                onClick={handleDrawerToggle}
                icon={<PersonIcon />}
                text="Profile"
              />
              <SideBarItem
                onClick={handleDrawerToggle}
                icon={<SettingsIcon />}
                text="Settings"
              />

              {/* Render Logout for all logged-in users */}
              <SideBarItem
                onClick={handleLogout}
                icon={<LogoutIcon />}
                text="Logout"
              />

              {/* Role-based items */}
              {userRole === 'renter' && (
                <SideBarItem
                  onClick={handleDrawerToggle}
                  icon={<DashboardIcon />}
                  text="Renter Dashboard"
                />
              )}

              {userRole === 'admin' && (
                <SideBarItem
                  onClick={handleDrawerToggle}
                  icon={<DashboardIcon />}
                  text="Admin Dashboard"
                />
              )}

              {userRole === 'host' && (
                <SideBarItem
                  onClick={handleDrawerToggle}
                  icon={<DashboardIcon />}
                  text="Host Dashboard"
                />
              )}
            </List>
          </div>
        ) : (
          <List className="custom__list">
            <SideBarItem
              onClick={() => handleLogin('guest')}
              icon={<PersonAddAltIcon />}
              text="Sign Up"
            />
            <SideBarItem
              onClick={() => handleLogin('guest')}
              icon={<LoginIcon />}
              text="Login"
            />
          </List>
        )}
      </div>

      <hr />

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
