import type { WorkExperience } from '@/types/portfolio';
import { ExpandableItem } from '@/components/ui/ExpandableItem';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import styles from './Experience.module.css';

interface ExperienceProps {
  workExperience: WorkExperience[];
}

export function Experience({ workExperience }: ExperienceProps) {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <RevealWrapper>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Career</span>
            <h2 className={styles.sectionTitle}>Experience</h2>
          </div>
        </RevealWrapper>

        <div className={styles.timeline}>
          {workExperience.map((job, i) => (
            <RevealWrapper key={i} delay={i * 60}>
              <div className={styles.jobCard}>
                <div className={styles.jobMeta}>
                  <span className={styles.period}>{job.period}</span>
                </div>
                <div className={styles.jobBody}>
                  <div className={styles.jobHeader}>
                    <h3 className={styles.jobTitle}>{job.title}</h3>
                    <span className={styles.company}>{job.company}</span>
                  </div>
                  <p className={styles.jobDescription}>{job.jobDescription}</p>
                  {job.workItems.length > 0 && (
                    <div className={styles.workItems}>
                      {job.workItems.map((item, j) => (
                        <ExpandableItem
                          key={j}
                          title={item.title}
                          description={item.description}
                          technologies={item.technologies}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
