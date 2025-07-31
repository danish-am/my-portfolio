
import React from 'react';
import './Blogs.css';
import { FaMedium } from 'react-icons/fa';

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">✍️ My Blog Posts</h2>
      <p className="blogs-intro">Read my blogs and tutorials on Medium.</p>
      <div className="blogs-grid">
        <a
          href="https://medium.com/@ahmeddanish1729"
          target="_blank"
          rel="noopener noreferrer"
          className="blog-card"
        >
          <div className="blog-icon">
            <FaMedium />
          </div>
          <div className="blog-info">
            <h3 className="blog-title">Visit My Medium Profile</h3>
            <p className="blog-description">
              Explore all my DevOps, Cloud, and SRE-related blog posts in one place.
            </p>
            <span className="blog-platform">Medium</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Blogs;
