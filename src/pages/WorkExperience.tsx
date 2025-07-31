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
      dateRange: "Jun 2024 – Present",
      title: "DevOps Infrastructure Engineer",
      name: "Morgan Stanley – Canada",
      techStack: "Azure, Terraform, AKS, Docker, Azure DevOps, GitHub Actions, Jenkins, SonarQube, ARM Templates",
      summaryPoints:
        "Designed and implemented highly available Azure cloud infrastructure with Terraform and ARM Templates. Automated CI/CD pipelines using Azure DevOps, GitHub Actions, and Jenkins, reducing deployment times by 60%. Migrated on-premise workloads to Azure, implemented AKS for container orchestration, and improved scalability and reliability with proactive monitoring (Azure Monitor, Log Analytics) and integrated security controls."
    },
    {
      timelineType: "work",
      dateRange: "Apr 2022 – Aug 2023",
      title: "Cloud Engineer",
      name: "TCS – India",
      techStack: "AWS, Terraform, CloudFormation, Jenkins, GitLab, CodePipeline, CloudWatch, IAM",
      summaryPoints:
        "Managed large-scale AWS infrastructure using EC2, RDS, S3, and VPC. Automated deployments and IaC with Terraform and CloudFormation, reducing manual interventions. Designed CI/CD pipelines with Jenkins, CodePipeline, and GitLab, improving release frequency. Optimized AWS usage by implementing auto-scaling and cost-reduction strategies, while maintaining strict security policies using IAM and Shield."
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
            <div style={{ color: 'black' }}>
              {item.timelineType === "work" ? (
                <>
                  <h3 className="vertical-timeline-element-title">{item.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
                  <p className="vertical-timeline-element-tech">🔧 {item.techStack}</p>
                  <p>{item.summaryPoints}</p>
                </>
              ) : (
                <>
                  <h3 className="vertical-timeline-element-title">{item.name}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{item.title}</h4>
                  <p>{item.summaryPoints}</p>
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
