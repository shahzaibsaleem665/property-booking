import React, { useState } from 'react';
import logo_black from '../Images/logo_black.svg';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import HeroSection from '../Components/HeroSection';
import RangePicker from '../Components/RangePicker';
import LocationSearch from '../Components/LocationSearch';
import Guest from '../Components/Guest';
import FilterButtons from '../Components/FilterButtons';

function Header() {
  

  return (
    <div className='header'>
      <div className="header__content">
        <div className="header__left">
          <img src={logo_black} alt='logo' />
        </div>
        <div className="header__middle">
          {/* Pass inputValue to LocationSearch */}
          <div className="header__input">
            <LocationSearch 
 />
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
          <SearchIcon className='search__icon' />
        </div>
        <div className="header__right">
          <Avatar />
        </div>
      </div>
      <HeroSection />
    </div>
  );
}

export default Header;
