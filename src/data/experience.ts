import { Experience, Education } from '../types';

export const experiences: Experience[] = [
  {
    id: 1,
    type: 'experience',
    status: 'active',
    company: 'DevFrames',
    role: 'Software Engineer & Founder',
    duration: 'July 2026 – Oct 2026',
    badge: 'Freelance Agency',
    link: 'https://github.com/tejakarthik657', // Placeholder for user's agency link
    description: [
      'Founded and operated DevFrames, an independent freelance engineering agency delivering custom AI-powered products and tailored client solutions.',
      'Built 2+ AI-powered products and client solutions, owning end-to-end backend architecture, REST APIs, databases, LLM orchestration, automation pipelines, and production deployment.',
      'Evaluated open-source and emerging AI technologies, integrating reusable engineering patterns into rapid product development workflows.',
    ],
  },
  {
    id: 2,
    type: 'experience',
    status: 'inactive',
    company: 'Aform Solutions',
    role: 'Backend Engineer',
    duration: 'Feb 2026 – Jun 2026',
    badge: 'Engineering',
    description: [
      'Engineered backend services for a car-pooling platform, implementing robust REST APIs, ride discovery algorithms, driver–passenger matching, trip workflows, and data handling.',
      'Designed modular business logic and resilient server-side components for maintainable and scalable application development.',
    ],
  },
  {
    id: 3,
    type: 'experience',
    status: 'inactive',
    company: 'SuPrazo Technologies',
    role: 'Junior Software Engineer Intern',
    duration: 'Aug 2025 – Feb 2026',
    badge: 'Internship',
    description: [
      'Developed backend and core application features using REST APIs, MongoDB, Git, and modular service architecture.',
      'Debugged application issues through structured testing, logging, and code refinement to improve system reliability and uptime.',
    ],
  },
  {
    id: 4,
    type: 'experience',
    status: 'inactive',
    company: 'Svapps',
    role: 'Web Developer Intern',
    duration: 'Mar 2025 – Jun 2025',
    badge: 'Internship',
    description: [
      'Developed SEO-friendly static websites for 9+ small-scale businesses utilizing Next.js, Google Search Console, and responsive design practices.',
      'Optimized page performance, technical SEO attributes, and indexing workflows to drive organic discoverability.',
    ],
  },
];

export const educationList: Education[] = [
  {
    degree: 'B.Tech. in Computer Science and Engineering',
    institution: 'Kakatiya Institute of Technology and Science, Warangal',
    duration: '2023 – 2027',
    score: 'CGPA: 7.62 / 10',
    type: 'Full-time Undergraduate',
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Sri Chaitanya Junior College',
    duration: '2021 – 2023',
    score: '82%',
    type: 'Higher Secondary',
  },
  {
    degree: 'SSC (10th Standard)',
    institution: 'Alphores High School',
    duration: '2021',
    score: 'CGPA: 10 / 10',
    type: 'Secondary School',
  },
];
