import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import './TopPicksRow.css';
import { FaPlay, FaPlus, FaChevronDown } from 'react-icons/fa';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface TopPicksRowProps {
  profile: ProfileType;
  customTitle?: string;
}

const cinematicImages = {
  skills: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
  experience: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop",
  projects: "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=600&auto=format&fit=crop",
  certifications: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=600&auto=format&fit=crop",
  contact: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=600&auto=format&fit=crop",
  permit: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
  music: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=600&auto=format&fit=crop"
};

const topPicksConfig = {
  recruiter: [
    { title: "Work Permit", imgSrc: cinematicImages.permit, route: "/work-permit", match: "99% Match", tags: ["Verified", "Canada"] },
    { title: "Skills", imgSrc: cinematicImages.skills, route: "/skills", match: "98% Match", tags: ["AWS", "Azure", "IaC"] },
    { title: "Experience", imgSrc: cinematicImages.experience, route: "/work-experience", match: "97% Match", tags: ["SRE", "Cloud", "5+ Yrs"] },
    { title: "Certifications", imgSrc: cinematicImages.certifications, route: "/certifications", match: "95% Match", tags: ["Kubernetes", "HashiCorp"] },
    { title: "Projects", imgSrc: cinematicImages.projects, route: "/projects", match: "92% Match", tags: ["CI/CD", "Terraform"] },
    { title: "Contact Me", imgSrc: cinematicImages.contact, route: "/contact-me", match: "100% Match", tags: ["Available", "Hire Now"] }
  ],
  developer: [
    { title: "Skills", imgSrc: cinematicImages.skills, route: "/skills", match: "98% Match", tags: ["AWS", "Azure", "IaC"] },
    { title: "Projects", imgSrc: cinematicImages.projects, route: "/projects", match: "92% Match", tags: ["CI/CD", "Terraform"] },
    { title: "Certifications", imgSrc: cinematicImages.certifications, route: "/certifications", match: "95% Match", tags: ["Kubernetes", "HashiCorp"] },
    { title: "Experience", imgSrc: cinematicImages.experience, route: "/work-experience", match: "97% Match", tags: ["SRE", "Cloud", "5+ Yrs"] },
    { title: "Contact Me", imgSrc: cinematicImages.contact, route: "/contact-me", match: "100% Match", tags: ["Available", "Hire Now"] }
  ],
  stalker: [
    { title: "Contact Me", imgSrc: cinematicImages.contact, route: "/contact-me", match: "100% Match", tags: ["Available", "Hire Now"] },
    { title: "Projects", imgSrc: cinematicImages.projects, route: "/projects", match: "92% Match", tags: ["CI/CD", "Terraform"] },
    { title: "Experience", imgSrc: cinematicImages.experience, route: "/work-experience", match: "97% Match", tags: ["SRE", "Cloud", "5+ Yrs"] },
    { title: "Certifications", imgSrc: cinematicImages.certifications, route: "/certifications", match: "95% Match", tags: ["Kubernetes", "HashiCorp"] }
  ],
  adventure: [
    { title: "Music & Sports", imgSrc: cinematicImages.music, route: "/music-and-sports", match: "89% Match", tags: ["Hobbies", "Active"] },
    { title: "Projects", imgSrc: cinematicImages.projects, route: "/projects", match: "92% Match", tags: ["CI/CD", "Terraform"] },
    { title: "Contact Me", imgSrc: cinematicImages.contact, route: "/contact-me", match: "100% Match", tags: ["Available", "Hire Now"] },
    { title: "Certifications", imgSrc: cinematicImages.certifications, route: "/certifications", match: "95% Match", tags: ["Kubernetes", "HashiCorp"] }
  ]
};

const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile, customTitle }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile] || topPicksConfig.recruiter;

  return (
    <div className="top-picks-row">
      <h2 className="row-title">{customTitle || `Today's Top Picks for ${profile}`}</h2>
      <div className="card-row">
        {topPicks.map((pick, index) => (
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
            </div>
            
            <div className="card-details-static">
              <div className="card-metadata">
                <span className="match-score">{pick.match}</span>
                <span className="maturity-rating">TV-MA</span>
                <span className="season-info">2024</span>
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