export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string[];
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  description: string[];
  logo: string;
}

export interface Skill {
  name: string;
  percentage: number;
  icon?: string;
  category: 'frontend' | 'backend' | 'programming' | 'visualization' | 'design' | 'tools';
}

export type Theme = 'light' | 'dark';