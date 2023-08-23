import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file
import imagen from './logo-laliga.jpg';

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SpoilerFreeFootball</h1>
        <p>Bienvenido a SpoilerFreeFootball - ¡Disfruta del fútbol sin spoilers!</p>
      </header>
      <main className="App-main">
        <h2>Ligas de Fútbol</h2>
        <div className="league-list">
          <Link to="/liga-espanola" className="league-link">
            <div className="league-item">
              <img src={imagen} alt="La Liga" className="league-thumbnail" />
              <p>Liga Española</p>
            </div>
          </Link>
          {/* Add more league links here */}
        </div>
      </main>
      <footer className="App-footer">
        <p>© {new Date().getFullYear()} SpoilerFreeFootball</p>
      </footer>
    </div>
  );
}

export default HomePage;