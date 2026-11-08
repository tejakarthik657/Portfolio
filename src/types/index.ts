export interface Project {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string[];
  highlights?: { value: string; label: string }[];
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  badge?: string;
  link?: string;
  description: string[];
  logo?: string;
  type: 'education' | 'experience';
  status?: 'active' | 'inactive';
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export interface Skill {
  name: string;
  category: string;
  icon?: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  score: string;
  type: string;
}

export type Theme = 'light' | 'dark';
