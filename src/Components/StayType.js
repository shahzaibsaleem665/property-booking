import React, { useState, useEffect } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from '@mui/material';

function StayType({ selectedStayType, onStayTypeChange }) {
  const [isOpen, setIsOpen] = useState(false); // State to track dropdown visibility
  const [selectedValue, setSelectedValue] = useState(""); // State for the selected value

  useEffect(() => {
    setSelectedValue(selectedStayType); // Sync selectedStayType prop with state
  }, [selectedStayType]);

  const handleInputClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (value) => {
    setSelectedValue(value);
    onStayTypeChange(value); // Pass selected value to parent component (Header)
    setIsOpen(false); // Close dropdown after selection
  };

  const handleClear = (event) => {
    event.stopPropagation(); // Prevent input click handler
    setSelectedValue("");
    setIsOpen(false); // Optionally close the dropdown
    onStayTypeChange(""); // Reset parent state to empty
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.querySelector('.stayType__dropdown');
      const input = document.querySelector('.stayType__input');
      if (
        dropdown && !dropdown.contains(event.target) &&
        input && !input.contains(event.target)
      ) {
        setIsOpen(false);
        setSelectedValue("");
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="stayType">
      <div className="stayType__inputContainer">
        <input
          type="text"
          value={selectedValue}
          placeholder="Select stay type"
          readOnly
          onClick={handleInputClick}
          className="stayType__input"
        />
        {selectedValue && (
          <IconButton className="stayType__clearIcon">
            <ClearIcon onClick={handleClear} />
          </IconButton>
        )}
      </div>
      {isOpen && (
        <div className="stayType__dropdown">
          <div onClick={() => handleSelect("Vocational Search")} className="stayType__item">
            Vocational Search
          </div>
          <div onClick={() => handleSelect("Lease / Purchase")} className="stayType__item">
            Lease / Purchase
          </div>
        </div>
      )}
    </div>
  );
}

export default StayType;
