import styles from './Contact.module.css';

interface ContactProps {
  whatsapp: string;
}

export function Contact({ whatsapp }: ContactProps) {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btn}
        >
          Get in touch
          <svg width="13" height="13" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M2 2h8M10 2v8M2 10l8-8" />
          </svg>
        </a>
      </div>
    </section>
  );
}
