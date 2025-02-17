// src/components/SplashScreen.js
import React from 'react';
import './SplashScreen.css'; // CSS for styling

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img src="/logoATB.png" alt="Logo ATB" className="logo" /> {/* Ensure the logo path is correct */}
      <h1>Reclamation Site</h1> {/* Project name */}
      <p>Chargement...</p>
    </div>
  );
};

export default SplashScreen;