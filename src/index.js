import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './Routes.js'; // Import the renamed component
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes /> {/* Use AppRoutes */}
  </React.StrictMode>,
  document.getElementById('root')
);