import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../../data/skills';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const getIconComponent = (iconName: string) => {
  if (iconName.toLowerCase() === 'vscvscode') return VscVscode;
  if (iconName.startsWith('Si')) return SiIcons[iconName as keyof typeof SiIcons] ?? FaIcons.FaQuestion;
  return FaIcons[iconName as keyof typeof FaIcons] ?? FaIcons.FaQuestion;
};

const skillCategories = [
  { name: 'Frontend', id: 'frontend' },
  { name: 'Backend', id: 'backend' },
  { name: 'Systems', id: 'programming' },
  { name: 'Visualization', id: 'visualization' },
  { name: 'Architecture', id: 'design' },
  { name: 'Infrastructure', id: 'tools' },
];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    },
    exit: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.2 } }
  };

  return (
    <div className="w-full relative">
      {/* Subtle background illumination */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-white/[0.02] blur-[100px] pointer-events-none" />

      {/* Header & Command Menu */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 relative z-10">
        <div className="max-w-md">
          <h3 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h3>
          <p className="text-mono-400 text-sm leading-relaxed">
            A modular breakdown of my active technology stack. Progress bars are obsolete; these are active systems.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="flex flex-wrap gap-2">
          {skillCategories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`group flex items-center gap-3 px-4 py-2 border transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'border-white/30 bg-white/[0.03]'
                  : 'border-white/[0.05] hover:border-white/15'
              }`}
            >
              <span className={`text-[10px] font-mono tracking-widest transition-colors duration-300 ${
                activeCategory === cat.id ? 'text-white' : 'text-mono-600 group-hover:text-mono-400'
              }`}>
                0{i + 1}
              </span>
              <span className={`text-[11px] font-mono tracking-widest uppercase transition-colors duration-300 ${
                activeCategory === cat.id ? 'text-white' : 'text-mono-500 group-hover:text-white'
              }`}>
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Module Grid Display */}
      <div className="relative min-h-[320px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {skills
              .filter((s) => s.category === activeCategory)
              .map((skill, index) => {
                const Icon = getIconComponent(skill.icon);
                
                // Determine text label instead of percentage
                const masteryLabel = skill.percentage >= 90 ? 'Mastery' : skill.percentage >= 80 ? 'Advanced' : 'Proficient';

                return (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="relative group p-6 border border-white/[0.05] bg-gradient-to-b from-transparent to-white/[0.01] hover:border-white/20 transition-all duration-500 overflow-hidden cursor-default"
                  >
                    {/* Hover Glow Background */}
                    <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    {/* Animated Targeting Brackets */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0" />

                    <div className="flex items-start justify-between mb-10 relative z-10">
                      {/* Icon Block */}
                      <div className="w-12 h-12 flex items-center justify-center rounded-sm border border-white/[0.08] bg-[#0a0a0a] group-hover:bg-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-500">
                        <Icon className="w-6 h-6 text-mono-400 group-hover:text-[#080808] transition-colors duration-500" />
                      </div>
                      
                      {/* Identifier */}
                      <div className="text-[10px] font-mono text-mono-600 tracking-widest text-right leading-relaxed">
                        MOD_<br/>{String(index + 1).padStart(2, '0')}
                      </div>
                    </div>

                    <div className="relative z-10 flex flex-col justify-end">
                      <h4 className="font-display font-semibold text-white tracking-wide text-lg mb-3">{skill.name}</h4>
                      
                      {/* Status Row */}
                      <div className="flex items-center justify-between border-t border-white/[0.05] pt-4 mt-1">
                        {/* Status Pulse */}
                        <div className="flex gap-1.5">
                          <div className="w-1 h-1 bg-white/10 group-hover:bg-white/80 group-hover:animate-pulse transition-colors duration-300 delay-75" />
                          <div className="w-1 h-1 bg-white/10 group-hover:bg-white/50 transition-colors duration-300 delay-150" />
                          <div className="w-1 h-1 bg-white/10 group-hover:bg-white/30 transition-colors duration-300 delay-200" />
                        </div>
                        
                        {/* Classification Label */}
                        <span className="text-[10px] font-mono text-mono-600 uppercase tracking-widest group-hover:text-mono-300 transition-colors duration-300">
                          {masteryLabel}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Skills;
