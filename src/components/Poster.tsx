import React, { useState } from 'react';
import './Poster.css';

export interface PosterTheme {
  from: string;
  to: string;
}

interface PosterProps {
  title: string;
  icon: React.ReactNode;
  theme: PosterTheme;
  image?: string;
  top10?: boolean;
}

// Netflix-style title art: the photo when it loads, drawn art as the fallback
const Poster: React.FC<PosterProps> = ({ title, icon, theme, image, top10 }) => {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = image && !imageFailed;

  return (
    <div
      className="poster"
      style={{ background: `linear-gradient(135deg, ${theme.from} 0%, ${theme.to} 100%)` }}
    >
      {showImage ? (
        <img
          src={image}
          alt={title}
          className="poster-image"
          loading="lazy"
          decoding="async"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <>
          <div className="poster-glow" />
          <div className="poster-icon">{icon}</div>
        </>
      )}
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
