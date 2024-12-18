import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Gallery from '../Components/Gallery';



function Property() {


  const { typeOf, addressSlug } = useParams();

  const [propertyDetails, setPropertyDetails] = useState(null);


  const extractSuburb = (addressSlug) => {
    const parts = addressSlug.split('-'); // Split by hyphen (-)
    return parts[5]; // The first part is likely the suburb
  };

  // Extract the suburb from the addressSlug
  const suburb = extractSuburb(addressSlug);

  useEffect(() => {
    // Here, you would likely make an API call or use some data fetching
    // For now, we simulate the data fetching using the slugs
    const fetchPropertyDetails = async () => {
      // Replace with your data fetching logic (API call)
      // For now, we're just simulating the data
      const fetchedDetails = {
        type: typeOf, // using the typeSlug as the property type
        location: addressSlug, // using the addressSlug as the location
        price: "$500", // Example price, replace with actual data
        description: "Beautiful 2-bedroom house with a large backyard.",
      };
      setPropertyDetails(fetchedDetails);
    };

    fetchPropertyDetails();
  }, [typeOf, addressSlug]); // Re-fetch when the type or location changes

  if (!propertyDetails) {
    return <div>Loading...</div>; // You can show a loading indicator
  }

  // Destructure the fetched property details
  const { type, location, price, description } = propertyDetails;


  return (
    <div className='property'>
      <div className="property__content">
        <div className="property__contentTop">
          <div className="property__contentTopLeft">

          <h1>{type} in {suburb}</h1>  
          </div>
          <div className="property__contentTopRight">
            <div className="info__Item">
              <ShareIcon className="infoIcon" />
              <span>Share</span>
            </div>
  
            <div className="info__Item">
               <FavoriteBorderIcon className="infoIcon" />
              <span>Save</span>
              </div>
          </div>
      
        </div>
      <div className="property__contentmiddle">
        <Gallery />
      </div>
      </div>
       
    </div>
  )
}

export default Property