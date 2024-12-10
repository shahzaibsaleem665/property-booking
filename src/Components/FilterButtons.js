import React, { useState, useEffect } from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import Slider from '@mui/material/Slider';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WifiIcon from '@mui/icons-material/Wifi';
import TvIcon from '@mui/icons-material/Tv';
import KitchenIcon from '@mui/icons-material/Kitchen';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DeskIcon from '@mui/icons-material/Desk';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PoolIcon from '@mui/icons-material/Pool';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FireExtinguisherIcon from '@mui/icons-material/FireExtinguisher';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';

import Amenities from './Amenities';

const FilterButtons = ({ onApplyFilters, stayType}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [priceRange, setPriceRange] = useState([100, 2000]);


  const amenities = [
    { name: 'Wi-Fi', icon: <WifiIcon /> },
    { name: 'Gas', icon: <AcUnitIcon /> },
    { name: 'Pool', icon: <PoolIcon /> },
    { name: 'Gym', icon: <FitnessCenterIcon /> },
    { name: 'Balcony', icon: <TvIcon /> },
    { name: 'Air Conditioning', icon: <AcUnitIcon /> },
    { name: 'Heating', icon: <LocalLaundryServiceIcon /> },
    { name: 'Kitchen', icon: <KitchenIcon /> },
    { name: 'Washer/Dryer', icon: <LocalLaundryServiceIcon /> },
    { name: 'Parking', icon: <DirectionsCarIcon /> },
    { name: 'Pet-friendly', icon: <MonetizationOnIcon /> },
    { name: 'Work Space', icon: <DeskIcon /> },
    { name: 'First Aid', icon: <MedicalServicesIcon /> },
    { name: 'Fire Extinguisher', icon: <FireExtinguisherIcon /> },
    { name: 'Smoking Areas', icon: <SmokingRoomsIcon /> },
  ];

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const toggleAmenity = (amenity) => {
    setSelectedAmenities((prevState) =>
      prevState.includes(amenity) ? prevState.filter((item) => item !== amenity) : [...prevState, amenity]
    );
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  // Clear All
  const handleClearAll = () => {
    setSelectedAmenities([]);
    setPriceRange([100, 2000]);
  };

  // Apply Filters
  const handleApplyFilters = () => {
    const filters = {
      selectedAmenities,
      priceRange,
    };
    onApplyFilters(filters); // Pass the filters to parent for further processing
    // Need to change this above on ApplyFilters function when the data will be available
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
        <TuneIcon />Filters
      </button>
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <div className="dropdown__header">
            <h3>Filters</h3>
          </div>
          {/* Lease Types */}
          
          {/* Price Range Bar */}
          <div className="price__range">
            <h4>Price Range</h4>
            <p>Prices are shown in AUD</p>
            <div className="price-range-slider">
              <Slider
                value={priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `$${value}`}
                min={100}
                max={2000}
                step={50}
                sx={{ width: '90%' }}
              />
              <div className="price-range-labels">
                <span>Min: ${priceRange[0]}</span>
                <span>Max: ${priceRange[1]}</span>
              </div>
            </div>
          </div>{stayType === 'Purchase' &&  stayType === 'Lease'(
            <div className="bedroom__count">
              <h4>Bedrooms</h4>
              <div className="bedroom__countText">
                <p>Studio</p>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5+</p>
              </div>
            </div>
          )}

          {/* Filter types */}
          <div className="filter__amenities">
            <h4>Amenities</h4>
            <Amenities
              amenities={amenities}
              selectedAmenities={selectedAmenities}
              toggleAmenity={toggleAmenity}
            />
          </div>
          <div className="dropdown__footer">
            <button className="clear__button" onClick={handleClearAll}>
              Clear All
            </button>
            <button className="apply__button" onClick={handleApplyFilters}>
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterButtons;
