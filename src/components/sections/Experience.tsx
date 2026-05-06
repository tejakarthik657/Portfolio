import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { experiences } from '../../data/experience';
import { GraduationCap, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const educationItems = experiences.filter(exp => exp.type === 'education');
  const professionalItems = experiences.filter(exp => exp.type === 'experience');

  return (
    <section id="experience" className="py-32 bg-[#0d0d0e] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Watermark */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-[10%] text-[15vw] font-display font-bold text-white/[0.02] leading-none select-none pointer-events-none">
        HISTORY
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="flex items-center gap-6 mb-24">
            <span className="font-mono text-xs text-mono-500 tracking-[0.3em] uppercase">02 // Background</span>
            <div className="flex-1 h-px bg-white/[0.05]" />
          </motion.div>

          {/* Heading + Sub */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
            <div className="lg:col-span-6">
              <h2 className="font-display font-bold text-5xl sm:text-6xl text-white tracking-tighter leading-[1.1]">
                Education &<br />
                <span className="text-gradient">Experience.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 flex items-end">
              <p className="font-mono text-xs text-mono-500 leading-relaxed max-w-sm tracking-wide">
                Academic foundation and independent engineering work that defines my professional trajectory as a full-stack developer and systems engineer.
              </p>
            </div>
          </motion.div>

          {/* ─── EDUCATION ─── */}
          <motion.div variants={itemVariants} className="mb-24">
            {/* Column header */}
            <div className="flex items-center gap-5 mb-12 border-b border-white/[0.05] pb-6">
              <div className="w-9 h-9 flex items-center justify-center border border-white/10 bg-white/[0.02] rounded-sm text-white">
                <GraduationCap size={18} />
              </div>
              <span className="font-display font-semibold text-2xl text-white tracking-tight">Education</span>
              <div className="flex-1" />
              <span className="font-mono text-[10px] text-mono-600 tracking-widest uppercase">{educationItems.length} {educationItems.length === 1 ? 'Institution' : 'Institutions'}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {educationItems.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="lg:col-span-12 group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-10 border-b border-white/[0.04] hover:bg-white/[0.01] transition-colors duration-500 relative">
                    {/* Hover left indicator */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-white scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />

                    {/* Left: Duration + Institution */}
                    <div className="lg:col-span-4 flex flex-col gap-3 lg:pl-6">
                      <span className="font-mono text-[10px] text-white bg-white/10 px-3 py-1 rounded-sm tracking-widest w-fit">
                        {exp.duration}
                      </span>
                      <h3 className="font-display font-semibold text-xl text-white tracking-tight">{exp.role}</h3>
                      <span className="font-mono text-xs text-mono-500 uppercase tracking-widest">{exp.company}</span>
                    </div>

                    {/* Right: Description bullets */}
                    <div className="lg:col-span-8">
                      <ul className="flex flex-col gap-5">
                        {exp.description.map((point, pi) => (
                          <li key={pi} className="flex items-start gap-5 text-sm text-mono-400 leading-relaxed font-mono group-hover:text-mono-300 transition-colors duration-300">
                            <div className="flex items-center gap-3 shrink-0 pt-1">
                              <span className="font-mono text-[9px] text-mono-600 tracking-widest">
                                {String(pi + 1).padStart(2, '0')}
                              </span>
                              <div className="w-4 h-px bg-white/20" />
                            </div>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ─── EXPERIENCE ─── */}
          <motion.div variants={itemVariants}>
            {/* Column header */}
            <div className="flex items-center gap-5 mb-12 border-b border-white/[0.05] pb-6">
              <div className="w-9 h-9 flex items-center justify-center border border-white/10 bg-white/[0.02] rounded-sm text-white">
                <Briefcase size={18} />
              </div>
              <span className="font-display font-semibold text-2xl text-white tracking-tight">Experience</span>
              <div className="flex-1" />
              <span className="font-mono text-[10px] text-mono-600 tracking-widest uppercase">{professionalItems.length} {professionalItems.length === 1 ? 'Role' : 'Roles'}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {professionalItems.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="lg:col-span-12 group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-10 border-b border-white/[0.04] hover:bg-white/[0.01] transition-colors duration-500 relative">
                    {/* Hover left indicator */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-white scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />

                    {/* Left: Duration + Role */}
                    <div className="lg:col-span-4 flex flex-col gap-3 lg:pl-6">
                      <span className="font-mono text-[10px] text-white bg-white/10 px-3 py-1 rounded-sm tracking-widest w-fit">
                        {exp.duration}
                      </span>
                      <h3 className="font-display font-semibold text-xl text-white tracking-tight">{exp.role}</h3>
                      <span className="font-mono text-xs text-mono-500 uppercase tracking-widest">{exp.company}</span>
                      {/* Live indicator */}
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400/70 animate-pulse" />
                        <span className="font-mono text-[9px] text-green-400/70 uppercase tracking-widest">Active</span>
                      </div>
                    </div>

                    {/* Right: Description bullets */}
                    <div className="lg:col-span-8">
                      <ul className="flex flex-col gap-5">
                        {exp.description.map((point, pi) => (
                          <li key={pi} className="flex items-start gap-5 text-sm text-mono-400 leading-relaxed font-mono group-hover:text-mono-300 transition-colors duration-300">
                            <div className="flex items-center gap-3 shrink-0 pt-1">
                              <span className="font-mono text-[9px] text-mono-600 tracking-widest">
                                {String(pi + 1).padStart(2, '0')}
                              </span>
                              <div className="w-4 h-px bg-white/20" />
                            </div>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default Experience;