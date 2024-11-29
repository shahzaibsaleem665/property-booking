import React, { useState, useEffect } from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import Slider from '@mui/material/Slider';

const FilterButtons = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [leaseType, setLeaseType] = useState(null);
  const [priceRange, setPriceRange] = useState([100,2000]);


  const amenities = ['Wi-Fi', 'Gas', 'Balcony', 'Pool', 'Gym', 'Air Conditioning', 'Heating', 'Kitchen', 'Washer/Dryer', 'Parking', 'Pet-friendly'];

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const toggleAmenity = (amenity) => {
    setSelectedAmenities((prevState) =>
      prevState.includes(amenity) ? prevState.filter((item) => item !== amenity) : [...prevState, amenity]
    );
  };

  const selectLeaseType = (type) => {
    setLeaseType((prev) => (prev === type ? null : type)); // Deselect if clicked again
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.filter-container')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div className="filter-container">
      <button className="filter-button" onClick={toggleDropdown}>
        <TuneIcon />
      </button>
      {isDropdownOpen && (
        <div className="dropdown-menu">
            {/* Lease Types */}
          <div className="lease__type">
            <h4>Lease Type</h4>
            <div className="lease__typeText">
              <p
                className={`dropdown-item ${leaseType === 'short term' ? 'selected' : ''}`}
                onClick={() => selectLeaseType('short term')}
              >
                Short Term
              </p>
              <p
                className={`dropdown-item ${leaseType === 'long term' ? 'selected' : ''}`}
                onClick={() => selectLeaseType('long term')}
              >
                Long Term
              </p>
            </div>
          </div>
        {/* Price Range Bar */}
        <div className="price__range">
            <h4>Price Range</h4>
            <div className="price-range-slider">
              <Slider
                value={priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `$${value}`}
                min={100}
                max={2000}
                step={50}
                sx={{ width: 250 }}
              />
              <div className="price-range-labels">
                <span>Min: ${priceRange[0]}</span>
                <span>Max: ${priceRange[1]}</span>
              </div>
            </div>
        </div>

          {/* Filter types */}
          <div className="filter__types">
            
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
        </div>
      )}
    </div>
  );
};

export default FilterButtons;
