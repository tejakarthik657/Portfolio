import { Project } from '../types';
import syntaxErrorImage from '../assets/syntaxerror.png';
import doodleDelightImage from '../assets/doodledelight.png';
import neoVisionImage from '../assets/neovision.png';


export const projects: Project[] = [
  {
    id: 1,
    title: 'ClinicPing',
    description: 'A healthcare management solution that helps users find and book appointments with hospitals nearby using geospatial visualization.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    techStack: ['React', 'Node.js', 'Globe.gl', 'Leaflet.js'],
    liveUrl: 'https://clinicping-hr.netlify.app/',
    githubUrl: 'https://github.com/Nikhil-Madaravena/ClinicPing',
    category: ['fullstack', 'featured', 'visualization']
  },
  {
    id: 2,
    title: 'SyntaxError',
    description: 'An interactive programming resources website offering tutorials and guides for learners and enthusiasts.',
    image: syntaxErrorImage,
    techStack: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://syntaxerror-hr.netlify.app/',
    githubUrl: 'https://github.com/Nikhil-Madaravena/SyntaxError',
    category: ['frontend', 'education']
  },
  {
    id: 3,
    title: 'DoodleDelight',
    description: 'An e-commerce platform focused on children’s products, offering a colorful and engaging UI.',
    image: doodleDelightImage,
    techStack: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://doodledelight-hr.netlify.app/',
    githubUrl: 'https://github.com/Nikhil-Madaravena/DoodleDelight',
    category: ['frontend', 'ecommerce']
  },
  {
    id: 4,
    title: 'NeoVision',
    description: 'A visualization tool for exploring Near-Earth Objects (NEOs) and space data with interactive 3D elements.',
    image: neoVisionImage,
    techStack: ['React', 'Node.js', 'Three.js', 'Sass'],
    liveUrl: 'https://neovision-hr.netlify.app/',
    githubUrl: 'https://github.com/Nikhil-Madaravena/NeoVision',
    category: ['frontend', 'visualization', 'featured']
  }
];
