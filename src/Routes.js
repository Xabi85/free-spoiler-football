import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import App from './App'; // Import the component you created

function AppRoutes() { // Rename to AppRoutes
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/liga-espanola" element={<App />} />
        {/* Add more routes for other leagues */}
      </Routes>
    </Router>
  );
}

export default AppRoutes; // Export the renamed component