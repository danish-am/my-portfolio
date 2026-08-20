import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';

const WorkExperience: React.FC = () => {
  const timelineData = [
    {
      timelineType: "work",
      dateRange: "Oct 2025 – Present",
      title: "AWS/AZURE Cloud Engineer",
      name: "Broadridge – Canada",
      techStack: "AWS, Azure, Terraform, Cloud Custodian, IAM, CloudFormation, Jenkins, Azure DevOps, CloudWatch, Azure Monitor",
      summaryPoints:
        "Managed and provisioned multi-cloud infrastructure across AWS (EC2, RDS, S3, VPC) and Azure (Virtual Machines, Storage, Virtual Networks) with Terraform, ARM Templates, and CloudFormation. Implemented automated governance, compliance rules, and resource tagging using Cloud Custodian. Enforced strict security, least-privilege access, and identity management with AWS IAM and Azure RBAC / Entra ID. Designed robust CI/CD pipelines and optimized multi-cloud resource scaling and cost governance."
    },
    {
      timelineType: "work",
      dateRange: "Apr 2022 – Aug 2023",
      title: "DevOps Engineer",
      name: "TCS – India",
      techStack: "Azure, Terraform, AKS, Docker, Azure DevOps, GitHub Actions, Jenkins, SonarQube, ARM Templates",
      summaryPoints:
        "Designed and implemented highly available cloud infrastructure with Terraform and ARM Templates. Automated CI/CD pipelines using Azure DevOps, GitHub Actions, and Jenkins, reducing deployment times by 60%. Migrated on-premise workloads to cloud environments, implemented AKS for container orchestration, and improved scalability and reliability with proactive monitoring (Azure Monitor, Log Analytics) and integrated security controls."
    },
    {
      timelineType: "work",
      dateRange: "Aug 2019 – Apr 2022",
      title: "Linux Admin - DevOps",
      name: "Mphasis – India",
      techStack: "Linux (RHEL, CentOS), AWS, Azure, Terraform, Prometheus, Grafana, CloudWatch, Ansible",
      summaryPoints:
        "Administered and optimized Linux servers in hybrid cloud environments. Automated server provisioning and monitoring using Terraform, CloudFormation, and Prometheus/Grafana, reducing downtime and manual workload. Created Ansible playbooks and shell scripts to enforce security policies and optimize server performance."
    },
    {
      timelineType: "education",
      dateRange: "May 2024 – Dec 2024",
      name: "Durham College – Canada",
      title: "Post Graduate Certificate in Data Analytics",
      summaryPoints: "Focused on cloud-based data pipelines, big data architectures, and scalable analytics solutions using AWS and Azure data services."
    },
    {
      timelineType: "education",
      dateRange: "Sep 2023 – Apr 2024",
      name: "Durham College – Canada",
      title: "Post Graduate Certificate in Cybersecurity",
      summaryPoints: "Specialized in cloud security, network security, and incident response with hands-on projects in AWS and Azure."
    },
    {
      timelineType: "education",
      dateRange: "Aug 2015 – May 2019",
      name: "JNTU College – India",
      title: "Bachelor of Technology in Electronics & Communication",
      summaryPoints: "Graduated with strong fundamentals in IT, networking, and software development."
    }
  ];

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Work Experience & Education Timeline</h2>
      </div>
      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={
              item.timelineType === "work"
                ? index === 0
                  ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                  : { background: 'rgb(240, 240, 240)', color: '#000' }
                : { background: 'rgb(255, 224, 230)', color: '#000' }
            }
            contentArrowStyle={
              item.timelineType === "work"
                ? { borderRight: index === 0 ? '7px solid rgb(33, 150, 243)' : '7px solid rgb(240, 240, 240)' }
                : { borderRight: '7px solid rgb(255, 224, 230)' }
            }
            date={item.dateRange}
            iconStyle={
              item.timelineType === "work"
                ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                : { background: 'rgb(255, 160, 200)', color: '#fff' }
            }
            icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            <div>
              {item.timelineType === "work" ? (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                    <h3 className="vertical-timeline-element-title" style={{ margin: 0, fontWeight: 700, fontSize: '1.25rem' }}>
                      {item.title}
                    </h3>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '3px 10px',
                      borderRadius: '12px',
                      background: index === 0 ? 'rgba(255,255,255,0.25)' : '#e2e8f0',
                      color: index === 0 ? '#fff' : '#334155'
                    }}>
                      Full-time
                    </span>
                  </div>
                  <h4 className="vertical-timeline-element-subtitle" style={{ margin: '4px 0 12px 0', opacity: 0.9, fontWeight: 600 }}>
                    🏢 {item.name}
                  </h4>
                  {item.techStack && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', margin: '10px 0 14px 0' }}>
                      {item.techStack.split(', ').map((tech, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            padding: '3px 8px',
                            borderRadius: '6px',
                            background: index === 0 ? 'rgba(255,255,255,0.2)' : '#e0e7ff',
                            color: index === 0 ? '#fff' : '#1e40af',
                            letterSpacing: '0.2px'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  <p style={{ lineHeight: 1.6, fontSize: '0.92rem', margin: 0, opacity: index === 0 ? 0.95 : 0.85 }}>
                    {item.summaryPoints}
                  </p>
                </>
              ) : (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                    <h3 className="vertical-timeline-element-title" style={{ margin: 0, fontWeight: 700, fontSize: '1.15rem' }}>
                      🎓 {item.name}
                    </h3>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '3px 10px',
                      borderRadius: '12px',
                      background: 'rgba(219, 39, 119, 0.15)',
                      color: '#be185d'
                    }}>
                      Education
                    </span>
                  </div>
                  <h4 className="vertical-timeline-element-subtitle" style={{ margin: '6px 0 10px 0', fontWeight: 600, color: '#475569' }}>
                    {item.title}
                  </h4>
                  <p style={{ lineHeight: 1.6, fontSize: '0.92rem', margin: 0, color: '#334155' }}>
                    {item.summaryPoints}
                  </p>
                </>
              )}
            </div>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;