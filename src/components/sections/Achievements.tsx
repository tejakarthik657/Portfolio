import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Award, Code2, Globe } from 'lucide-react';

const achievements = [
  {
    year: '2025',
    title: 'Adobe Hackathon 2025',
    category: 'Hackathon',
    award: 'Finalist (Top 5%)',
    organization: 'Among 1000+ teams',
    icon: <Award size={16} />,
  },
  {
    year: '2025',
    title: 'Junior Software Engineer Intern',
    category: 'Work',
    award: 'Full-Stack Development',
    organization: 'SuPrazo Technologies',
    icon: <Code2 size={16} />,
  },
  {
    year: '2025',
    title: 'Cybersecurity Internship',
    category: 'Specialization',
    award: 'OWASP & Penetration Testing',
    organization: 'Edu Tantr',
    icon: <Award size={16} />,
  },
  {
    year: '2025',
    title: 'Digital Marketing Internship',
    category: 'Experience',
    award: 'SEO & Analytics Expert',
    organization: 'SVAPPS Soft Solutions',
    icon: <Globe size={16} />,
  },
  {
    year: '2024',
    title: 'TerritoryRun (Runnify)',
    category: 'Project Deployment',
    award: 'Production-Ready Platform',
    organization: 'Gamified Fitness',
    icon: <Code2 size={16} />,
  },
  {
    year: '2023',
    title: 'Core Technical Team Member',
    category: 'Leadership',
    award: 'Workshops & Events',
    organization: 'KITSW Technical Club',
    icon: <Award size={16} />,
  },
];

const Achievements: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section ref={containerRef} id="achievements" className="py-32 bg-[#080808] relative overflow-hidden">
      {/* ── Background Grid ── */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-50">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* ── Section Header ── */}
          <motion.div variants={itemVariants} className="flex items-center justify-between mb-24 border-b border-white/[0.05] pb-8">
            <div className="flex items-center gap-6">
              <span className="font-mono text-xs text-mono-500 tracking-[0.3em] uppercase">04</span>
              <div className="w-12 h-px bg-white/20" />
              <span className="font-mono text-xs text-white tracking-[0.3em] uppercase">Recognitions</span>
            </div>
            <div className="hidden md:flex items-center gap-12">
              <div className="flex flex-col items-end">
                <span className="font-display font-bold text-3xl text-white leading-none">06</span>
                <span className="font-mono text-[9px] text-mono-500 tracking-widest uppercase mt-1">Citations</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-display font-bold text-3xl text-white leading-none">03</span>
                <span className="font-mono text-[9px] text-mono-500 tracking-widest uppercase mt-1">Certifications</span>
              </div>
            </div>
          </motion.div>

          {/* ── Main Content Grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
            
            {/* Left: Sticky Header Pane */}
            <motion.div 
              variants={itemVariants} 
              className="lg:col-span-4 lg:sticky lg:top-32"
              style={{ y: headerY }}
            >
              <h2 className="font-display font-bold text-[clamp(2.5rem,4vw,3.5rem)] text-white tracking-tighter leading-[0.95] mb-8 uppercase">
                Milestones &<br />
                <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.4)]">Global Impact</span>
              </h2>
              <p className="font-mono text-xs text-mono-400 leading-relaxed max-w-sm mb-12">
                A verified ledger of competitive programming achievements, hackathon citations, and global platform certifications.
              </p>
              
              {/* Animated Geometry Badge */}
              <div className="w-20 h-20 relative">
                <div className="absolute inset-0 border border-white/20 rotate-45 animate-[spin_8s_linear_infinite]" />
                <div className="absolute inset-2 border border-white/10 -rotate-45 animate-[spin_12s_linear_infinite_reverse]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Award size={20} className="text-white/50" />
                </div>
              </div>
            </motion.div>

            {/* Right: Data Ledger */}
            <motion.div variants={itemVariants} className="lg:col-span-8 w-full flex flex-col">
              <div className="flex flex-col border-t border-white/[0.05]">
                {achievements.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="group relative flex flex-col py-8 lg:py-10 border-b border-white/[0.05] transition-all duration-500 cursor-default"
                  >
                    {/* Hover Fill Background */}
                    <div className="absolute inset-0 bg-white/[0.02] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
                    
                    {/* Hover Left Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-white scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 z-10" />

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center px-4 lg:px-8">
                      
                      {/* Col 1: Year & Category */}
                      <div className="md:col-span-3 flex flex-col gap-2">
                        <span className="font-mono text-xl text-white tracking-widest">{item.year}</span>
                        <div className="flex items-center gap-2 text-mono-500 group-hover:text-white transition-colors duration-300">
                          {item.icon}
                          <span className="font-mono text-[9px] uppercase tracking-[0.2em]">{item.category}</span>
                        </div>
                      </div>

                      {/* Col 2: Title & Organization */}
                      <div className="md:col-span-5 flex flex-col">
                        <h3 className="font-display font-bold text-2xl text-mono-300 group-hover:text-white transition-all duration-500 tracking-tight group-hover:-translate-y-0.5">
                          {item.title}
                        </h3>
                        <span className="font-mono text-[10px] text-mono-600 uppercase tracking-widest mt-3 group-hover:text-mono-400 transition-colors duration-500">
                          {item.organization}
                        </span>
                      </div>

                      {/* Col 3: Award & Action */}
                      <div className="md:col-span-4 flex items-center justify-between md:justify-end gap-6">
                        <div className="flex items-center gap-3">
                          <div className="w-1 h-1 bg-white/20 group-hover:bg-green-400 rotate-45 transition-colors duration-500" />
                          <span className="font-mono text-[10px] text-white uppercase tracking-widest text-right">{item.award}</span>
                        </div>
                        
                        <div className="w-8 h-8 rounded-sm border border-white/[0.05] flex items-center justify-center bg-transparent group-hover:border-white/20 group-hover:bg-white group-hover:text-[#080808] transition-all duration-500 shrink-0">
                          <ArrowUpRight size={14} className="opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
                        </div>
                      </div>

                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default Achievements;