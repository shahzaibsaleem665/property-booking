import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import logo_light from '../Images/logo_light.svg';

function HeroSection() {
  return (
    <div className='hero__section'>
        <div className="hero__content">
          <img src={logo_light} />
            <h1>Find your perfect stay</h1>
            <p>Explore a wide range of properties and book your next stay with ease.</p>
            <button className='hero__button'>Explore places <ArrowOutwardIcon /></button>       
        </div>
    </div>
  )
}

export default HeroSection