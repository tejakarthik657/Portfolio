import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { experiences } from '../../data/experience';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [controls, isInView]);

  useEffect(() => {
    [educationRef, experienceRef].forEach(ref => {
      if (!ref.current) return;
      const items = ref.current.querySelectorAll('.timeline-item');
      if (items.length === 0) return;

      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  };

  const educationItems = experiences.filter(exp => exp.type === 'education');
  const professionalItems = experiences.filter(exp => exp.type === 'experience');

  const renderTimeline = (items: typeof experiences, title: string, icon: React.ReactNode, ref: React.RefObject<HTMLDivElement>) => (
    <div className="flex-1">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-white/[0.03] border border-white/10 text-white">
          {icon}
        </div>
        <h3 className="font-display font-semibold text-2xl text-white tracking-wide">{title}</h3>
      </div>

      <div ref={ref} className="relative pl-8 border-l border-white/10">
        {items.map((exp) => (
          <div key={exp.id} className="timeline-item relative mb-12 last:mb-0">
            {/* Dot */}
            <div className="absolute -left-[37px] top-1.5 w-2.5 h-2.5 rounded-full bg-white ring-4 ring-[#080808]" />

            {/* Card */}
            <div className="glass-card rounded-sm p-6 hover:border-white/20 transition-all duration-300 group bg-white/[0.01]">
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div>
                  <h4 className="font-display font-semibold text-lg text-white mb-1">
                    {exp.role}
                  </h4>
                  <div className="flex items-center gap-2">
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-5 h-5 rounded-full object-cover opacity-80"
                      />
                    )}
                    <span className="text-sm text-mono-400">{exp.company}</span>
                  </div>
                </div>
                <span className="inline-block px-3 py-1 text-[10px] font-mono border border-white/10 text-mono-500 rounded-sm tracking-widest uppercase whitespace-nowrap bg-white/[0.03]">
                  {exp.duration}
                </span>
              </div>

              {/* Bullet points */}
              <ul className="space-y-2.5">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-mono-400 leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-white/20 shrink-0 group-hover:bg-white/40 transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-32 bg-[#080808] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div ref={containerRef} initial="hidden" animate={controls} variants={containerVariants}>

          {/* Section label */}
          <motion.div variants={itemVariants} className="flex items-center gap-6 mb-16">
            <span className="font-mono text-xs text-mono-500 tracking-[0.3em] uppercase">02 // Background</span>
            <div className="flex-1 h-px bg-white/[0.05]" />
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tighter leading-tight mb-4">
              Education &
              <span className="text-gradient"> Experience</span>
            </h2>
            <p className="text-mono-400 max-w-xl leading-relaxed">
              My academic foundation and professional journey as a systems engineer and full-stack developer.
            </p>
          </motion.div>

          {/* Two Column Layout for Timelines */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
            <motion.div variants={itemVariants}>
              {renderTimeline(educationItems, "Education", <GraduationCap size={20} />, educationRef)}
            </motion.div>
            <motion.div variants={itemVariants}>
              {renderTimeline(professionalItems, "Experience", <Briefcase size={20} />, experienceRef)}
            </motion.div>
          </div>

        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default Experience;