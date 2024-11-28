import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import logo from '../Images/logo.png';

function HeroSection() {
  return (
    <div className='hero__section'>
        <div className="hero__content">
          <img src={logo} />
            <h1>Find your perfect stay</h1>
            <p>Explore a wide range of properties and book your next stay with ease.</p>
            <button>Explore places <ArrowOutwardIcon /></button>       
        </div>
    </div>
  )
}

export default HeroSection