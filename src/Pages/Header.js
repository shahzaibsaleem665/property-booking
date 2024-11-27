import React, { useState } from 'react';
import logo from '../Images/logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import HeroSection from '../Components/HeroSection';
import RangePicker from '../Components/RangePicker';
import LocationSearch from '../Components/LocationSearch';

function Header() {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='header'>
      <div className="header__content">
        <div className="header__left">
          <img src={logo} alt='logo' />
          <h3>Homyra</h3>
        </div>
        <div className="header__middle">
          {/* Pass inputValue to LocationSearch */}
          <div className="header__input">
            <LocationSearch />
          </div>
          <div className="header__range">
            <RangePicker />
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
