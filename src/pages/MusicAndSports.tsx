import React from 'react';
import './MusicAndSports.css';

const favoriteGenres = ["Rock", "Classic Rock", "Hard Rock", "Pop"];
const favoriteArtists = [
  "Linkin Park",
  "Hans Zimmer",
  "Guns N' Roses"
];
const favoriteSports = ["⚽ Football", "🥊 UFC", "🏎️ Formula 1"];

const MusicAndSports: React.FC = () => {
  return (
    <div className="music-page">
      <div className="quote">
        <p>“Rock and Roll isn’t a genre, it’s a way of life.” 🎸</p>
      </div>

      {/* Music Section */}
      <div className="genre-section">
        <h3>🎵 Explore by Genre</h3>
        <div className="genres">
          {favoriteGenres.map((genre, index) => (
            <div
              key={index}
              className="genre-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <p>{genre}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Artists Section */}
      <div className="artists-section">
        <h3>🎤 Favorite Artists</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: "1.2rem" }}>
          {favoriteArtists.map((artist, index) => (
            <li key={index}>🎧 {artist}</li>
          ))}
        </ul>
      </div>

      {/* Sports Section */}
      <div className="sports-section">
        <h3>🏆 Favorite Sports</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: "1.2rem" }}>
          {favoriteSports.map((sport, index) => (
            <li key={index}>{sport}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MusicAndSports;
