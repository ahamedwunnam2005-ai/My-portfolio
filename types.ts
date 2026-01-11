
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  category: 'Research' | 'Coding' | 'Publication';
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'Language' | 'Tool' | 'Research' | 'Soft Skill';
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  education: {
    degree: string;
    institution: string;
    period: string;
    details: string;
  }[];
  projects: Project[];
  skills: Skill[];
  experience: Experience[];
}
