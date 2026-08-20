import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FaHome,
  FaBriefcase,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import './Navbar.css';
import blueImage from '../images/blue.png';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const profileImage = location.state?.profileImage || blueImage;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-left">
          {/* Netflix style text logo */}
          <Link to="/" className="navbar-logo-text">
            DANISH
          </Link>

          {/* Navbar Links */}
          <ul className="navbar-links">
            <li>
              <Link to="/browse" className={location.pathname === '/browse' || location.pathname.startsWith('/profile') ? 'active-nav-link' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/work-experience" className={location.pathname === '/work-experience' ? 'active-nav-link' : ''}>
                Professional
              </Link>
            </li>
            <li>
              <Link to="/skills" className={location.pathname === '/skills' ? 'active-nav-link' : ''}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" className={location.pathname === '/projects' ? 'active-nav-link' : ''}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact-me" className={location.pathname === '/contact-me' ? 'active-nav-link' : ''}>
                Hire Me
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-right">
          <div className="social-links-desktop">
            <a href="https://www.linkedin.com/in/danish-am/" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com/danish-am" target="_blank" rel="noopener noreferrer" title="GitHub Profile">
              <FaGithub size={20} />
            </a>
          </div>
          <div className="hamburger" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <div></div><div></div><div></div>
          </div>
          <img src={profileImage} alt="Profile" className="profile-icon" onClick={() => navigate('/browse')} />
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar-overlay ${isSidebarOpen ? 'open' : ''}`} onClick={() => setIsSidebarOpen(false)}></div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-logo">DANISH</div>
        <ul>
          <li><Link to="/browse" onClick={() => setIsSidebarOpen(false)}><FaHome /> Home</Link></li>
          <li><Link to="/work-experience" onClick={() => setIsSidebarOpen(false)}><FaBriefcase /> Professional</Link></li>
          <li><Link to="/skills" onClick={() => setIsSidebarOpen(false)}><FaTools /> Skills</Link></li>
          <li><Link to="/projects" onClick={() => setIsSidebarOpen(false)}><FaProjectDiagram /> Projects</Link></li>
          <li><Link to="/contact-me" onClick={() => setIsSidebarOpen(false)}><FaEnvelope /> Hire Me</Link></li>
          <li className="sidebar-socials">
            <a href="https://www.linkedin.com/in/danish-am/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
            <a href="https://github.com/danish-am" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;