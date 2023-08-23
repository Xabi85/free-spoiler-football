import React, { useState } from 'react';
import './App.css';
import YouTube from 'react-youtube';
import imagen from './PARTIDO.JPEG';

function App() {
  const videoData = [
    {
      "id": "kJVz6LM6ayo",
      "teams": "Girona FC vs Getafe CF",
      "fechaPublicacion": "17 hours ago"
    },
    {
      "id": "fL7EEqCbc4g",
      "teams": "Real Sociedad vs RC Celta",
      "fechaPublicacion": "1 day ago"
    },
    {
      "id": "9vQiBKcFqNM",
      "teams": "Real Betis vs Atlético de Madrid",
      "fechaPublicacion": "17 hours ago"
    },
    {
      "id": "8y-8qG9-Z6s",
      "teams": "FC Barcelona vs Cádiz CF",
      "fechaPublicacion": "17 hours ago"
    },
    {
      "id": "BeHYIRbRj1I",
      "teams": "Valencia CF s UD Las Palmas",
      "fechaPublicacion": "2 days ago"
    },
    {
      "id": "EscNLxkzDgs",
      "teams": "Resumen de RCD Mallorca vs Villarreal CF",
      "fechaPublicacion": null
    },
    {
      "id": "4qy7bepGBbs",
      "teams": "UD Almería vs Real Madrid",
      "fechaPublicacion": "1 day ago"
    },
    {
      "id": "A01UmIDk-RM",
      "teams": "CA Osasuna vs Athletic Club",
      "fechaPublicacion": "1 day ago"
    },
    {
      "id": "OUby5jniDn0",
      "teams": "RCD Mallorca vs Villarreal CF",
      "fechaPublicacion": "2 days ago"
    },
    {
      "id": "xRYSaERNoYI",
      "teams": "Atlético de Madrid vs Granada CF",
      "fechaPublicacion": "6 days ago"
    },
    {
      "id": "IqI3NZQWHAc",
      "teams": "Cádiz CF vs Deportivo Alavés",
      "fechaPublicacion": "6 days ago"
    },
    {
      "id": "zdokSBzkTt8",
      "teams": "Getafe CF vs FC Barcelona",
      "fechaPublicacion": "7 days ago"
    },
    {
      "id": "aii_Cid_PUM",
      "teams": "Villarreal CF vs Real Betis",
      "fechaPublicacion": "7 days ago"
    },
    {
      "id": "IVlOLqYjpw4",
      "teams": "RC Celta vs CA Osasuna",
      "fechaPublicacion": "7 days ago"
    },
    {
      "id": "fgHJgQfe0Hs",
      "teams": "Athletic Club vs Real Madrid",
      "fechaPublicacion": "8 days ago"
    },
    {
      "id": "TkgpV2eYEz0",
      "teams": "Real Sociedad vs Girona FC",
      "fechaPublicacion": "8 days ago"
    },
    {
      "id": "sS3dN7EnKuQ",
      "teams": "UD Las Palmas vs RCD Mallorca",
      "fechaPublicacion": "8 days ago"
    },
    {
      "id": "CDuVLQdw3tI",
      "teams": "Sevilla FC vs Valencia CF",
      "fechaPublicacion": "9 days ago"
    },
    {
      "id": "9PK5v8Rlpn4",
      "teams": "UD Almería vs Rayo Vallecano",
      "fechaPublicacion": "9 days ago"
    }
  ];

  const thumbnailUrl = imagen;

  const getTeamLogos = (teams) => {
    const teamNames = teams.split(" vs ");
    const logos = teamNames.map((teamName) => {
      const formattedTeamName = teamName.replace(/\s+/g, '-'); // Reemplazar espacios con guiones bajos
      try {
        const escudo = require(`./escudos/${formattedTeamName}.png`);
        return escudo;
      } catch (error) {
        console.error(`No se pudo encontrar el escudo para ${teamName}`);
        return null;
      }
    });
    return logos;
  };

  const videos = videoData.map((video) => ({
    id: video.id,
    teams: video.teams,
    fecha: video.fechaPublicacion,
    
    thumbnail: thumbnailUrl,
    teamLogos: getTeamLogos(video.teams), // Obtén las imágenes de los escudos
  }));
  
  

  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = (index) => {
    setCurrentVideoIndex(index);
    setIsPlaying(true);
  };

  const handleCloseVideo = () => {
    setCurrentVideoIndex(null);
    setIsPlaying(false);
  };

  const playerOptions = {
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      fs: 1, // Habilitar el botón de pantalla completa
    },
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>SpoilerFreeFootball</h1>
        <p>Enlaces a partidos de fútbol sin spoilers</p>
      </header>
      <main className="App-main">
        <h2>Últimos Partidos Destacados</h2>
        <div className="video-grid">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`video-item ${
                currentVideoIndex === index ? 'active' : ''
              }`}
            >
              {currentVideoIndex === index ? (
                <div className={`video-player ${isPlaying ? 'fullscreen' : ''}`}>
                  <YouTube
                    videoId={video.id}
                    opts={playerOptions}
                    onEnd={handleCloseVideo}
                  />
                </div>
              ) : (
                <div className="video-preview" onClick={() => handlePlayClick(index)}>
                <div className="team-logos">
                  {video.teamLogos.map((logo, logoIndex) => (
                    <img
                      key={logoIndex}
                      src={logo}
                      alt={`Escudo del equipo ${logoIndex + 1}`}
                      className="team-logo"
                    />
                  ))}
                </div>
                <img
                  src={video.thumbnail}
                  alt={`Vista previa del video ${index + 1}`}
                  className="thumbnail"
                />
                <p className="team-names">{video.teams}</p>
                <p className="fecha-publicacion">{video.fecha}</p> {/* Agregar la fecha de publicación */}
              </div>
              )}
            </div>
          ))}
        </div>
      </main>
      <footer className="App-footer">
        <p>© {new Date().getFullYear()} SpoilerFreeFootball</p>
      </footer>
    </div>
  );
}

export default App;