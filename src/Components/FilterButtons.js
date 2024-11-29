import React, { useState } from 'react';
import TuneIcon from '@mui/icons-material/Tune';

const FilterButtons = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [leaseType, selectLeaseType] = useState();

  const amenities = ['Wi-Fi', 'Gas', 'Balcony', 'Pool', 'Gym', 'Air Conditioning', 'Heating', 'Kitchen', 'Washer/Dryer', 'Parking', 'Pet-friendly'];
  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  const toggleAmenity = (amenity) => {
    setSelectedAmenities((prevState) => {
      if (prevState.includes(amenity)) {
        return prevState.filter(item => item !== amenity);  // Remove if already selected
      } else {
        return [...prevState, amenity];  // Add to selected
      }
    });
  };

  return (
    <div className="filter-container">
      <button className="filter-button" onClick={toggleDropdown}>
        <TuneIcon />
      </button>
      {isDropdownOpen && (
        <div className="dropdown-menu">
            
          {amenities.map((amenity) => (
            <p
              key={amenity}
              className={`dropdown-item ${selectedAmenities.includes(amenity) ? 'selected' : ''}`}
              onClick={() => toggleAmenity(amenity)}
            >
              {amenity}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterButtons;
