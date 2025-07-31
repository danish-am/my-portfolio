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
          {/* Curved DANISH text (Netflix style) */}
          <Link to="/" className="navbar-logo-svg">
            <svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
              <path
                id="curve"
                d="M20,80 Q150,10 280,80"
                fill="transparent"
              />
              <text
                fontSize="34"
                fill="#E50914"
                fontWeight="bold"
                letterSpacing="3"
              >
                <textPath href="#curve" startOffset="50%" textAnchor="middle">
                  DANISH
                </textPath>
              </text>
            </svg>
          </Link>

          {/* Navbar Links */}
          <ul className="navbar-links">
            <li>
              <Link to="/browse">Home</Link>
            </li>
            <li>
              <Link to="/work-experience">Professional</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact-me">Hire Me</Link>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/danish-am/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/danish-am"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-right">
          <div
            className="hamburger"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <img
            src={profileImage}
            alt="Profile"
            className="profile-icon"
            onClick={() => navigate('/browse')}
          />
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`sidebar-overlay ${isSidebarOpen ? 'open' : ''}`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-logo">DANISH</div>
        <ul>
          <li>
            <Link to="/browse" onClick={() => setIsSidebarOpen(false)}>
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/work-experience" onClick={() => setIsSidebarOpen(false)}>
              <FaBriefcase /> Professional
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={() => setIsSidebarOpen(false)}>
              <FaTools /> Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setIsSidebarOpen(false)}>
              <FaProjectDiagram /> Projects
            </Link>
          </li>
          <li>
            <Link to="/contact-me" onClick={() => setIsSidebarOpen(false)}>
              <FaEnvelope /> Hire Me
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
