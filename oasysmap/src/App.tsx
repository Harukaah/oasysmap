import React from 'react';
import ChiangMaiMap from './ChiangMaiMap'; // Import the map component



const App: React.FC = () => {
  return (
    <div>
      <h1>Chiang Mai Map</h1>
      <ChiangMaiMap /> {/* Render the map here */}
    </div>
  );
};

export default App;

