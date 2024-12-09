import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import PeopleIcon from '@mui/icons-material/People';

function Guest() {
  const [number, setNumber] = useState(2);

  const increment = () => {
    if (number < 16) {
      setNumber(number + 1);
    }
  };

  const decrement = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  // Function to focus the input when it's clicked
  const handleInputClick = (e) => {
    e.target.focus();
  };

  return (
    <div className='guest'>
      <div className="guest__input">
        <RemoveIcon
          className="guest__icon left"
          onClick={(e) => {
            decrement();
            handleInputClick(e); // Ensure input is focused when clicking the icon
          }}
          style={{ cursor: number > 1 ? 'pointer' : 'not-allowed', opacity: number > 1 ? 1 : 0.5 }}
        />
        
        <input
          type="number"
          readOnly
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          className="guest__inputField"
          onClick={handleInputClick} // Focus input when it's clicked directly
          
        />
        <AddIcon
          className="guest__icon right"
          onClick={(e) => {
            increment();
            handleInputClick(e); // Ensure input is focused when clicking the icon
          }}
          style={{ cursor: number < 16 ? 'pointer' : 'not-allowed', opacity: number < 16 ? 1 : 0.5 }}
        />

      </div>
    </div>
  );
}

export default Guest;
