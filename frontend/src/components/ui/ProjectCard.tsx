import { TechTag } from './TechTag';
import type { Project } from '@/types/portfolio';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const primaryLink = project.repo ?? project.link;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.name}>
          {primaryLink ? (
            <a href={primaryLink} target="_blank" rel="noopener noreferrer" className={styles.nameLink}>
              {project.name}
            </a>
          ) : (
            project.name
          )}
        </h3>
        <div className={styles.links}>
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkIcon}
              aria-label="Repository"
              title="Source code"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkIcon}
              aria-label="Demo"
              title="Watch demo"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </a>
          )}
          {project.link && !project.repo && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkIcon}
              aria-label="External link"
              title="Open project"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
        </div>
      </div>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.tags}>
        {project.technologies.map((tech) => (
          <TechTag key={tech} label={tech} />
        ))}
      </div>
    </div>
  );
}
