import React from 'react';
import './Skills.css';
import { FaAws, FaDocker, FaJenkins, FaPython, FaGithub, FaMicrosoft } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiPrometheus, SiAnsible } from 'react-icons/si';

const skills = [
  {
    name: "Amazon Web Services (AWS)",
    icon: <FaAws />,
    description: "EC2, S3, RDS, Lambda, ECS, CloudFormation, VPC, IAM"
  },
  {
    name: "Microsoft Azure",
    icon: <FaMicrosoft />,
    description: "VMs, AKS, Blob Storage, Key Vault, Azure DevOps, Azure Monitor"
  },
  {
    name: "Terraform",
    icon: <SiTerraform />,
    description: "Infrastructure as Code (IaC) for AWS & Azure"
  },
  {
    name: "Kubernetes (EKS/AKS)",
    icon: <SiKubernetes />,
    description: "Container orchestration with Helm"
  },
  {
    name: "Docker",
    icon: <FaDocker />,
    description: "Containerization & CI/CD pipeline integrations"
  },
  {
    name: "Jenkins / GitHub Actions / GitLab CI",
    icon: <FaJenkins />,
    description: "CI/CD automation & pipeline development"
  },
  {
    name: "Ansible",
    icon: <SiAnsible />,
    description: "Configuration management & provisioning"
  },
  {
    name: "Prometheus & Grafana",
    icon: <SiPrometheus />,
    description: "Monitoring, logging & metrics visualization"
  },
  {
    name: "Scripting",
    icon: <FaPython />,
    description: "Python, Bash, and Shell scripting"
  },
  {
    name: "Security & Compliance",
    icon: <FaGithub />,
    description: "IAM, SonarQube, OWASP ZAP, secure DevOps pipelines"
  }
];

const Skills: React.FC = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">🛠️ My Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index} style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

