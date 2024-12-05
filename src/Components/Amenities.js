import React from 'react';

const Amenities = ({ amenities, selectedAmenities, toggleAmenity }) => {
  return (
    <div className="filter__types">
      
        {amenities.map(({ name, icon }) => (
        <p
          key={name}
          className={`dropdown-item ${selectedAmenities.includes(name) ? 'selected' : ''}`}
          onClick={() => toggleAmenity(name)} 
        >
          {icon} {/* Display the icon */}
          {name} {/* Display the amenity name */}
        </p>
      ))}
    </div>
  );
};

export default Amenities;
