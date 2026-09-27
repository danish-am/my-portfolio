import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import Poster from '../components/Poster';
import { ProfileType, continueWatchingConfig } from './cardCatalog';
import './ContinueWatching.css';

interface ContinueWatchingProps {
  profile: ProfileType;
  customTitle?: string;
}

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile, customTitle }) => {
  const navigate = useNavigate();
  const continueWatching = continueWatchingConfig[profile] || continueWatchingConfig.recruiter;

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">{customTitle || `Continue Watching for ${profile}`}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <motion.div
            key={pick.title}
            className="cinematic-card"
            onClick={() => navigate(pick.route)}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="card-image-wrapper">
              <Poster title={pick.title} icon={pick.icon} theme={pick.theme} top10={pick.top10} />
              <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: `${pick.progress ?? 50}%` }}></div>
              </div>
            </div>

            <div className="card-details-static">
              <div className="card-metadata">
                <span className="match-score">{pick.match}</span>
                <span className="maturity-rating">{pick.label}</span>
              </div>

              <div className="card-tags">
                {pick.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}{i < pick.tags.length - 1 && <span className="dot">•</span>}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(ContinueWatching);
