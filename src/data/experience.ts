import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 1,
    type: 'experience',
    company: 'Self-Directed / Independent',
    role: 'Full-Stack Developer & Systems Engineer',
    duration: '2023 – Present',
    description: [
      'Engineered a high-performance in-memory key-value database in Rust achieving O(1) average-time operations, reducing lookup latency by 40%.',
      'Built a multi-user blog platform (Spring Boot + React.js + PostgreSQL) with JWT auth, role-based access control, and 35% query optimization via Hibernate JPA.',
      'Developed ClinicPing, a location-aware healthcare platform with dynamic fallback logic improving booking success rate by 30%.',
      'Built NeoVision, a 3D space visualization system rendering Near-Earth Objects at 60 FPS, improving rendering efficiency by 35%.',
      'Applied Git-based workflows, clean architecture principles, and performance-first design across all projects.',
    ],
    logo: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=80',
  },
  {
    id: 2,
    type: 'education',
    company: 'Kakatiya Institute of Technology and Science',
    role: 'B.Tech — Computer Science & Engineering',
    duration: '2023 – 2027',
    description: [
      'Pursuing B.Tech in Computer Science with focus on Data Structures & Algorithms, DBMS, Operating Systems, and Computer Networks.',
      'Achieved 100% score in Programming in the TCS National Qualifier Test (NQT) with 84.30% overall.',
      'Active participant in national-level hackathons including NASA Space Apps Challenge (Local Nominee).',
      'Winner of CODE4KITSW — C Programming Competition organized by the institute\'s technical club.',
      'Continuously applying academic knowledge through real-world full-stack and systems-level projects.',
    ],
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=80',
  },
];