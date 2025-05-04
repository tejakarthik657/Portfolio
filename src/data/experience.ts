import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'TechCorp Inc.',
    role: 'Senior Frontend Developer',
    duration: 'Jan 2023 - Present',
    description: [
      'Led the frontend development team in rebuilding the company\'s flagship product using React and TypeScript',
      'Implemented performance optimizations that improved page load times by 40%',
      'Established coding standards and best practices for the frontend team',
      'Collaborated with UX designers to implement responsive, accessible interfaces'
    ],
    logo: 'https://images.pexels.com/photos/6177607/pexels-photo-6177607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    company: 'Digital Dynamics',
    role: 'Frontend Developer',
    duration: 'Mar 2021 - Dec 2022',
    description: [
      'Developed and maintained multiple React applications with complex state management',
      'Integrated third-party APIs and services into web applications',
      'Created reusable component libraries that reduced development time by 30%',
      'Participated in code reviews and mentored junior developers'
    ],
    logo: 'https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    company: 'Innovate Solutions',
    role: 'UI Developer',
    duration: 'Jun 2019 - Feb 2021',
    description: [
      'Built responsive, cross-browser compatible websites using modern HTML, CSS, and JavaScript',
      'Transformed design mockups into functional web interfaces',
      'Implemented animations and interactive elements to enhance user experience',
      'Collaborated with backend developers to integrate frontend with APIs'
    ],
    logo: 'https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];