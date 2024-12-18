import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-date-range';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from '@mui/material';

function MoveinDate() {
  const [selectedDate, setSelectedDate] = useState(null); // Default to no date selected
  const [showPicker, setShowPicker] = useState(false);



  const today = new Date();
  const minDate = today;
  const maxDate = new Date(today.getFullYear(), today.getMonth() + 2, today.getDate());

  const handleSelect = (date) => {
    setSelectedDate(date); // Set selected date
    setShowPicker(false); // Close picker after selection
  };

  const togglePicker = () => {
    setShowPicker((prev) => !prev);
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short' }).format(date);
  };

  const clearDates = () => {
    setSelectedDate(null);
    setShowPicker(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside the picker container
      const pickerContainer = document.querySelector('.picker__container');
      if (pickerContainer && !pickerContainer.contains(event.target)) {
        setShowPicker(false);
      }
    };

    // Add event listener for clicks outside
    document.addEventListener('click', handleClickOutside);

    // Clean up event listener
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="moveInDate">
      <div className="date__picker">
        <input
          type="text"
          className="date__input"
          readOnly
          value={selectedDate ? `${formatDate(selectedDate)}` : ''}
          onClick={(e) => {
            e.stopPropagation(); // Prevent bubbling to document click
            togglePicker();
          }}
          placeholder="Move In Date"
        />
        {selectedDate && (
          <IconButton className="clear-icon" onClick={clearDates}>
            <ClearIcon />
          </IconButton>
        )}
        {showPicker && (
          <div className="picker__container">
            <Calendar
              date={selectedDate} // Display the selected date
              onChange={handleSelect} // Handle date selection
              showDateDisplay={false}
              minDate={minDate}
              maxDate = {maxDate}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default MoveinDate;
