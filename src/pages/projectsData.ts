export interface DiagramNode {
  label: string;
  sub?: string;
  color: string;
}

export interface DiagramStage {
  nodes: DiagramNode[];
  caption?: string;
}

export interface Episode {
  title: string;
  text: string;
}

export interface Project {
  title: string;
  description: string;
  techUsed: string;
  link: string;
  cloud: string;
  diagram: { stages: DiagramStage[]; footer?: string };
  episodes: Episode[];
}

const AZURE = '#0078d4';
const AWS = '#ff9900';
const TF = '#7b42bc';
const NEUTRAL = '#4b5563';
const GREEN = '#16a34a';
const BLUE = '#2563eb';
const RED = '#e50914';

export const projects: Project[] = [
  {
    title: "Azure Virtual Machine Scale Sets (VMSS) with Terraform",
    description: "Scalable Azure infrastructure using Terraform — includes VMSS behind Load Balancer, autoscaling, dynamic NSG rules, and environment-based VM sizing.",
    techUsed: "Azure, Terraform, Load Balancer, VMSS",
    link: "https://github.com/danish-am/az-tf-vmss",
    cloud: "Azure",
    diagram: {
      stages: [
        { nodes: [{ label: 'Users', sub: 'HTTP :80', color: NEUTRAL }] },
        { nodes: [{ label: 'Public IP', color: AZURE }, { label: 'Load Balancer', sub: 'health probe', color: AZURE }] },
        {
          nodes: [{ label: 'VM', color: AZURE }, { label: 'VM', color: AZURE }, { label: 'VM …n', color: AZURE }],
          caption: 'VMSS · app subnet + NSG',
        },
        { nodes: [{ label: 'Autoscale', sub: 'CPU rules', color: GREEN }] },
      ],
      footer: 'Terraform · remote state in Azure Storage · env-based sizing',
    },
    episodes: [
      {
        title: 'The Problem',
        text: 'A web app has to absorb changing traffic without anyone resizing or adding VMs by hand, and every environment has to be built the same way.',
      },
      {
        title: 'What I Built',
        text: 'A VM Scale Set behind an Azure Load Balancer with an HTTP health probe, CPU-based autoscale rules, NSG rules generated from locals.tf, VM size chosen per environment, and Terraform state kept in an Azure Storage backend.',
      },
      {
        title: 'Lessons Learned',
        text: 'Rebuilt an accidentally deleted main.tf from terraform state list/show, traced an unreachable public IP to a missing port-80 NSG rule, and moved a portal-made rule back under Terraform control.',
      },
    ],
  },
  {
    title: "Azure Function App Deployment with Terraform",
    description: "Deployed Azure Python Function Apps using Terraform with Blob Storage and Traffic Manager integration.",
    techUsed: "Azure, Terraform, Function App, Blob Storage",
    link: "https://github.com/danish-am/az-functionapp-terraform",
    cloud: "Azure",
    diagram: {
      stages: [
        { nodes: [{ label: 'Python code', sub: 'HTTP trigger', color: NEUTRAL }] },
        { nodes: [{ label: 'ZIP package', sub: 'auto-built', color: TF }] },
        { nodes: [{ label: 'Blob Storage', sub: 'package', color: AZURE }] },
        { nodes: [{ label: 'Function App', sub: 'Linux plan', color: AZURE }] },
        { nodes: [{ label: 'Clients', sub: 'GET / POST', color: NEUTRAL }] },
      ],
      footer: 'Terraform · remote state in Azure Storage',
    },
    episodes: [
      {
        title: 'The Problem',
        text: 'Deploying a serverless Python API through the portal is manual and hard to repeat. Infrastructure and code need to ship the same way every time.',
      },
      {
        title: 'What I Built',
        text: 'Terraform creates the resource group, storage account, Linux App Service plan and Function App, packages the Python code into a ZIP, and deploys it from Blob Storage.',
      },
      {
        title: 'The Result',
        text: 'A reproducible deployment with an HTTP-triggered function answering GET and POST requests, with state stored remotely so it can be shared safely.',
      },
    ],
  },
  {
    title: "Terraform Blue-Green Deployment",
    description: "Terraform-based Blue-Green Deployment for Azure Function Apps using Traffic Manager for zero downtime.",
    techUsed: "Azure, Terraform, Traffic Manager",
    link: "https://github.com/danish-am/terraform-blue-green-deployments",
    cloud: "Azure",
    diagram: {
      stages: [
        { nodes: [{ label: 'Users', color: NEUTRAL }] },
        { nodes: [{ label: 'Traffic Manager', sub: 'priority routing', color: AZURE }], caption: 'health probes' },
        {
          nodes: [
            { label: 'Blue app', sub: 'priority 1 · live', color: BLUE },
            { label: 'Green app', sub: 'priority 2 · standby', color: GREEN },
          ],
        },
      ],
      footer: 'Terraform modules: function_app + trafficmanager',
    },
    episodes: [
      {
        title: 'The Problem',
        text: 'Releasing straight onto the live environment means downtime, and a bad release is slow to roll back.',
      },
      {
        title: 'What I Built',
        text: 'Two identical Function Apps (blue and green) from one reusable Terraform module, with Azure Traffic Manager in front using priority routing and health probes.',
      },
      {
        title: 'The Result',
        text: 'Traffic goes to blue while it is healthy. If blue fails its health checks or is turned off, Traffic Manager moves users to green automatically, with no downtime.',
      },
    ],
  },
  {
    title: "AWS Migration Project",
    description: "AWS migration project with Terraform for VPC, EC2, RDS, EKS, S3, IAM and automated drift detection.",
    techUsed: "AWS, Terraform, EKS, EC2, RDS, S3",
    link: "https://github.com/danish-am/aws-migration-project",
    cloud: "AWS",
    diagram: {
      stages: [
        { nodes: [{ label: 'Live AWS', sub: 'untracked', color: AWS }], caption: 'VPC · EC2 · RDS · EKS · S3' },
        {
          nodes: [
            { label: 'terraform import', color: TF },
            { label: 'Python script', sub: 'batch imports', color: TF },
            { label: 'Terraformer', color: TF },
          ],
        },
        { nodes: [{ label: 'state mv', sub: 'merge states', color: TF }] },
        { nodes: [{ label: 'Single state', sub: 'no plan drift', color: GREEN }] },
      ],
      footer: 'Next: Lambda drift alerts via SNS / SES',
    },
    episodes: [
      {
        title: 'The Problem',
        text: 'A full AWS environment (VPC, subnets, security groups, EC2, RDS, EKS, S3) was running but no longer tracked by Terraform, so changes could not be planned or reviewed safely.',
      },
      {
        title: 'What I Built',
        text: 'Brought every resource back under Terraform three ways: terraform import, a Python script that batches imports, and Terraformer. Then merged the states resource by resource with terraform state mv to keep lineage intact.',
      },
      {
        title: 'The Result',
        text: 'One consolidated Terraform state with no plan drift. Next step: a Lambda that watches for drift and sends alerts through SNS/SES.',
      },
    ],
  },
  {
    title: "AKS Terraform Azure DevOps Project",
    description: "Provision AKS cluster infrastructure using Terraform with remote backends, outputs, and Azure DevOps pipelines.",
    techUsed: "Azure, AKS, Terraform, Azure DevOps",
    link: "https://github.com/danish-am/aks-terraform-azuredevops",
    cloud: "Azure",
    diagram: {
      stages: [
        { nodes: [{ label: 'Git push', color: NEUTRAL }] },
        { nodes: [{ label: 'Azure DevOps', sub: 'pipeline', color: AZURE }] },
        { nodes: [{ label: 'Terraform', sub: 'plan → apply', color: TF }] },
        { nodes: [{ label: 'AKS cluster', color: AZURE }] },
      ],
      footer: 'Remote backend for state · outputs for cluster details',
    },
    episodes: [
      {
        title: 'The Problem',
        text: 'Creating Kubernetes clusters by hand is slow and inconsistent between environments.',
      },
      {
        title: 'What I Built',
        text: 'Terraform code for an AKS cluster with a remote state backend and outputs, run through an Azure DevOps pipeline.',
      },
      {
        title: 'The Result',
        text: 'Clusters are created from version-controlled code through a pipeline instead of by hand.',
      },
    ],
  },
  {
    title: "End-to-End CI/CD Pipeline Project",
    description: "Full enterprise-grade CI/CD pipeline using AWS, GitHub Actions, Jenkins, SonarQube, Docker, Trivy, EKS, and ArgoCD for GitOps.",
    techUsed: "AWS, Jenkins, GitHub Actions, SonarQube, Docker, Trivy, EKS, ArgoCD",
    link: "#",
    cloud: "AWS",
    diagram: {
      stages: [
        { nodes: [{ label: 'Git push', color: NEUTRAL }] },
        { nodes: [{ label: 'Jenkins', color: RED }, { label: 'GH Actions', color: NEUTRAL }], caption: 'CI' },
        { nodes: [{ label: 'SonarQube', sub: 'code quality', color: BLUE }, { label: 'Trivy', sub: 'image scan', color: GREEN }] },
        { nodes: [{ label: 'Docker image', color: BLUE }] },
        { nodes: [{ label: 'ArgoCD', sub: 'GitOps', color: RED }] },
        { nodes: [{ label: 'Amazon EKS', color: AWS }] },
      ],
    },
    episodes: [
      {
        title: 'The Problem',
        text: 'Code has to go from commit to production quickly without skipping quality or security checks.',
      },
      {
        title: 'What I Built',
        text: 'A pipeline where Jenkins and GitHub Actions build the app, SonarQube checks code quality, Docker packages it, Trivy scans the image, and ArgoCD deploys it to Amazon EKS using GitOps.',
      },
      {
        title: 'The Result',
        text: 'Every change is built, scanned and deployed through the same automated path, and what runs on the cluster always matches Git.',
      },
    ],
  },
];
