import React, { useEffect, useRef } from 'react';
import { FaGithub, FaPlay, FaTimes } from 'react-icons/fa';
import ArchitectureDiagram from './ArchitectureDiagram';
import { Project } from './projectsData';
import './ProjectModal.css';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

// Netflix "More Info" style popup for a single project
const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const hasCode = project.link && project.link !== '#';

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} className="modal-close" onClick={onClose} aria-label="Close">
          <FaTimes />
        </button>

        <div className="modal-hero">
          <ArchitectureDiagram diagram={project.diagram} className="modal-diagram" />
          <div className="modal-hero-fade" />
          <div className="modal-hero-content">
            <h2 id="project-modal-title" className="modal-title">{project.title}</h2>
            <div className="modal-actions">
              {hasCode ? (
                <a className="modal-play" href={project.link} target="_blank" rel="noopener noreferrer">
                  <FaPlay /> View Code
                </a>
              ) : (
                <span className="modal-play modal-play--disabled">
                  <FaGithub /> Repo coming soon
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-meta">
            <span className="match-score">98% Match</span>
            <span className="maturity-rating">{project.cloud}</span>
            <span className="modal-meta-info">{project.episodes.length} Episodes</span>
          </div>
          <p className="modal-description">{project.description}</p>

          <h3 className="modal-section-title">Episodes</h3>
          <ol className="episode-list">
            {project.episodes.map((episode, i) => (
              <li key={episode.title} className="episode">
                <span className="episode-number">{i + 1}</span>
                <div>
                  <h4 className="episode-title">{episode.title}</h4>
                  <p className="episode-text">{episode.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <h3 className="modal-section-title">Tech Stack</h3>
          <div className="tech-used">
            {project.techUsed.split(', ').map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
