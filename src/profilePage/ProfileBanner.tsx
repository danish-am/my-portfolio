import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';

// Props for background gif
interface ProfileBannerProps {
  backgroundGif?: string;
}

const ProfileBanner: React.FC<ProfileBannerProps> = ({ backgroundGif }) => {
  const linkedinLink = "https://www.linkedin.com/in/danish-am/";

  const resumeFile = 'Danish_Mohammed_Cloud_DevOps_Engineer_Resume.pdf';

  // Download the resume PDF stored in /public
  const handlePlayClick = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/${resumeFile}`;
    link.download = resumeFile;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
          Danish M - Cloud Platform Engineer | AWS & Azure | DevOps | SRE | AIOps & MLOps
        </h1>
        <p className="banner-description">
          Cloud Platform Engineer with 5+ years of experience building and running multi-account platforms on AWS and Azure. Hands-on with Kubernetes (EKS/AKS), Docker, Terraform, CloudFormation and CI/CD, with a focus on reliability, security and cost. Now bringing AIOps and MLOps practices to the platform: automated monitoring and incident response, and pipelines to deploy and operate ML models in production.
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