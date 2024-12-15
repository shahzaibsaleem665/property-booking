import React from 'react';
import RentalCard from '../Components/RentalCard';
import shahzaib from '../Images/shahzaib.jpeg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {

  const getWindowWidth = window.innerWidth;


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: (
      <div className="custom-prev-arrow">
        <ArrowBackIcon style={{ fontSize: '40px', color: 'white', backgroundColor: 'black', marginLeft: '-20px', borderRadius: '30px', padding: '2px' }} />
      </div>
    ),
    nextArrow: (
      <div className="custom-next-arrow">
        <ArrowForwardIcon style={{ fontSize: '40px', color: 'white', backgroundColor: 'black', marginLeft: '-15px',borderRadius: '30px', padding: '2px' }} />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const properties = [
    { id: 1, location: "123 Main St, Granville, NSW", image: "https://coralhomes.com.au/wp-content/uploads/Atlanta-Series-1190x680.png", price: 2500, beds: 3, type: 'House' },
    { id: 2, location: "456 High St, Granville, NSW", image: "https://example.com/image2.jpg", price: 1800, beds: 2, type: 'Apartment' },
    { id: 3, location: "789 Park Rd, Granville, NSW", image: "https://example.com/image3.jpg", price: 3000, beds: 4, type: 'House' },
    { id: 4, location: "1010 George St, Bankstown, NSW", image: "https://example.com/image4.jpg", price: 2200, beds: 3, type: 'Apartment' },
    { id: 5, location: "123 Main St, Granville, NSW", image: "https://coralhomes.com.au/wp-content/uploads/Atlanta-Series-1190x680.png", price: 2500, beds: 3, type: 'House' },
    { id: 6, location: "456 High St, Granville, NSW", image: "https://example.com/image2.jpg", price: 1800, beds: 2, type: 'Apartment' },
    { id: 7, location: "789 Park Rd, Granville, NSW", image: "https://example.com/image3.jpg", price: 3000, beds: 4, type: 'House' },
    { id: 8, location: "1010 George St, Bankstown, NSW", image: "https://example.com/image4.jpg", price: 2200, beds: 3, type: 'Apartment' },
    
  ];

  return (
    <div className='home'>
      {/* To check width and sort resposniveness */}
      
      <h2>Featured Properties{getWindowWidth} px</h2>  

      
      <div className="home__cardContainer">
      <Slider {...settings}>
        {properties.map((property) => (
          <div key={property.id} >
               
            <RentalCard 
              image={property.image}
              location={property.location}
              agentUrl={shahzaib}
              agencyName="Exclusive Real Estate"
              agentName="Shahzaib Saleem"
              inspection="SAT 14 DEC, 11:00 AM"
              price={property.price}
              isFeatured={true}
              buttonText="Features"
              beds={property.beds}
              bathrooms={2}
              parking={1}
              type={property.type}
            />
          </div>
        ))}
        </Slider>
         </div>
    </div>
  );
}

export default Home;
