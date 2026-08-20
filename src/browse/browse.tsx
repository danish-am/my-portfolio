import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import blueImage from '../images/blue.png';
import greyImage from '../images/grey.png';
import './browse.css';

const Browse: React.FC = () => {
  const navigate = useNavigate();

  // Updated names and added safe URL slugs
  const profiles = [
    {
      name: "Recruiter",
      urlSlug: "recruiter",
      image: blueImage,
      backgroundGif:
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif"
    },
    {
      name: "Cloud/DevOps Engineer",
      urlSlug: "developer",
      image: greyImage,
      backgroundGif:
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif"
    }
  ];

  const handleProfileClick = (profile: { name: string; urlSlug: string; image: string; backgroundGif: string }) => {
    navigate(`/profile/${profile.urlSlug}`, {
      state: { profileImage: profile.image, backgroundGif: profile.backgroundGif }
    });
  };

  return (
    <div className="browse-container">
      <p className="who-is-watching">Who's Watching?</p>
      <div className="profiles">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            image={profile.image}
            onClick={() => handleProfileClick(profile as any)}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;