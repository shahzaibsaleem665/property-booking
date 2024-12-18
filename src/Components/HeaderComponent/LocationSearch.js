import React, { useState } from 'react';
import Script from 'react-load-script';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const LocationSearch = ({ onSuburbChange }) => {
  const [address, setAddress] = useState('');
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [inputClicked, setInputClicked] = useState(false);

  // Handle script load event
  const handleScriptLoad = () => {
    setIsScriptLoaded(true);
    console.log('Google Maps Script loaded successfully');
  };

  // Handle script error event
  const handleScriptError = () => {
    console.error('Error loading Google Maps Script');
  };

  // Handle input change
  const handleInputChange = (newAddress) => {
    setAddress(newAddress);
    if (!inputClicked) {
      setInputClicked(true); // Set to true when the input is clicked for the first time
    }
  };

  // Search options - restricting the search to Australia
  const searchOptions = {
    componentRestrictions: { country: ['AU'] },
  };

  // Handle address selection
  const handleSelect = async (selectedAddress) => {
    try {
      setAddress(selectedAddress);
      setInputClicked(false); // Reset input clicked state after selecting an address
      const results = await geocodeByAddress(selectedAddress);

      // Extract the address and city (removing country and street)
      const addressComponents = results[0].address_components;
      let city = '';
      let state = '';

      addressComponents.forEach(component => {
        if (component.types.includes('locality')) {
          city = component.long_name; // Get city/suburb name
        }
        if (component.types.includes('administrative_area_level_1')) {
          state = component.long_name; // Get state abbreviation (e.g., VIC, NSW)
        }
      });

      // Combine city and state (city, state)
      if (city && state) {
        setAddress(`${city}, ${state}`); // Show city and state in the input field
        onSuburbChange(city);
      } else {
        setAddress(''); // Reset if city or state is not found
        onSuburbChange('');
      }

      const latLng = await getLatLng(results[0]);
      console.log('Selected Address:', selectedAddress);
      console.log('Coordinates:', latLng);
    } catch (error) {
      console.error('Error:', error);
    }
  };



  return (
    <div>
      <Script
        async
        defer
        url={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCCK5h25x6R8eFUMyzL79eLSGRcFnyVTUM&libraries=places`}
        onLoad={handleScriptLoad}
        onError={handleScriptError}
      />

      {/* Only show PlacesAutocomplete when the script has loaded */}
      {isScriptLoaded && (
        <PlacesAutocomplete
          value={address}
          onChange={handleInputChange}
          onSelect={handleSelect}
          searchOptions={searchOptions}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div className='search__section'>
              <input
                {...getInputProps({
                  placeholder: 'Search Property',
                  onFocus: () => {
                    if (!inputClicked) {
                      setInputClicked(true); // Trigger suggestions when the input is focused
                    }
                  },
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {inputClicked && suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';

                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        onClick: () => handleSelect(suggestion.description),
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      )}
    </div>
  );
};

export default LocationSearch;
