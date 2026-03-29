import { useState } from 'react';
import { TechTag } from './TechTag';
import styles from './ExpandableItem.module.css';

interface ExpandableItemProps {
  title: string;
  description: string;
  technologies: string[];
}

export function ExpandableItem({ title, description, technologies }: ExpandableItemProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`${styles.item} ${expanded ? styles.expanded : ''}`}>
      <button
        className={styles.trigger}
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        <span className={styles.triggerTitle}>{title}</span>
        <span className={styles.chevron} aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2.5 5L7 9.5L11.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div className={`${styles.content} ${expanded ? styles.contentExpanded : ''}`}>
        <div className={styles.contentInner}>
          <p className={styles.description}>{description}</p>
          <div className={styles.tags}>
            {technologies.map((tech) => (
              <TechTag key={tech} label={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
