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

  /* 
  ========================================================================
  TODO: WHEN RESUME IS UPLOADED TO S3, UNCOMMENT THIS BLOCK 
  AND DELETE THE `handlePlayClick` FUNCTION BELOW IT.
  
  const resumeLink = "https://danish-resume-files.s3.us-east-2.amazonaws.com/Danish_DevOpsEngieer.docx"; //
  
  const handlePlayClick = () => {
    window.open(resumeLink, "_blank");
  };
  ========================================================================
  */

  // Currently pointing "Resume" to LinkedIn until the S3 resume is ready
  const handlePlayClick = () => {
    window.open(linkedinLink, "_blank");
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
          Danish M - Cloud Platform Engineer | AWS & Azure | DevOps | AIOps & MLOps
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