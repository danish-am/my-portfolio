import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import ContinueWatching from './ContinueWatching';
import './ProfilePage.css';

type ProfileType = 'recruiter' | 'developer';

const ProfilePage: React.FC = () => {
  const location = useLocation();
  const backgroundGif =
    location.state?.backgroundGif ||
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif";
  const { profileName } = useParams<{ profileName: string }>();

  const decodedName = profileName ? decodeURIComponent(profileName) : 'recruiter';
  const isRecruiter = decodedName.toLowerCase().includes('recruiter');
  const profile: ProfileType = isRecruiter ? 'recruiter' : 'developer';
  const displayName = isRecruiter ? 'Recruiter' : 'Cloud/DevOps Engineer';

  return (
    <>
      <div className="profile-page">
        <ProfileBanner backgroundGif={backgroundGif} />
      </div>
      <TopPicksRow profile={profile} customTitle={`Today's Top Picks for ${displayName}`} />
      <ContinueWatching profile={profile} customTitle={`Continue Watching for ${displayName}`} />
    </>
  );
};

export default ProfilePage;