import React, { useCallback, useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import ArchitectureDiagram from './ArchitectureDiagram';
import ProjectModal from './ProjectModal';
import { Project, projects } from './projectsData';
import './Projects.css';

const Projects: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <div className="projects-container">
      <h2 className="projects-title">🚀 My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <button
            key={project.title}
            type="button"
            onClick={() => setSelected(project)}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <div className="project-thumb">
              <ArchitectureDiagram diagram={project.diagram} className="project-thumb-diagram" />
            </div>
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
              <span className="project-more">
                <FaInfoCircle /> More Info
              </span>
            </div>
          </button>
        ))}
      </div>
      {selected && <ProjectModal project={selected} onClose={closeModal} />}
    </div>
  );
};

export default Projects;
