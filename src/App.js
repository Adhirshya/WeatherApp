// App.js

import React, { useState } from 'react';
import Weather from './Weather';
import LocationSelector from './LocationSelector';
import WeatherMap from './WeatherMap';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [coordinates, setCoordinates] = useState(null);

  const handleLocationChange = (selectedCity) => {
    setCity(selectedCity);
  };

  const handleWeatherUpdate = (newCoordinates) => {
    setCoordinates(newCoordinates);
  };

  return (
    <div className="container">
      <h1>Real-Time Weather App</h1>
      <LocationSelector onLocationChange={handleLocationChange} />
      <div className="weather-container">
        <Weather
          apiKey="38e8aa97d24dd4ee909a9cb30db43448"
          city={city}
          onWeatherUpdate={handleWeatherUpdate}
        />
        <WeatherMap coordinates={coordinates} />
      </div>
    </div>
  );
};

export default App;
