import React, { useState } from 'react';
import Script from 'react-load-script';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const LocationSearch = () => {
  const [address, setAddress] = useState('');
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);


  const handleScriptLoad = () => {
    setIsScriptLoaded(true);
    console.log('Google Maps Script loaded successfully');
  };

  const handleScriptError = () => {
    console.error('Error loading Google Maps Script');
  };

  const handleInputChange = (newAddress) => {
    setAddress(newAddress);
  };

  const searchOptions = {
    componentRestrictions: { country: ['AU'] }, // Set the default region to Australia (AU)
  };

  const handleSelect = async (selectedAddress) => {
    try {
      setAddress(selectedAddress);
      const results = await geocodeByAddress(selectedAddress);
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
        url={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCCK5h25x6R8eFUMyzL79eLSGRcFnyVTUM&libraries=places`}
        onLoad={handleScriptLoad}
        onError={handleScriptError}
      />
      
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
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,  onClick: () => handleSelect(suggestion.description)
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
