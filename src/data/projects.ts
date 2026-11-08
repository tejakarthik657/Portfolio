import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'FrameUp',
    subtitle: 'AI-Powered Operating System for Local Business',
    description:
      'An AI-powered operating system built specifically for Indian MSMEs and local business owners to manage operations, billing, and business growth effortlessly beyond legacy tools like Tally. Tested and validated with 40+ peers.',
    techStack: ['Python', 'FastAPI', 'Node.js', 'Next.js', 'PostgreSQL', 'AI APIs'],
    liveUrl: 'https://devframes-presence.vercel.app/',
    githubUrl: 'https://github.com/tejakarthik657/FreameUp',
    category: ['AI Systems', 'Full-Stack', 'Enterprise'],
    highlights: [
      { value: '40+', label: 'Peer Testers' },
      { value: 'MSME', label: 'Local Business' },
      { value: 'Next-Gen', label: 'Tally Alternative' },
    ],
  },
  {
    id: 2,
    title: 'TerritoryRun',
    subtitle: 'Tactical Gaming Interface',
    description:
      'A real-world, multiplayer fitness game with 30+ peers that transforms outdoor running into strategic territory conquest by capturing Uber H3 hexagonal cells and waging faction turf wars in real time.',
    techStack: ['Node.js', 'Express.js', 'WebSockets', 'Uber H3', 'Redis', 'Geolocation'],
    liveUrl: 'https://runnify-ktk.vercel.app/',
    githubUrl: 'https://github.com/tejakarthik657/runnify',
    category: ['Real-Time', 'Distributed', 'Gaming'],
    highlights: [
      { value: '30+', label: 'Active Runners' },
      { value: 'H3 Grid', label: 'Hexagonal Spatial' },
      { value: 'Real-Time', label: 'Socket State' },
    ],
  },
  {
    id: 3,
    title: 'Vibe',
    subtitle: 'AI Developer Engineering Platform',
    description:
      'An AI developer platform tested by 15+ developers and students, combining Python backend services, LLM orchestration, APIs, automation, and custom VS Code workflows published on the Visual Studio Marketplace.',
    techStack: ['Python', 'FastAPI', 'LLM Orchestration', 'LangChain', 'VS Code APIs'],
    liveUrl: 'https://marketplace.visualstudio.com/items?itemName=devframes.vibe-vscode-extension',
    githubUrl: 'https://github.com/tejakarthik657/vibe',
    category: ['AI Tooling', 'Developer Experience', 'Backend'],
    highlights: [
      { value: '15+', label: 'Dev Testers' },
      { value: 'VS Code', label: 'Marketplace Live' },
      { value: 'Agentic', label: 'Orchestration' },
    ],
  },
  {
    id: 4,
    title: 'VeriDoc AI',
    subtitle: 'Enterprise Agentic RAG Platform',
    description:
      'An enterprise agentic RAG platform featuring an asynchronous Playwright web crawler, PyMuPDF/Groq Vision OCR PDF parser, and hybrid Qdrant/BM25 vector search with Cross-Encoder reranking for precision legal and technical retrieval.',
    techStack: ['Python', 'Playwright', 'Groq Vision OCR', 'Qdrant', 'BM25', 'Cross-Encoder'],
    liveUrl: 'https://nexus-tawny-seven-50.vercel.app/',
    githubUrl: 'https://github.com/tejakarthik657/chat_doc',
    category: ['Agentic RAG', 'Computer Vision', 'Search'],
    highlights: [
      { value: 'Hybrid', label: 'BM25 + Vector' },
      { value: 'Cross-Encoder', label: 'Reranking' },
      { value: 'Vision OCR', label: 'Multimodal Parsing' },
    ],
  },
];
