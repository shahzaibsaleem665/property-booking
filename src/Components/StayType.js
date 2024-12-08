import React, { useEffect, useState } from 'react'

function StayType() {

    const [isOpen, setIsOpen] = useState(false); // State to track dropdown visibility
    const [selectedValue, setSelectedValue] = useState(""); // State for the selected value
  
    // Toggle the dropdown list
    const handleInputClick = () => {
      setIsOpen((prev) => !prev);
    };
  
    // Handle selection
    const handleSelect = (value) => {
      setSelectedValue(value);
      setIsOpen(false); // Close the dropdown after selection
    };
  

    
      useEffect(() => {
        const handleClickOutside = (event) => {
          // Close picker when clicking outside of input or picker
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
    
        // Add event listener for clicks outside
        document.addEventListener('click', handleClickOutside);
    
        // Clean up event listener
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, []); 

  return (
    <div className="stayType">
    <input
      type="text"
      value={selectedValue}
      placeholder="Select stay type"
      readOnly
      onClick={handleInputClick}
      className="stayType__input"
    />
    {isOpen && (
      <div  className="stayType__dropdown">
        <div onClick={() => handleSelect("Short Term")} className="stayType__item">
          Vocational Search
        </div>
        <div onClick={() => handleSelect("Long Term")} className="stayType__item">
          Lease / Purchase
        </div>
      </div>
    )}
  </div>
  )
}

export default StayType