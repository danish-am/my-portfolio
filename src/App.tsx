import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import ProfilePage from './profilePage/profilePage';
import Browse from './browse/browse';
import WorkPermit from './pages/WorkPermit';
import WorkExperience from './pages/WorkExperience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import Layout from './Layout';
import MusicAndSports from './pages/MusicAndSports'; // renamed component
import Blogs from './pages/Blogs';
import Certifications from './pages/Certifications';

const App: React.FC = () => {
  return (
    <Routes>
      {/* Splash screen ONLY */}
      <Route path="/" element={<SplashScreen />} />

      <Route path="/browse" element={<Browse />} />
      <Route path="/profile/:profileName" element={<Layout><ProfilePage /></Layout>} />
      <Route path="/work-permit" element={<Layout><WorkPermit /></Layout>} />
      <Route path="/work-experience" element={<Layout><WorkExperience /></Layout>} />
      <Route path="/skills" element={<Layout><Skills /></Layout>} />
      <Route path="/projects" element={<Layout><Projects /></Layout>} />
      <Route path="/contact-me" element={<Layout><ContactMe /></Layout>} />
      <Route path="/music-and-sports" element={<Layout><MusicAndSports /></Layout>} /> {/* updated */}
      <Route path="/blogs" element={<Layout><Blogs /></Layout>} />
      <Route path="/certifications" element={<Layout><Certifications /></Layout>} />
    </Routes>
  );
  
};

export default App;
