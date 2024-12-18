import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarRateIcon from '@mui/icons-material/StarRate';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


// propertyType is a check which will be coming from database to verify the type of the property e.g. For Lease, For Sale, For Vacation

function Card({ src, title, description, rating, dates, price, isFeatured, buttonText  }) {

    const [isLiked, setIsLiked] = useState(false);
    const navigate = useNavigate();

    // Toggle the heart icon state (like/dislike)
    const toggleLike = () => {
      setIsLiked((prev) => !prev); // Toggle between true and false
    };
  
   

  return (
    <div className='card' onClick={(e) => navigate('/property')}>
      <div className="card__imageContainer">
        <img src={src} alt="" className="card__image" />
        {/* Dynamic Button */}
        {isFeatured && (
          <div className="card__buttonContainer">
            <p className="card__buttonText">{buttonText}</p> {/* Dynamically set button text */}
          </div>
        )}
      </div>

      <div className="card__info">
        <div className="card__infoTitle">
          <h4>{title}</h4>
          <p><StarRateIcon />{rating}</p>
        </div>
        <div className="card__infoDesc">
            <div className="card__infoText">
            <p>{description}</p>
          <p>{dates}</p>
          <p className="card__price">
            {price} AUD
          </p>
            </div>
          <div  className={`card__infoHeart ${isLiked ? 'liked' : ''}`} 
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

export default Card;
