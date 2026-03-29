import { portfolioData } from '@/data/index';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Education } from '@/components/sections/Education';
import { Credentials } from '@/components/sections/Credentials';
import styles from './App.module.css';

function App() {
  const { personal, workExperience, projects, education, certifications, workshops } = portfolioData;

  return (
    <div className={styles.app}>
      <Navbar />
      <main>
        <Hero personal={personal} />
        <Experience workExperience={workExperience} />
        <Projects projects={projects} />
        <Education education={education} />
        <Credentials certifications={certifications} workshops={workshops} />
      </main>
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          &copy; {new Date().getFullYear()} {personal.name}
        </p>
      </footer>
    </div>
  );
}

export default App;
