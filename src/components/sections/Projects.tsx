import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import { ArrowUpRight, Github, Terminal, Cpu } from 'lucide-react';

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="projects" className="py-32 bg-[#080808] relative overflow-hidden">
      {/* Background architectural grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={containerVariants}
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="flex items-center gap-6 mb-24">
            <span className="font-mono text-xs text-mono-500 tracking-[0.3em] uppercase">03 // Selected Work</span>
            <div className="flex-1 h-px bg-white/[0.05]" />
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="mb-32">
            <h2 className="font-display font-bold text-5xl sm:text-7xl text-white tracking-tighter leading-[1.1]">
              Architectural <br/>
              <span className="text-gradient">Deployments.</span>
            </h2>
          </motion.div>

          {/* Vertical Case Studies */}
          <div className="flex flex-col gap-40 lg:gap-64">
            {projects.map((project, i) => {
              const isEven = i % 2 === 0;
              
              return (
                <motion.div 
                  key={project.id} 
                  variants={itemVariants}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
                >
                  {/* Title & Index Column */}
                  <div className={`lg:col-span-4 lg:sticky lg:top-32 h-fit ${isEven ? 'lg:order-1' : 'lg:order-2 lg:text-right'}`}>
                    <div className={`flex items-center gap-4 mb-6 ${isEven ? 'justify-start' : 'justify-end'}`}>
                      <span className="font-mono text-xs text-white bg-white/10 px-3 py-1 rounded-sm">0{i + 1}</span>
                      <div className="h-px w-8 bg-white/20" />
                    </div>
                    
                    <h3 className="font-display font-bold text-4xl lg:text-5xl text-white tracking-tighter uppercase leading-[0.9] mb-6">
                      {project.title.split(' — ')[0]}
                    </h3>
                    
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-[10px] text-mono-500 uppercase tracking-widest">
                        Type: {project.category.join(' + ')}
                      </span>
                      <span className="font-mono text-[10px] text-mono-500 uppercase tracking-widest">
                        Status: Active_Live
                      </span>
                    </div>

                    {/* Decorative line */}
                    <div className={`mt-12 w-full h-px bg-gradient-to-r ${isEven ? 'from-white/20 to-transparent' : 'from-transparent to-white/20'}`} />
                  </div>

                  {/* System Dashboard Card Column */}
                  <div className={`lg:col-span-8 group ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative border border-white/10 bg-[#0a0a0a] overflow-hidden transition-colors duration-500 group-hover:border-white/20 shadow-2xl shadow-black/40">
                      {/* Interior Scanlines Effect */}
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-20" />
                      
                      {/* Card Header: Description */}
                      <div className="p-8 lg:p-12 border-b border-white/10 relative z-10">
                        <div className={`flex items-center gap-3 mb-8 opacity-60 ${isEven ? 'justify-start' : 'justify-end'}`}>
                          <Terminal size={14} className="text-white" />
                          <span className="font-mono text-[10px] text-white tracking-[0.3em] uppercase">System_Overview</span>
                        </div>
                        <p className={`font-mono text-sm lg:text-base text-mono-300 leading-relaxed max-w-2xl italic border-white/20 pl-6 ${isEven ? 'border-l-2' : 'border-r-2 pr-6 text-right ml-auto'}`}>
                          {project.description}
                        </p>
                      </div>

                      {/* Card Body: Tech Stack & Actions */}
                      <div className="p-8 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                        {/* Tech Stack */}
                        <div className={`flex flex-col ${isEven ? '' : 'md:order-2'}`}>
                          <div className={`flex items-center gap-3 mb-8 opacity-60 ${isEven ? 'justify-start' : 'justify-end'}`}>
                            <Cpu size={14} className="text-white" />
                            <span className="font-mono text-[10px] text-white tracking-[0.3em] uppercase">Tech_Architecture</span>
                          </div>
                          <div className={`flex flex-wrap gap-2 ${isEven ? 'justify-start' : 'justify-end'}`}>
                            {project.techStack.map(tech => (
                              <span key={tech} className="font-mono text-[9px] uppercase tracking-[0.2em] text-mono-400 bg-white/5 border border-white/5 px-3 py-1.5 rounded-sm group-hover:text-white group-hover:border-white/20 transition-all duration-500">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Links */}
                        <div className={`flex flex-col gap-4 justify-end ${isEven ? '' : 'md:order-1'}`}>
                          {project.liveUrl && (
                            <a 
                              href={project.liveUrl} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="flex items-center justify-between w-full p-4 border border-white/10 bg-white/5 hover:bg-white text-white hover:text-black transition-all duration-500 font-mono text-xs uppercase tracking-widest"
                            >
                              <span>Initialize Live System</span>
                              <ArrowUpRight size={16} />
                            </a>
                          )}
                          {project.githubUrl && (
                            <a 
                              href={project.githubUrl} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className={`flex items-center justify-between w-full p-4 border border-transparent text-mono-500 hover:text-white transition-colors duration-300 font-mono text-xs uppercase tracking-[0.2em] ${isEven ? '' : 'flex-row-reverse'}`}
                            >
                              <span>Access Documentation</span>
                              <Github size={16} />
                            </a>
                          )}
                        </div>
                      </div>
                      
                      {/* Bottom stats decorative footer */}
                      <div className="h-2 bg-white/5 w-full relative overflow-hidden">
                         <motion.div 
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                          className="absolute top-0 bottom-0 w-1/3 bg-white/20 blur-sm"
                         />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
