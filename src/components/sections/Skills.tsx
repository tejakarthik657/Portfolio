import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeSkillGroups } from '../../data/skills';
import { Server, Brain, Code2, Database, Wrench, Sparkles } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  'Backend Architecture': <Server size={18} className="text-zinc-300" />,
  'AI & LLM Engineering': <Brain size={18} className="text-zinc-300" />,
  'AI-Assisted Engineering': <Sparkles size={18} className="text-zinc-300" />,
  'Languages & Frontend': <Code2 size={18} className="text-zinc-300" />,
  'Databases': <Database size={18} className="text-zinc-300" />,
  'DevOps, Cloud & Tooling': <Wrench size={18} className="text-zinc-300" />,
};

const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterTabs = [
    'All',
    'Backend Architecture',
    'AI & LLM Engineering',
    'AI-Assisted Engineering',
    'Languages & Frontend',
    'Databases',
    'DevOps, Cloud & Tooling',
  ];

  const displayedGroups =
    selectedFilter === 'All'
      ? resumeSkillGroups
      : resumeSkillGroups.filter((g) => g.category === selectedFilter);

  return (
    <section id="skills" className="py-24 bg-[#0e0f13] text-zinc-100 border-b border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-wider mb-2">
            <span>02 // Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
            Technical Skills & Tooling
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            Directly mapped to verified engineering experience across production backends, autonomous
            AI agent architectures, and enterprise RAG systems.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setSelectedFilter(tab)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-all ${
                  isActive
                    ? 'bg-zinc-200 text-zinc-950 font-semibold shadow-sm'
                    : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatePresence>
            {displayedGroups.map((group) => (
              <motion.div
                key={group.category}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="p-6 rounded-lg border border-zinc-800/90 bg-[#131419] hover:border-zinc-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-8 h-8 rounded border border-zinc-800 bg-zinc-900 flex items-center justify-center">
                      {categoryIcons[group.category] ?? <Server size={18} />}
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-white text-base tracking-tight">
                        {group.category}
                      </h3>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        {group.items.length} Skills
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 mb-5 leading-relaxed font-sans">
                    {group.description}
                  </p>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/70">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded border border-zinc-700/60 bg-zinc-900/90 text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
