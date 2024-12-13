import React, { useState } from 'react';
import RentalCard from '../Components/RentalCard';
import shahzaib from '../Images/shahzaib.jpeg';
import LocationSearch from '../Components/LocationSearch';

function Home() {
  const [selectedLocation, setSelectedLocation] = useState('');

  const properties = [
    { id: 1, location: "123 Main St, Granville, NSW", image: "https://coralhomes.com.au/wp-content/uploads/Atlanta-Series-1190x680.png", price: 2500, beds: 3, type: 'House' },
    { id: 2, location: "456 High St, Granville, NSW", image: "https://example.com/image2.jpg", price: 1800, beds: 2, type: 'Apartment' },
    { id: 3, location: "789 Park Rd, Granville, NSW", image: "https://example.com/image3.jpg", price: 3000, beds: 4, type: 'House' },
    { id: 4, location: "1010 George St, Bankstown, NSW", image: "https://example.com/image4.jpg", price: 2200, beds: 3, type: 'Apartment' },
    { id: 5, location: "2020 Canterbury Rd, Bankstown, NSW", image: "https://example.com/image5.jpg", price: 2600, beds: 4, type: 'House' },
    { id: 6, location: "3030 Punchbowl Rd, Bankstown, NSW", image: "https://example.com/image6.jpg", price: 2400, beds: 3, type: 'Townhouse' },
    { id: 7, location: "4040 Liverpool Rd, Bankstown, NSW", image: "https://example.com/image7.jpg", price: 2100, beds: 2, type: 'Apartment' },
    { id: 8, location: "5050 The Crescent, Bankstown, NSW", image: "https://example.com/image8.jpg", price: 2300, beds: 3, type: 'House' },
    { id: 9, location: "6060 Green Rd, Granville, NSW", image: "https://example.com/image9.jpg", price: 2800, beds: 5, type: 'House' },
    { id: 10, location: "7070 Mount Rd, Granville, NSW", image: "https://example.com/image10.jpg", price: 3500, beds: 6, type: 'Luxury Villa' }
  ];

  const handleLocationChange = (newLocation) => {
    // Extract the suburb from the selected address (before the comma)
    const suburb = newLocation.split(',')[0].trim();
    setSelectedLocation(suburb);
    console.log("Selected Suburb: ", suburb); // Debugging log
  };

 
  const filteredProperties = properties.filter(property =>
    property.location.toLowerCase().trim().includes(selectedLocation.toLowerCase().trim())
  );
  

  return (
    <div className='home'>
         <LocationSearch onLocationSelect={handleLocationChange} />
     <div className="home__cardContainer">
        {filteredProperties.map(property => (
          <RentalCard
            key={property.id}
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
        ))}
      </div>
    </div>
  );
}

export default Home;
