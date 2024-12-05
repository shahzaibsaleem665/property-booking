import React, { useState } from 'react';
import logo_black from '../Images/logo_black.svg';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import Sidebar from '../Components/Sidebar';
import RangePicker from '../Components/RangePicker';
import LocationSearch from '../Components/LocationSearch';
import Guest from '../Components/Guest';
import FilterButtons from '../Components/FilterButtons';

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

      {/* Use the DrawerComponent */}
      <Sidebar
        drawerOpen={drawerOpen}
        handleDrawerToggle={handleDrawerToggle}
        isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
    </div>
  );
}

export default Header;
