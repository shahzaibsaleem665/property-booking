import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';
import { Avatar } from '@mui/material';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';

function RentalCard({agentUrl, agencyName, agentName, beds, bathrooms, parking, type, location, inspection, price, isFeatured, buttonContent}) {



const navigate = useNavigate();
const createSlug = (address) => {
  return address
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, ''); // Remove any special characters
};

const handleCardClick = () => {
  // Navigate to the dynamic property page with ID and address slug
  const addressSlug = createSlug(location);
  const typeOf = createSlug(type);
  navigate(`/property/${typeOf}/${addressSlug}`);
};


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  }
   
    const [isLiked, setIsLiked] = useState(false);

    // Toggle the heart icon state (like/dislike)
    const toggleLike = () => {
      setIsLiked((prev) => !prev); // Toggle between true and false
    };
  
    const Images = [
      { id: 1,  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPYsppJOTStr3f_26NY7HGXa_M6XXBSM9mfQ&s"},
      { id: 2,  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzz5rDiBcRQNwY1_xasqAbHjLqjx0W6Sa0cw&s"},
      { id: 3,  image: "https://api.photon.aremedia.net.au/wp-content/uploads/sites/2/umb-media/25922/resort-style-1980s-home-renovation-living-room-vaulted-a-frame-ceiling.jpg?crop=0px%2C857px%2C1467px%2C825px&resize=720%2C405"},
      { id: 4,  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQji2pHswi_mAhHjWZ7N6a9w-6QR52IUSXVsg&s"},
      { id: 5,  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZLAX_AcLzCPJKXODX7m4qaA7FBalaQuEV1g&s"},
      
    ];

  return (
    <div className='rentalCard' onClick={handleCardClick}>
      <div className="rentalCard__imageContainer">
        <Slider {...settings}>
        {Images.map((property) => (
          <div key={property.id} className='images__slider' >
        <img src={property.image} alt="" className="rentalCard__image" />
        </div>
        ))}
        </Slider>
        {/* Dynamic Button */}
        {isFeatured && (
          <div className="rentalCard__buttonContainer">
            <p className="rentalCard__buttonText">{buttonContent}</p> {/* Dynamically set button text */}
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
  <div className="infoItem">
    <BathtubOutlinedIcon className="infoIcon" style={{marginBottom:'3px'
    }} />
    <span>{bathrooms}</span>
  </div>
  
  <div className="infoItem">
    <BedOutlinedIcon className="infoIcon" />
    <span>{beds}</span>
  </div>
  
  <div className="infoItem">
    <DirectionsCarFilledOutlinedIcon className="infoIcon" />
    <span>{parking} -</span>
  </div>
  
  <div className="infoItem">
    <span>{type}</span>
  </div>
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