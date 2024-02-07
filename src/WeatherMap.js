// WeatherMap.js

import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const WeatherMap = ({ coordinates }) => {
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    // Create a map centered around the default location
    const initialMap = L.map('map').setView([0, 0], 2);

    // Add the OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(initialMap);

    // Create a marker for the default location
    const initialMarker = L.marker([0, 0]).addTo(initialMap);

    setMap(initialMap);
    setMarker(initialMarker);

    // Clean up the map when the component is unmounted
    return () => {
      initialMap.remove();
    };
  }, []);

  // Update marker position when coordinates change
  useEffect(() => {
    if (map && marker && coordinates) {
      const [lat, lon] = coordinates;
      marker.setLatLng([lat, lon]);
      map.setView([lat, lon], 10);
    }
  }, [map, marker, coordinates]);

  return <div id="map" style={{ height: '400px' }} />;
};

export default WeatherMap;
