import React from 'react';
import RentalCard from '../Components/Properties/RentalCard';
import shahzaib from '../Images/shahzaib.jpeg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '../Components/Properties/Card';

function Home() {

  const getWindowWidth = window.innerWidth;


  const settings = {
    dots: false,
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
  };
  const properties = [
    
    { id: 1, 
      location: "456 Collins Street, Melbourne, VIC 3000", 
      FeaturedOn: true, 
      image: "https://www.glenvillhomes.com.au/wp-content/uploads/2024/10/0.12-Classic-Home-Retreat-web-e1727739364945.jpg",
      buttontext:'Newly Built' ,
      price: 450,
      beds: 2, 
      type: 'House' 
    },

    { id: 2, 
      location: "789 Queen Street, Brisbane City, QLD 4000", 
      FeaturedOn: true, 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJhSnITJis_OZRpaR1m6pZsyMG9VhdQMyOymtn-dSBwUWuE8qkbjT4Pu5NVawWGxYP5g&usqp=CAU",
      buttontext:'Featured' ,
      price: 560,
      beds: 4, 
      type: 'Unit' 
    },

    { id: 3, 
      location: "123 George Street, The Rocks, Sydney, NSW 2000", 
      FeaturedOn: true,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdUsKDIagnhfM0scqfCrAmsP9gzPvLMdrtXg&s",
      buttontext:'Renovated' ,
      price: 605,
      beds: 2, 
      type: 'Unit' 
    },
    { id: 4, 
      location: "12 Constitution Avenue, Canberra City, ACT 2601", 
      FeaturedOn: false, 
      image: "https://us.123rf.com/450wm/iriana88w/iriana88w1402/iriana88w140200260/25668327-pretty-siding-house-with-colomn-porch-and-attached-garage-the-green-lawn-with-flower-bed-and.jpg?ver=6",
      buttontext:'Host Plus' ,
      price: 1000,
      beds: 4, 
      type: 'House' 
    },
    { id: 5, 
      location: "56 Salamanca Place, Hobart, TAS 7000", 
      FeaturedOn: true, 
      image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
      buttontext:'Furnished' ,
      price: 1200,
      beds: 3, 
      type: 'House' 
    },
    { id: 6, 
      location: "101 St Georges Terrace, Perth, WA 6000", 
      FeaturedOn: 'false', 
      image: "https://masterton.com.au/wp-content/uploads/2020/10/MH-Disp-Box-Hill-Westwood-1.jpg",
      buttontext:'Features' ,
      price: 700,
      beds: 3, 
      type: 'Unit' 
    },
    { id: 7, 
      location: "234 Rundle Mall, Adelaide, SA 5000", 
      FeaturedOn: 'False', 
      image: "https://media.istockphoto.com/id/1255835530/photo/modern-custom-suburban-home-exterior.jpg?s=612x612&w=0&k=20&c=0Dqjm3NunXjZtWVpsUvNKg2A4rK2gMvJ-827nb4AMU4=",
      buttontext:'Ex-mall' ,
      price: 2500,
      beds: 6, 
      type: 'House' 
    },

      
    
  ];

  return (
    <div className='home'>
      {/* To check width and sort resposniveness */}
      <h2>Featured Properties</h2>  

      <div className="home__cardContainer">
      <Slider {...settings}>
        {properties.map((property) => (
          <div key={property.id} >

             {/* <Card 
             src="https://coralhomes.com.au/wp-content/uploads/Atlanta-Series-1190x680.png"
             title={properties.location}
             description='A new Test House'
             rating={4.9}
            dates='12 December 2014'
            price={500}
            isFeatured={true}
            buttonText='Host Plus'           
             />   */}
            <RentalCard 
              image={property.image}
              location={property.location}
              agentUrl={shahzaib}
              agencyName="Exclusive Real Estate"
              agentName="Shahzaib Saleem"
              inspection="SAT 14 DEC, 11:00 AM"
              price={property.price}
              isFeatured={property.FeaturedOn}
              buttonContent={property.buttontext}
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
