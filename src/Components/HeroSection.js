import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import logo_light from '../Images/logo_light.svg';
import { useNavigate } from 'react-router-dom';


function HeroSection() {

  const navigate = useNavigate();

  

  const handleClick = (event) => {
    event.preventDefault();
    navigate('/register'); // Programmatically navigate to the /register route
  }; 


  return (
    <div className='hero__section'>
        <div className="hero__content">
          <img src={logo_light} />
            <h1>Find your perfect stay</h1>
            <p>Explore a wide range of properties and book your next stay with ease.</p>
            
            <button className='hero__button' onClick={handleClick}  >Become A Host <ArrowOutwardIcon /></button>       
        </div>
    </div>
  )
}

export default HeroSection