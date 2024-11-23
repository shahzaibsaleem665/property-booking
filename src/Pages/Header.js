import React from 'react'
import logo from '../Images/logo.svg'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, IconButton } from '@mui/material';
import HeroSection from '../Components/HeroSection';
import RangePicker from '../Components/RangePicker';

function Header() {
  return (
    <div className='header'>
        <div className="header__content">
        <div className="header__left">
    <img src={logo} alt='logo'   />
    <h3>Homyra</h3>
        </div>
        <div className="header__middle">
        <input type='text' className='header__input' placeholder='Search Properties' />     
        <div className="range">
        <RangePicker />
        </div>
        <SearchIcon className='search__icon'/>  
        </div>
        <div className="header__right">
            <Avatar />
        </div>
    </div>
    <HeroSection />
    </div>
  )
}

export default Header