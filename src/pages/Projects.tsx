import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "Azure Virtual Machine Scale Sets (VMSS) with Terraform",
    description: "Scalable Azure infrastructure using Terraform — includes VMSS behind Load Balancer, autoscaling, dynamic NSG rules, and environment-based VM sizing.",
    techUsed: "Azure, Terraform, Load Balancer, VMSS",
    link: "https://github.com/danish-am/az-tf-vmss"
  },
  {
    title: "Azure Function App Deployment with Terraform",
    description: "Deployed Azure Python Function Apps using Terraform with Blob Storage and Traffic Manager integration.",
    techUsed: "Azure, Terraform, Function App, Blob Storage",
    link: "https://github.com/danish-am/az-functionapp-terraform"
  },
  {
    title: "Terraform Blue-Green Deployment",
    description: "Terraform-based Blue-Green Deployment for Azure Function Apps using Traffic Manager for zero downtime.",
    techUsed: "Azure, Terraform, Traffic Manager",
    link: "https://github.com/danish-am/terraform-blue-green-deployments"
  },
  {
    title: "AWS Migration Project",
    description: "AWS migration project with Terraform for VPC, EC2, RDS, EKS, S3, IAM and automated drift detection.",
    techUsed: "AWS, Terraform, EKS, EC2, RDS, S3",
    link: "https://github.com/danish-am/aws-migration-project"
  },
  {
    title: "AKS Terraform Azure DevOps Project",
    description: "Provision AKS cluster infrastructure using Terraform with remote backends, outputs, and Azure DevOps pipelines.",
    techUsed: "Azure, AKS, Terraform, Azure DevOps",
    link: "https://github.com/danish-am/aks-terraform-azuredevops"
  },
  {
    title: "End-to-End CI/CD Pipeline Project",
    description: "Full enterprise-grade CI/CD pipeline using AWS, GitHub Actions, Jenkins, SonarQube, Docker, Trivy, EKS, and ArgoCD for GitOps.",
    techUsed: "AWS, Jenkins, GitHub Actions, SonarQube, Docker, Trivy, EKS, ArgoCD",
    link: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">🚀 My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techUsed.split(', ').map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
