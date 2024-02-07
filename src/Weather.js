import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ apiKey, city }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );
        setWeather(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [city, apiKey]);

  if (!weather) {
    return <div>Loading...</div>;
  }

  const { main, weather: weatherDetails } = weather;

  return (
    <div>
      <h2>Weather in {city}</h2>
      <p>Temperature: {main.temp} K</p>
      <p>Weather: {weatherDetails[0].description}</p>
    </div>
  );
};

export default Weather;
