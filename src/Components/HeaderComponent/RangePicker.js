import React, { useState, useEffect } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from '@mui/material';

function RangePicker() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short' }).format(date);
  };

  const togglePicker = () => {
    setShowPicker((prev) => !prev);
  };

  const closePicker = () => {
    setShowPicker(false);
  };

  const clearDates = () => {
    setStartDate(null);
    setEndDate(null);
    closePicker();
  };

  // Handle outside clicks to close the picker without resetting the inputs
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close picker when clicking outside of input or picker
      const pickerContainer = document.querySelector('.picker__container');
      const inputContainer = document.querySelector('.range__picker');
      if (
        pickerContainer && !pickerContainer.contains(event.target) &&
        inputContainer && !inputContainer.contains(event.target)
      ) {
        closePicker();
      }
    };

    // Add event listener for clicks outside
    document.addEventListener('click', handleClickOutside);

    // Clean up event listener
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []); // Empty dependency array means this effect runs only once

  return (
    <div className="range__picker">
      <div className="range__pickerStart" onClick={togglePicker}>
        <input
          type="text"
          className="start__input"
          readOnly
          value={startDate ? `${formatDate(startDate)}` : ''}
          onClick={(e) => { e.stopPropagation(); togglePicker(); }}
          placeholder="Start Date"
        />
        {startDate && endDate && (
          <IconButton className="clear-icon">
          <ClearIcon  onClick={clearDates} />
          </IconButton>
        )}
      </div>

      <div className="ranger__pickerEnd" onClick={togglePicker}>
        <input
          type="text"
          className="end__input"
          readOnly
          value={endDate ? `${formatDate(endDate)}` : ''}
          onClick={(e) => { e.stopPropagation(); togglePicker(); }}
          placeholder="End Date"
        />
        

        {startDate && endDate && (
          <IconButton className="clear-icon">
          <ClearIcon onClick={clearDates} />
          </IconButton>
        )}
      </div>

      {showPicker && (
        <div className="picker__container">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            onChange={handleSelect}
            rangeColors={["#FFAC1C"]}
          />
          
        </div>
      )}
    </div>
  );
}

export default RangePicker;
