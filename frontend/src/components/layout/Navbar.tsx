import { useState } from 'react';
import { useActiveSection } from '@/hooks/useActiveSection';
import styles from './Navbar.module.css';

const SECTION_IDS = ['hero', 'experience', 'projects', 'education', 'certifications'];

const NAV_LABELS: Record<string, string> = {
  hero: 'About',
  experience: 'Experience',
  projects: 'Projects',
  education: 'Education',
  certifications: 'Certifications',
};

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.inner}>
          <a href="#hero" className={styles.logo} onClick={closeMenu} aria-label="Home">
            <img src="/favicon/android-chrome-192x192.png" alt="JJ" className={styles.logoImg} />
          </a>

          <nav className={styles.desktopNav} aria-label="Site sections">
            {SECTION_IDS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`${styles.navLink} ${activeSection === id ? styles.active : ''}`}
              >
                {NAV_LABELS[id]}
              </a>
            ))}
          </nav>

          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.resumeBtn}>
            Resume
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 2h8M10 2v8M2 10l8-8" />
            </svg>
          </a>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerOpen : ''}`} />
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerOpen : ''}`} />
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerOpen : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className={styles.mobileNav} aria-label="Mobile site sections">
          {SECTION_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`${styles.mobileNavLink} ${activeSection === id ? styles.active : ''}`}
              onClick={closeMenu}
            >
              {NAV_LABELS[id]}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileResumeBtn}
            onClick={closeMenu}
          >
            View Resume
          </a>
        </nav>
      </div>

      {menuOpen && (
        <div className={styles.overlay} onClick={closeMenu} aria-hidden="true" />
      )}
    </>
  );
}
