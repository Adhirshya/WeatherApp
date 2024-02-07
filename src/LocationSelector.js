import React, { useState } from 'react';

const LocationSelector = ({ onLocationChange }) => {
  const [city, setCity] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    onLocationChange(city);
  };

  return (
    <div>
      <label>Enter City:</label>
      <input type="text" value={city} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default LocationSelector;
