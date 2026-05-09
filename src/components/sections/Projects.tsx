import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '../../data/projects';
import { ArrowUpRight, Github } from 'lucide-react';
import DataStream from '../ui/DataStream';

// Infinite marquee ticker for tech stack
const TechTicker = ({ items }: { items: string[] }) => {
  const doubled = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden w-full relative">
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <motion.div
        animate={{ x: ['0%', '-33.33%'] }}
        transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
        className="flex gap-6 whitespace-nowrap w-max"
      >
        {doubled.map((tech, i) => (
          <span key={i} className="font-mono text-[10px] uppercase tracking-[0.3em] text-mono-500 flex items-center gap-6">
            {tech}
            <span className="w-1 h-1 bg-white/20 rounded-full inline-block" />
          </span>
        ))}
      </motion.div>
    </div>
  );
};

// Individual project with parallax
const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const acronymY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const isEven = index % 2 === 0;
  const acronym = project.title.replace(/[^a-zA-Z]/g, '').substring(0, 2).toUpperCase();

  return (
    <motion.div
      ref={ref}
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
    >
      {/* ── Sticky Label Column ── */}
      <div className={`lg:col-span-4 lg:sticky lg:top-32 h-fit ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className={`flex items-center gap-4 mb-6 ${isEven ? '' : 'lg:justify-end'}`}>
          <span className="font-mono text-xs text-white bg-white/10 px-3 py-1 rounded-sm tracking-widest">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="h-px w-8 bg-white/20" />
        </div>

        <h3 className={`font-display font-bold text-3xl lg:text-4xl text-white tracking-tighter uppercase leading-[0.9] mb-6 ${isEven ? '' : 'lg:text-right'}`}>
          {project.title.split(' — ')[0]}
        </h3>

        <div className={`flex flex-col gap-2 ${isEven ? '' : 'lg:items-end'}`}>
          {project.category.map(cat => (
            <span key={cat} className="font-mono text-[10px] text-mono-500 uppercase tracking-widest">
              {cat}
            </span>
          ))}
        </div>

        <div className={`mt-10 h-px bg-gradient-to-r ${isEven ? 'from-white/20 to-transparent' : 'from-transparent to-white/20'}`} />
      </div>

      {/* ── System Dashboard Card ── */}
      <div className={`lg:col-span-8 group ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="relative border border-white/10 bg-[#0a0a0a] overflow-hidden transition-all duration-700 group-hover:border-white/20 shadow-2xl shadow-black/40">

          {/* Top: Title graphic + Description */}
          <div className={`flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} border-b border-white/[0.05]`}>

            {/* Mini acronym graphic panel */}
            <div className="md:w-2/5 relative min-h-[180px] flex items-center justify-center overflow-hidden border-b md:border-b-0 border-white/[0.05] md:border-r border-white/[0.05] bg-[#080808] group/panel">
              <motion.span
                style={{ y: acronymY }}
                className="font-display font-bold text-[120px] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.06)] select-none pointer-events-none tracking-tighter transition-all duration-700 group-hover/panel:[-webkit-text-stroke:2px_rgba(255,255,255,0.3)] group-hover/panel:animate-glitch-skew"
              >
                {acronym}
              </motion.span>
              {/* Architectural grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)] transition-opacity duration-500 group-hover/panel:opacity-50" />
              
              {/* Scanline laser */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/70 shadow-[0_0_20px_rgba(255,255,255,0.9)] -translate-y-[100px] group-hover/panel:animate-laser-scan opacity-0 group-hover/panel:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Description panel */}
            <div className="md:w-3/5 p-7 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-3 h-px bg-white/30" />
                <span className="font-mono text-[9px] text-mono-500 tracking-[0.35em] uppercase">System_Overview</span>
              </div>
              <p className="font-mono text-sm text-mono-300 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          {/* Middle: Tech ticker marquee */}
          <div className="py-5 border-b border-white/[0.05]">
            <TechTicker items={project.techStack} />
          </div>

          {/* Bottom: Metrics + Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/[0.05]">

            {/* Highlights row */}
            <div className="grid grid-cols-3 divide-x divide-white/[0.05] overflow-hidden">
              {project.highlights.map(h => (
                <div key={h.label} className="flex flex-col gap-1 p-4 lg:p-5 overflow-hidden">
                  <span className="font-display font-bold text-xl lg:text-2xl text-white tracking-tighter truncate">{h.value}</span>
                  <span className="font-mono text-[8px] text-mono-600 uppercase tracking-[0.15em] leading-relaxed truncate">{h.label}</span>
                </div>
              ))}
            </div>

            {/* Action links */}
            <div className="flex flex-col gap-0 justify-center divide-y divide-white/[0.05]">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-6 py-4 text-white hover:bg-white hover:text-black transition-all duration-500 font-mono text-[11px] uppercase tracking-widest group/btn"
                >
                  Initialize Live System
                  <ArrowUpRight size={14} className="group-hover/btn:rotate-45 transition-transform" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-6 py-4 text-mono-500 hover:text-white transition-colors duration-300 font-mono text-[11px] uppercase tracking-widest group/btn"
                >
                  Access Source Code
                  <Github size={14} className="group-hover/btn:scale-110 transition-transform" />
                </a>
              )}
            </div>
          </div>

          {/* Animated bottom status bar */}
          <div className="h-1.5 bg-white/[0.03] w-full relative overflow-hidden">
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'linear' }}
              className="absolute top-0 bottom-0 w-1/4 bg-white/15 blur-sm"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="projects" className="py-32 bg-[#080808] relative overflow-hidden">
      <DataStream />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={containerVariants}
        >
          {/* Section label — same pattern as About / Achievements */}
          <motion.div variants={itemVariants} className="flex items-center gap-6 mb-24">
            <span className="font-mono text-xs text-mono-500 tracking-[0.3em] uppercase">03 // Selected Work</span>
            <div className="flex-1 h-px bg-white/[0.05]" />
          </motion.div>

          {/* Section heading */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32">
            <div className="lg:col-span-6">
              <h2 className="font-display font-bold text-5xl sm:text-6xl text-white tracking-tighter leading-[1.1]">
                Architectural<br />
                <span className="text-gradient">Deployments.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 flex items-end">
              <p className="font-mono text-xs text-mono-500 leading-relaxed tracking-wide max-w-sm">
                Full-stack deployments, in-memory architecture & high-performance interfaces — each system built to production scale.
              </p>
            </div>
          </motion.div>

          {/* Project cards — stacked with spacing matching rest of site */}
          <div className="flex flex-col gap-32 lg:gap-48">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default Projects;
