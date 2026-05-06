import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const achievements = [
  {
    year: '2024',
    title: 'TCS National Qualifier Test (NQT)',
    category: 'Assessment',
    award: '100% Programming Score',
    organization: 'Tata Consultancy Services',
  },
  {
    year: '2024',
    title: 'NASA Space Apps Challenge',
    category: 'Hackathon',
    award: 'Local Nominee & Regional Winner',
    organization: 'Chandigarh University',
  },
  {
    year: '2024',
    title: 'Google Cloud Computing Foundations',
    category: 'Certification',
    award: 'Certified',
    organization: 'Google Cloud',
  },
  {
    year: '2024',
    title: 'CODE4KITSW',
    category: 'Competition',
    award: 'Winner',
    organization: 'KITSW Technical Club',
  },
  {
    year: '2023',
    title: 'C Programming Assessment',
    category: 'Certification',
    award: 'Gold 6-Star Badge',
    organization: 'HackerRank',
  },
  {
    year: '2023',
    title: 'Java Assessment',
    category: 'Certification',
    award: 'Silver Badge',
    organization: 'HackerRank',
  },
];

const Achievements: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="achievements" className="py-32 bg-[#080808] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="flex items-center gap-6 mb-24">
            <span className="font-mono text-xs text-mono-500 tracking-[0.3em] uppercase">04 // Citations</span>
            <div className="flex-1 h-px bg-white/[0.05]" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
            
            {/* Header Column */}
            <motion.div variants={itemVariants} className="lg:col-span-4 lg:sticky lg:top-32">
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tighter leading-[1.1] mb-6">
                Recognitions &<br />
                <span className="text-gradient">Milestones.</span>
              </h2>
              <p className="text-mono-400 text-sm leading-relaxed max-w-sm">
                A ledger of competitive programming achievements, hackathon citations, and global platform certifications.
              </p>
              
              {/* Decorative graphic */}
              <div className="mt-12 w-24 h-24 border border-white/10 rounded-full flex items-center justify-center relative">
                 <div className="absolute inset-0 rounded-full border border-white/20 animate-[spin_10s_linear_infinite]" style={{ borderTopColor: 'transparent', borderBottomColor: 'transparent' }} />
                 <div className="w-1.5 h-1.5 bg-white rounded-full" />
              </div>
            </motion.div>

            {/* Table / Ledger Column */}
            <motion.div variants={itemVariants} className="lg:col-span-8 w-full flex flex-col">
              <div className="flex flex-col border-t border-white/[0.05]">
                {achievements.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="group relative flex flex-col md:flex-row md:items-center justify-between py-8 md:py-12 border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors duration-500 cursor-default px-6 -mx-6 rounded-sm overflow-hidden"
                  >
                    {/* Hover indicator line */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-white scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-500" />
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 md:w-3/5">
                      <span className="font-mono text-xs text-mono-500 tracking-widest">{item.year}</span>
                      <h3 className="font-display text-2xl md:text-3xl text-mono-300 group-hover:text-white transition-colors duration-500 tracking-tight">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between md:w-2/5 mt-6 md:mt-0">
                      <div className="flex flex-col gap-1.5">
                        <span className="font-mono text-xs text-white tracking-widest uppercase">{item.award}</span>
                        <span className="font-mono text-[10px] text-mono-500 tracking-widest uppercase">{item.organization}</span>
                      </div>
                      
                      <div className="w-10 h-10 rounded-full border border-white/[0.05] flex items-center justify-center bg-[#0a0a0a] group-hover:border-white/20 group-hover:bg-white group-hover:text-[#080808] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-500">
                        <ArrowUpRight size={18} className="transform transition-transform duration-500 group-hover:rotate-45" />
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