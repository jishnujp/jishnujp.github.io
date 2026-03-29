import { useState } from 'react';
import type { Project } from '@/types/portfolio';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import styles from './Projects.module.css';

interface ProjectsProps {
  projects: Project[];
}

const FEATURED_COUNT = 2;

export function Projects({ projects }: ProjectsProps) {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, FEATURED_COUNT);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <RevealWrapper>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Selected work</span>
            <h2 className={styles.sectionTitle}>Projects</h2>
          </div>
        </RevealWrapper>

        <div className={styles.grid}>
          {visibleProjects.map((project, i) => (
            <RevealWrapper key={project.name} delay={i * 70}>
              <ProjectCard project={project} />
            </RevealWrapper>
          ))}
        </div>

        {projects.length > FEATURED_COUNT && (
          <RevealWrapper>
            <div className={styles.toggleWrapper}>
              <button
                className={styles.toggleBtn}
                onClick={() => setShowAll((v) => !v)}
              >
                {showAll
                  ? 'Show less'
                  : `Show ${projects.length - FEATURED_COUNT} more projects`}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ transform: showAll ? 'rotate(180deg)' : 'none', transition: 'transform 0.22s ease' }}
                >
                  <path d="M2.5 5L7 9.5L11.5 5" />
                </svg>
              </button>
            </div>
          </RevealWrapper>
        )}
      </div>
    </section>
  );
}
