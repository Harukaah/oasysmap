import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const ChiangMaiMap: React.FC = () => {
  useEffect(() => {
    // Create the map
    const map = L.map('map').setView([18.7883, 98.9853], 13); // Chiang Mai's coordinates

    // Set up the tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add a marker at Chiang Mai's coordinates
    const marker = L.marker([18.7883, 98.9853]).addTo(map);

    // Add a popup to the marker
    marker.bindPopup('Chiang Mai, Thailand').openPopup();

    // Clean up the map on component unmount
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="map"
      style={{ height: '100vh', width: '100%' }} // Make sure the map takes the full screen
    />
  );
};

export default ChiangMaiMap;
