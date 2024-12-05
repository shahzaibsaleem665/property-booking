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



const FilterButtons = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [leaseType, setLeaseType] = useState(null);
  const [priceRange, setPriceRange] = useState([100,2000]);


  const amenities = [
    { name: 'Wi-Fi', icon: <WifiIcon /> },
    { name: 'Gas', icon: <AcUnitIcon /> },
    { name: 'Balcony', icon: <TvIcon /> },
    { name: 'Pool', icon: <PoolIcon /> },
    { name: 'Gym', icon: <FitnessCenterIcon /> },
    { name: 'Air Conditioning', icon: <AcUnitIcon /> },
    { name: 'Heating', icon: <LocalLaundryServiceIcon /> },
    { name: 'Kitchen', icon: <KitchenIcon /> },
    { name: 'Washer/Dryer', icon: <LocalLaundryServiceIcon /> },
    { name: 'Parking', icon: <DirectionsCarIcon /> },
    { name: 'Pet-friendly', icon: <MonetizationOnIcon /> },
    { name: 'Work Space', icon: <DeskIcon /> },
    { name: 'Fire Extinguisher', icon: <FireExtinguisherIcon /> },
    { name: 'First Aid', icon: <MedicalServicesIcon /> },
    { name: 'Smoking Areas', icon: <SmokingRoomsIcon /> },
    { name: 'Pool', icon: <PoolIcon /> },
  ];

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
  <h4>Stay Type</h4>
  <div className="lease__typeText">
    <label className="dropdown-item">
      <input
        type="checkbox"
        checked={leaseType === 'short term'}
        onChange={() => selectLeaseType('short term')}
         className='dropdown__itemChecbox'
      />
      Short Term
    </label>
    <label className="dropdown-item">
      <input
        type="checkbox"
        checked={leaseType === 'long term'}
        onChange={() => selectLeaseType('long term')}
        className='dropdown__itemChecbox'
      />
      Long Term
    </label>
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
                sx={{ width: '90%' }}
              />
              <div className="price-range-labels">
                <span>Min: ${priceRange[0]}</span>
                <span>Max: ${priceRange[1]}</span>
              </div>
            </div>
        </div>

          {/* Filter types */}
          <div className='filter__amenities'>
            <h4>Amenities</h4>
          <Amenities
            amenities={amenities}         
            selectedAmenities={selectedAmenities} 
            toggleAmenity={toggleAmenity}  
          />
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterButtons;
