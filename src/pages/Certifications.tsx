import React from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity } from 'react-icons/fa';
import {
  SiCoursera,
  SiMicrosoft,
  SiAmazonwebservices,
  SiRedhat,
  SiGithub,
  SiGoogle,
  SiHashicorp
} from 'react-icons/si';

const certifications = [
  {
    title: "AWS Certified Solutions Architect Associate",
    issuer: "Amazon Web Services (AWS)",
    icon: <SiAmazonwebservices />,
    link: "https://www.credly.com/badges/83968696-906c-4f4a-be7e-2b73161fdb99/public_url",
    issuedDate: "Issued Dec 2024 · Expires Dec 2027"
  },
  {
    title: "Microsoft Certified: DevOps Engineer Expert",
    issuer: "Microsoft",
    icon: <SiMicrosoft />,
    link: "https://learn.microsoft.com/en-us/users/danishmohammed-3441/credentials/e25a0e52c22274fd",
    issuedDate: "Issued Mar 2025 · Expires Mar 2026"
  },
  {
    title: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft",
    icon: <SiMicrosoft />,
    link: "https://learn.microsoft.com/en-ca/users/danishmohammed-3441/credentials/364c433cbea0b4d6",
    issuedDate: "Issued Feb 2025 · Expires Mar 2026"
  },
  {
    title: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    icon: <SiHashicorp />,
    link: "https://www.credly.com/badges/b318d967-78cc-40b6-9899-a9c1d0ad47fb/public_url",
    issuedDate: "Issued Apr 2025 · Expires Apr 2027"
  },
  {
    title: "Red Hat Linux Certified System Administrator (RHCSA)",
    issuer: "Red Hat",
    icon: <SiRedhat />,
    link: "https://www.credly.com/badges/6aa4c85f-4ce0-4a24-8bd3-d3a1d393eff6/public_url",
    issuedDate: "Issued Apr 2023"
  },
  {
    title: "GitHub Foundations",
    issuer: "GitHub",
    icon: <SiGithub />,
    link: "https://www.credly.com/badges/f74c524d-6dd8-4d51-bcc8-6e8b011b8a7e/public_url",
    issuedDate: ""
  },
  {
    title: "Google IT Automation with Python",
    issuer: "Google",
    icon: <SiGoogle />,
    link: "https://www.credly.com/badges/0c5c8018-1221-42f0-8326-146a6d1504e4/public_url",
    issuedDate: "Issued Jun 2022"
  },
  {
    title: "Foundations of Project Management",
    issuer: "Google (via Coursera)",
    icon: <SiCoursera />,
    link: "https://www.coursera.org/account/accomplishments/verify/XQDPZZSU54DE",
    issuedDate: "Issued May 2022"
  }
];

const Certifications: React.FC = () => {
  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a
            href={cert.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="certification-card"
          >
            <div className="certification-content">
              <div className="certification-icon">{cert.icon || <FaUniversity />}</div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.issuedDate && (
                <span className="issued-date">{cert.issuedDate}</span>
              )}
            </div>
            <div className="certification-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
