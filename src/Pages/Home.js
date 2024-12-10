
import React from 'react'
import house from '../Images/house.jpg'
import Card from '../Components/Card'
import RentalCard from '../Components/RentalCard';

function Home({propertyType}) {
  const properties = [
    {
      id: 1,
      src: "https://da28rauy2a860.cloudfront.net/completehome/wp-content/uploads/2021/03/03114534/Millbrook-Homes-58series-1-1024x683.jpg",
      title: "Luxury Apartment",
      description: "Spacious apartment for lease",
      rating: 4.5,
      dates: "Available now",
      price: 2000,
      isFeatured: true,
      buttonText: "Rent Now",
      propertyType: "lease" // This property is for lease
    },
    {
      id: 2,
      src: "https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
      title: "Beachfront Villa",
      description: "Beautiful beachfront villa for sale",
      rating: 4.8,
      dates: "Available now",
      price: 350000,
      isFeatured: true,
      buttonText: "Buy Now",
      propertyType: "Buy" // This property is for sale
    },
    
  ];
  return (
    <div className='home'>
        <div className="home__cardContainer">
       
        {properties.map((property) => (
        <div key={property.id}>
          {/* Conditionally render the correct card based on the property type */}
          {property.propertyType === 'lease'  ? (
            <RentalCard
              src={property.src}
              title={property.title}
              description={property.description}
              rating={property.rating}
              dates={property.dates}
              price={property.price}
              isFeatured={property.isFeatured}
              buttonText={property.buttonText}
              propertyType={property.propertyType}
            />
          ) : (
            <Card
              src={property.src}
              title={property.title}
              description={property.description}
              rating={property.rating}
              dates={property.dates}
              price={property.price}
              isFeatured={property.isFeatured}
              buttonText={property.buttonText}
              propertyType={property.propertyType}
            />
          )}
        </div>
      ))}
     
</div>
    </div>
  )
}

export default Home