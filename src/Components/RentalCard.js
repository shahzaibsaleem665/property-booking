import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';
import { Avatar } from '@mui/material';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';


function RentalCard({image, agentUrl, agencyName, agentName, beds, bathrooms, parking, type, location, inspection, price, isFeatured, buttonText }) {
   
    const [isLiked, setIsLiked] = useState(false);

    // Toggle the heart icon state (like/dislike)
    const toggleLike = () => {
      setIsLiked((prev) => !prev); // Toggle between true and false
    };
  
   

  return (
    <div className='rentalCard'>
      <div className="rentalCard__imageContainer">
        <img src={image} alt="" className="rentalCard__image" />
        {/* Dynamic Button */}
        {isFeatured && (
          <div className="rentalCard__buttonContainer">
            <p className="rentalCard__buttonText">{buttonText}</p> {/* Dynamically set button text */}
          </div>
        )}
      </div>

      <div className="rentalCard__info">
        <div className="rentalCard__infoTop">
          <Avatar src={agentUrl} />
          <div className="rentalCard__infoTopDetails">
          <p>{agentName}</p>
          <p>{agencyName}</p>
          </div>
        </div>
        <div className="rentalCard__infoTitle">
          <p><BathtubOutlinedIcon /> {bathrooms}</p> 
          <p><BedOutlinedIcon style={{marginTop: '2px'}} /> {beds} </p>
          <p><DirectionsCarFilledOutlinedIcon /> {parking}  - </p>  
          <p>{type}</p>
        </div>
        <div className="rentalCard__infoDesc">
            <div className="rentalCard__infoText">
            <p className='address'>{location}</p>
          <p>Inspection: {inspection}</p>
          <p className="rentalCard__price">
            ${price} PER WEEK
          </p>
            </div>
          <div  className={`rentalCard__infoHeart ${isLiked ? 'liked' : ''}`} 
          onClick={toggleLike} 
        >
          {isLiked ? (
            <FavoriteIcon className="icon__clicked" /> 
          ) : (
            <FavoriteBorderIcon className="not__filled" /> 
          )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RentalCard