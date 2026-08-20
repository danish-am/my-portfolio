import React from 'react';
import './ContactMe.css';
import profilePic from '../images/danish.jpeg'; // Replace with your picture
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin } from 'react-icons/fa';

const ContactMe: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <img src={profilePic} alt="Danish Ahmed Mohammed" className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">Danish Ahmed Mohammed</h3>
          <p className="badge-title">DevOps Engineer | Cloud Engineer | SRE</p>
          <p className="badge-description">
            With 5+ years of experience in AWS, Azure, Kubernetes, Docker, Terraform,
            and CI/CD pipelines. Skilled in automation, cloud security, and 
            infrastructure scaling.
          </p>
          <p className="badge-company">Toronto, Canada</p>
          <a
            href="https://www.linkedin.com/in/danish-am/"
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
        </div>
      </div>

      <div className="contact-header">
        <p>I'm always up for a chat or a coffee! Feel free to reach out.</p>
      </div>

      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:danish.ahmedm7@gmail.com" className="contact-link">
            danish.ahmedm7@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href="tel: +1 (437) 662-0448" className="contact-link">
             +1 (437) 662-0448
          </a>
        </div>
        <div className="contact-fun">
          <p>Or catch up over a coffee ☕</p>
          <FaCoffee className="coffee-icon" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
