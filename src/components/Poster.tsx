import React from 'react';
import './Poster.css';

export interface PosterTheme {
  from: string;
  to: string;
}

interface PosterProps {
  title: string;
  icon: React.ReactNode;
  theme: PosterTheme;
  top10?: boolean;
}

// Netflix-style title art built from CSS, so cards need no image downloads
const Poster: React.FC<PosterProps> = ({ title, icon, theme, top10 }) => {
  return (
    <div
      className="poster"
      style={{ background: `linear-gradient(135deg, ${theme.from} 0%, ${theme.to} 100%)` }}
      role="img"
      aria-label={title}
    >
      <div className="poster-glow" />
      <div className="poster-icon">{icon}</div>
      <span className="poster-n">N</span>
      {top10 && (
        <div className="top10-badge" aria-label="Top 10">
          <span className="top10-top">TOP</span>
          <span className="top10-num">10</span>
        </div>
      )}
      <div className="poster-shade" />
      <h3 className="poster-title">{title}</h3>
    </div>
  );
};

export default Poster;
