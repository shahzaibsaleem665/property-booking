import React from 'react'
import logo from '../Images/logo.svg'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, IconButton } from '@mui/material';
import HeroSection from '../Components/HeroSection';


function Header() {
  return (
    <div className='header'>
        <div className="header__content">
        <div className="header__left">
    <img src={logo} alt='logo'   />
    <h3>Homyra</h3>
        </div>
        <div className="header__middle">
        <input type='text' placeholder='Search Properties' />
        <SearchIcon />
        <input className='date__picker' type='date' />
        <input type='filter' />
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