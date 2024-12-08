import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-date-range';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from '@mui/material';


function MoveinDate() {
  const [selectedDate, setSelectedDate] = useState(''); // Default to current date
  const [showPicker, setShowPicker] = useState(false);


  


  const handleSelect = (date) => {
    setSelectedDate(date); // Set selected date
    console.log(date); // Log the selected date (native Date object)
  };

  
  const togglePicker = () => {
    setShowPicker((prev) => !prev);
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short' }).format(date);
  };

  const closePicker = () => {
    setShowPicker(false);
  };

  const clearDates = () => {
   setSelectedDate(null);
    closePicker();
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close picker when clicking outside of input or picker
      const pickerContainer = document.querySelector('.picker__container');
      if (
        pickerContainer && !pickerContainer.contains(event.target)
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
  }, []);

  return (
    <div className='moveInDate' >
        <div className="date__picker" onClick={togglePicker} >
            <input type="text"
          className="date__input"
          readOnly
          value={selectedDate ? `${formatDate(selectedDate)}` : ''}
          onClick={(e) => { e.stopPropagation(); togglePicker(); }}
          placeholder="Move In Date" />
 {selectedDate &&(
          <IconButton className="clear-icon">
          <ClearIcon  onClick={clearDates} />
          </IconButton>
        )}

{showPicker && (
        <div className="picker__container">
          <Calendar
            date={selectedDate} // Display the selected date
            onChange={handleSelect} // Handle date selection
            range={{ startDate: selectedDate, endDate: selectedDate }} // Restrict range to single date
            showDateDisplay={false}
            rangeColors={["#FFAC1C"]}
          />
          
        </div>
      )}
   
    </div>
    </div>
  );
}

export default MoveinDate;
