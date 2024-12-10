import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarRateIcon from '@mui/icons-material/StarRate';
import { useState } from 'react';


function RentalCard({src, title, description, rating, dates, price, isFeatured, buttonText }) {
   
    const [isLiked, setIsLiked] = useState(false);

    // Toggle the heart icon state (like/dislike)
    const toggleLike = () => {
      setIsLiked((prev) => !prev); // Toggle between true and false
    };
  
   

  return (
    <div className='rentalCard'>
      <div className="rentalCard__imageContainer">
        <img src={src} alt="" className="rentalCard__image" />
        {/* Dynamic Button */}
        {isFeatured && (
          <div className="reantalCard__buttonContainer">
            <p className="rentalCard__buttonText">{buttonText}</p> {/* Dynamically set button text */}
          </div>
        )}
      </div>

      <div className="rentalCard__info">
        <div className="rentalCard__infoTitle">
          <h4>{title}</h4>
          <p><StarRateIcon />{rating}</p>
        </div>
        <div className="rentalCard__infoDesc">
            <div className="rentalCard__infoText">
            <p>{description}</p>
          <p>{dates}</p>
          <p className="rentalCard__price">
            {price} AUD
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