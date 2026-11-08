import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-[#0d0e12] text-zinc-100 border-b border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-wider mb-2">
            <span>05 // Selected Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            Production-grade systems, autonomous AI agents, real-time spatial platforms, and
            enterprise RAG architectures built, tested, and shipped.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => {
            const isVibe = project.title === 'Vibe';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-7 rounded-lg border border-zinc-800/90 bg-[#121317] hover:border-zinc-700 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block mb-1">
                        Project // 0{idx + 1}
                      </span>
                      <h3 className="font-sans font-bold text-xl text-white tracking-tight">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="text-xs font-mono text-zinc-400 mt-0.5">
                          {project.subtitle}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-colors"
                          title="View Source on GitHub"
                        >
                          <Github size={15} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-white transition-colors"
                          title={isVibe ? 'Open on VS Code Marketplace' : 'Open Live Demo'}
                        >
                          <span>{isVibe ? 'Marketplace' : 'Live Demo'}</span>
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-300 font-sans leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 py-3 px-3.5 mb-6 rounded border border-zinc-800/80 bg-zinc-900/50">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="text-center">
                          <span className="block font-sans font-bold text-sm text-white">
                            {h.value}
                          </span>
                          <span className="block font-mono text-[9px] text-zinc-400 uppercase tracking-wider">
                            {h.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Tech Stack */}
                <div className="pt-4 border-t border-zinc-800/70">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded border border-zinc-700/60 bg-zinc-900 text-[11px] font-mono text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
