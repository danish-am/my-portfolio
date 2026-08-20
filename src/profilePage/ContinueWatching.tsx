import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import './ContinueWatching.css';
import { FaPlay, FaPlus, FaChevronDown } from 'react-icons/fa';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface ContinueWatchingProps {
  profile: ProfileType;
  customTitle?: string;
}

const cinematicImages = {
  music: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=600&auto=format&fit=crop",
  blogs: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=600&auto=format&fit=crop",
  contact: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=600&auto=format&fit=crop",
  certifications: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=600&auto=format&fit=crop"
};

const continueWatchingConfig = {
  recruiter: [
    { title: "Music & Sports", imgSrc: cinematicImages.music, route: "/music-and-sports", match: "85% Match", tags: ["Hobbies", "Active"] },
    { title: "Blogs", imgSrc: cinematicImages.blogs, route: "/blogs", match: "90% Match", tags: ["Tech Writing", "Thought Leader"] },
    { title: "Contact Me", imgSrc: cinematicImages.contact, route: "/contact-me", match: "100% Match", tags: ["Available", "Hire Now"] }
  ],
  developer: [
    { title: "Music & Sports", imgSrc: cinematicImages.music, route: "/music-and-sports", match: "85% Match", tags: ["Hobbies", "Active"] },
    { title: "Blogs", imgSrc: cinematicImages.blogs, route: "/blogs", match: "90% Match", tags: ["Tech Writing", "Thought Leader"] },
    { title: "Certifications", imgSrc: cinematicImages.certifications, route: "/certifications", match: "95% Match", tags: ["Kubernetes", "HashiCorp"] },
    { title: "Contact Me", imgSrc: cinematicImages.contact, route: "/contact-me", match: "100% Match", tags: ["Available", "Hire Now"] }
  ],
  stalker: [
    { title: "Blogs", imgSrc: cinematicImages.blogs, route: "/blogs", match: "90% Match", tags: ["Tech Writing", "Thought Leader"] },
    { title: "Contact Me", imgSrc: cinematicImages.contact, route: "/contact-me", match: "100% Match", tags: ["Available", "Hire Now"] }
  ],
  adventure: [
    { title: "Music & Sports", imgSrc: cinematicImages.music, route: "/music-and-sports", match: "85% Match", tags: ["Hobbies", "Active"] },
    { title: "Certifications", imgSrc: cinematicImages.certifications, route: "/certifications", match: "95% Match", tags: ["Kubernetes", "HashiCorp"] },
    { title: "Contact Me", imgSrc: cinematicImages.contact, route: "/contact-me", match: "100% Match", tags: ["Available", "Hire Now"] }
  ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile, customTitle }) => {
  const navigate = useNavigate();
  const continueWatching = continueWatchingConfig[profile] || continueWatchingConfig.recruiter;

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">{customTitle || `Continue Watching for ${profile}`}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <motion.div 
            key={index} 
            className="cinematic-card"
            onClick={() => navigate(pick.route)}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="card-image-wrapper">
              <img 
                src={pick.imgSrc} 
                alt={pick.title} 
                className="pick-image" 
                loading="lazy" 
                decoding="async"
              />
              <div className="card-gradient"></div>
              <div className="title-fallback">{pick.title}</div>
              <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: `${60 + Math.random() * 30}%` }}></div>
              </div>
            </div>
            
            <div className="card-details-static">
              <div className="card-metadata">
                <span className="match-score">{pick.match}</span>
                <span className="maturity-rating">TV-MA</span>
                <span className="season-info">Part 1</span>
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