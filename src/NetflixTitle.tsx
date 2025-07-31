import React, { useEffect, useRef, useState } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';

const NetflixTitle = () => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      // Try to play audio
      audio.play().catch(() => {
        console.warn("Autoplay blocked. Using silent fallback.");

        // Play a short silent sound first (bypass autoplay block)
        const silentAudio = new Audio();
        silentAudio.muted = true;
        silentAudio.play().then(() => {
          // Unmute and play the real audio after the silent one starts
          audio.muted = false;
          audio.play().catch(() => {
            console.warn("Still blocked: skipping sound but continuing animation.");
          });
        });
      });
    }

    // Start animation immediately
    setAnimate(true);

    // Redirect after 4s
    const timer = setTimeout(() => {
      navigate('/browse');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="netflix-container">
      {/* Hidden audio */}
      <audio ref={audioRef} src={netflixSound} preload="auto" muted={false} />

      {/* Curved text */}
      <svg
        viewBox="0 0 600 200"
        className={`netflix-logo ${animate ? 'animate' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path id="curve" d="M50,150 Q300,50 550,150" fill="transparent" />
        <text fontSize="60" fill="#E50914" fontWeight="bold">
          <textPath href="#curve" startOffset="50%" textAnchor="middle">
            DANISH M
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default NetflixTitle;
