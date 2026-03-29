import type { Education as EducationItem } from '@/types/portfolio';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import styles from './Education.module.css';

interface EducationProps {
  education: EducationItem[];
}

export function Education({ education }: EducationProps) {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.inner}>
        <RevealWrapper>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Academic background</span>
            <h2 className={styles.sectionTitle}>Education</h2>
          </div>
        </RevealWrapper>

        <div className={styles.timeline}>
          {education.map((item, i) => (
            <RevealWrapper key={i} delay={i * 80}>
              <div className={styles.entry}>
                <div className={styles.dot} />
                <div className={styles.entryContent}>
                  <div className={styles.entryHeader}>
                    <h3 className={styles.degree}>{item.degree}</h3>
                    <span className={styles.period}>{item.period}</span>
                  </div>
                  <p className={styles.institution}>{item.institution}</p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
