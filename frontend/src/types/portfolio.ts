export interface SocialLinks {
  whatsapp: string;
  linkedin: string;
  github: string;
  twitter: string;
  email: string;
  blog: string;
}

export interface Personal {
  name: string;
  title: string;
  tagline: string;
  subtitle: string;
  website: string;
  profileImage: string;
  social: SocialLinks;
}

export interface WorkItem {
  title: string;
  description: string;
  technologies: string[];
}

export interface WorkExperience {
  title: string;
  company: string;
  jobDescription: string;
  period: string;
  workItems: WorkItem[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  repo?: string;
  demo?: string;
  link?: string;
  certificate?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Certification {
  name: string;
  institution: string;
  description: string;
  certificate: string;
}

export interface Workshop {
  name: string;
  venue: string;
  description: string;
  certificate: string;
}

export interface PortfolioData {
  personal: Personal;
  workExperience: WorkExperience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  workshops: Workshop[];
}
