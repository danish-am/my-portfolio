import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import Poster from '../components/Poster';
import { ProfileType, topPicksConfig } from './cardCatalog';
import './TopPicksRow.css';

interface TopPicksRowProps {
  profile: ProfileType;
  customTitle?: string;
}

const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile, customTitle }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile] || topPicksConfig.recruiter;

  return (
    <div className="top-picks-row">
      <h2 className="row-title">{customTitle || `Today's Top Picks for ${profile}`}</h2>
      <div className="card-row">
        {topPicks.map((pick, index) => (
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

export default React.memo(TopPicksRow);
