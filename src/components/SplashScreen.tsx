
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SplashScreen.css";
import netflixSound from "../netflix-sound.mp3";

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Create audio element
    const audio = new Audio(netflixSound);
    audio.volume = 1.0;

    // Try to play it (handles browser restrictions)
    audio.play().catch(() => {
      console.log("Autoplay blocked: will play on user interaction");
      document.addEventListener("click", () => {
        audio.play();
      }, { once: true });
    });

    // Redirect after 2.5s
    const timer = setTimeout(() => {
      navigate("/browse");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <svg
        className="splash-logo"
        viewBox="0 0 600 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path id="curve" d="M10,140 Q300,10 590,140" fill="transparent" />
        <text fontSize="42" fill="#E50914" fontWeight="bold">
          <textPath href="#curve" startOffset="50%" textAnchor="middle">
            DANISH M
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default SplashScreen;
