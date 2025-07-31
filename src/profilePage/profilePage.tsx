
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Navbar from '../components/NavBar';
import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import ContinueWatching from './ContinueWatching';
import './ProfilePage.css';

type ProfileType = 'recruiter' | 'developer';

const ProfilePage: React.FC = () => {
  const location = useLocation();
  const backgroundGif =
    location.state?.backgroundGif ||
    "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif";
  const { profileName } = useParams<{ profileName: string }>();

  const profile = ['recruiter', 'developer'].includes(profileName!)
    ? (profileName as ProfileType)
    : 'recruiter';

  return (
    <>
      <Navbar />
      <div className="profile-page">
        <ProfileBanner backgroundGif={backgroundGif} />
      </div>
      <TopPicksRow profile={profile} />
      <ContinueWatching profile={profile} />
    </>
  );
};

export default ProfilePage;
