import { useState } from 'react';
import type { Certification, Workshop } from '@/types/portfolio';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import styles from './Credentials.module.css';

interface CredentialsProps {
  certifications: Certification[];
  workshops: Workshop[];
}

interface AccordionGroupProps {
  title: string;
  count: number;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function AccordionGroup({ title, count, children, defaultOpen = false }: AccordionGroupProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={styles.accordionGroup}>
      <button
        className={styles.accordionTrigger}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className={styles.accordionTitle}>{title}</span>
        <span className={styles.accordionMeta}>
          <span className={styles.count}>{count}</span>
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
            style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.22s ease' }}
          >
            <path d="M2.5 5L7 9.5L11.5 5" />
          </svg>
        </span>
      </button>
      <div className={`${styles.accordionContent} ${open ? styles.accordionContentOpen : ''}`}>
        <div className={styles.accordionInner}>
          {children}
        </div>
      </div>
    </div>
  );
}

export function Credentials({ certifications, workshops }: CredentialsProps) {
  return (
    <section id="certifications" className={styles.section}>
      <div className={styles.inner}>
        <RevealWrapper>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Formal training</span>
            <h2 className={styles.sectionTitle}>Certifications</h2>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={60}>
          <AccordionGroup title="Courses" count={certifications.length} defaultOpen>
            <div className={styles.credGrid}>
              {certifications.map((cert, i) => (
                <a
                  key={i}
                  href={cert.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.credCard}
                >
                  <div className={styles.credHeader}>
                    <h4 className={styles.credName}>{cert.name}</h4>
                    <svg className={styles.externalIcon} width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M2 2h8M10 2v8M2 10l8-8" />
                    </svg>
                  </div>
                  <p className={styles.credInstitution}>{cert.institution}</p>
                  <p className={styles.credDesc}>{cert.description}</p>
                </a>
              ))}
            </div>
          </AccordionGroup>
        </RevealWrapper>

        <RevealWrapper delay={120}>
          <AccordionGroup title="Workshops & Events" count={workshops.length}>
            <div className={styles.credGrid}>
              {workshops.map((ws, i) => (
                <a
                  key={i}
                  href={ws.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.credCard}
                >
                  <div className={styles.credHeader}>
                    <h4 className={styles.credName}>{ws.name}</h4>
                    <svg className={styles.externalIcon} width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M2 2h8M10 2v8M2 10l8-8" />
                    </svg>
                  </div>
                  <p className={styles.credInstitution}>{ws.venue}</p>
                  <p className={styles.credDesc}>{ws.description}</p>
                </a>
              ))}
            </div>
          </AccordionGroup>
        </RevealWrapper>
      </div>
    </section>
  );
}
