export interface ResumeSkillGroup {
  category: string;
  description: string;
  items: string[];
}

export const resumeSkillGroups: ResumeSkillGroup[] = [
  {
    category: 'Backend Architecture',
    description: 'Server engineering, scalable API design, and distributed communication patterns.',
    items: [
      'FastAPI',
      'Node.js',
      'Express.js',
      'REST APIs',
      'Event-Driven Architecture',
      'WebSockets',
      'OAuth 2.0',
      'JWT',
      'RBAC',
      'Rate Limiting',
      'Message Queues',
      'Webhooks',
    ],
  },
  {
    category: 'AI & LLM Engineering',
    description: 'Autonomous agents, contextual retrieval, and orchestration frameworks.',
    items: [
      'LLMs',
      'RAG',
      'AI Agents',
      'Prompt Engineering',
      'AI APIs',
      'LLM Orchestration',
      'LangChain',
      'Qdrant',
      'Ollama',
      'Hugging Face',
    ],
  },
  {
    category: 'AI-Assisted Engineering',
    description: 'Modern developer acceleration, repository-aware workflows, and automated evaluation.',
    items: [
      'AI Coding Agents',
      'Context Engineering',
      'Agentic Workflows',
      'Repository-Aware Development',
      'AI-Assisted Debugging',
      'Test Generation',
      'Code Review Automation',
    ],
  },
  {
    category: 'Languages & Frontend',
    description: 'Core application programming and modern client interfaces.',
    items: [
      'Python',
      'JavaScript',
      'Next.js',
      'Tailwind CSS',
    ],
  },
  {
    category: 'Databases',
    description: 'Relational, document, and high-dimensional vector storage engines.',
    items: [
      'MongoDB',
      'PostgreSQL',
      'Vector Databases',
      'Redis',
      'MongoDB Compass',
    ],
  },
  {
    category: 'DevOps, Cloud & Tooling',
    description: 'Infrastructure, continuous integration, containerization, and developer utilities.',
    items: [
      'Docker',
      'Git',
      'GitHub',
      'GitHub Actions',
      'CI/CD',
      'Amazon EC2',
      'Vercel',
      'Render',
      'Postman',
      'VS Code',
    ],
  },
];

// Flat export of distinct skills if needed
export const allResumeSkills = Array.from(
  new Set(resumeSkillGroups.flatMap((group) => group.items))
);
