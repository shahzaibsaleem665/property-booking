import React, { useState } from 'react';
import logo_black from '../Images/logo_black.svg';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import Sidebar from '../Components/Sidebar';
import RangePicker from '../Components/RangePicker';
import LocationSearch from '../Components/LocationSearch';
import Guest from '../Components/Guest';
import FilterButtons from '../Components/FilterButtons';
import StayType from '../Components/StayType';
import MoveinDate from '../Components/MoveinDate';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false); 
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [userType, setUserType] = useState('guest');
  const [stayType, setStayType] = useState(''); 

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);
  const handleCloseDrawer = () => setDrawerOpen(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
    handleCloseDrawer();
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    handleCloseDrawer();
  };
  const handleStayTypeChange = (newType) => setStayType(newType);

  return (
    <div className="header">
      <div className="header__content">
        <div className="header__left">
          <img src={logo_black} alt="logo" />
        </div>
        {(userType === 'renter' || userType === 'guest') && (
          <div className="header__middle">
            <div className="header__stayType">
              <StayType selectedStayType={stayType} onStayTypeChange={handleStayTypeChange} />
            </div>
            <div className="header__input">
              <LocationSearch />
            </div>

            {/* Conditional rendering of header componenets */}
            {stayType && (
              <div className="header__range">
                {stayType === 'Looking for Holiday?' ? <RangePicker /> : <MoveinDate />}
              </div>
            )}
            {stayType && (
              <div className="header__guest">
              {stayType === 'Looking for Holiday?' ? <Guest /> : ''}
            </div>
            )}
            
            <div className="header__filter">
              <FilterButtons  stayType={stayType}  />
            </div>
            <SearchIcon className="search__icon" />
          </div>
        )}
        <div className="header__right">
          <Avatar
            onClick={handleDrawerToggle}
            aria-label="User Avatar"
            className="header__avatar"
          />
        </div>
      </div>
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
