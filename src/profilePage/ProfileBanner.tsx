
import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';

// Props for background gif
interface ProfileBannerProps {
  backgroundGif?: string;
}

const ProfileBanner: React.FC<ProfileBannerProps> = ({ backgroundGif }) => {
  // Hardcoded links
  const resumeLink = "https://danish-resume-files.s3.us-east-2.amazonaws.com/Danish_DevOpsEngieer.docx"; // <-- replace with actual resume URL
  const linkedinLink = "https://www.linkedin.com/in/danish-am/";

  const handlePlayClick = () => {
    window.open(resumeLink, "_blank");
  };

  const handleLinkedinClick = () => {
    window.open(linkedinLink, "_blank");
  };

  return (
    <div
      className="profile-banner"
      style={{
        backgroundImage: `url(${backgroundGif || ''})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner-content">
        <h1 className="banner-headline" id="headline">
          Danish M - DevOps Engineer | Multi-Cloud -AWS & Azure | SRE
        </h1>
        <p className="banner-description">
          Highly skilled and results-driven DevOps Engineer with 5+ years of experience
          in AWS, Azure, Kubernetes, Docker, Terraform, CI/CD, and Site Reliability Engineering.
          Adept at building scalable infrastructure, automating deployments, and optimizing
          cloud costs while ensuring high availability and security.
        </p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="Linkedin" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
