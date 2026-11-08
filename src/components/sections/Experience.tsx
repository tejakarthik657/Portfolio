import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../../data/experience';
import { Briefcase, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#0e0f13] text-zinc-100 border-b border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-wider mb-2">
            <span>03 // Work History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
            Work Experience & Agency
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            Engineering roles spanning freelance agency leadership at DevFrames, backend platform
            architecture, and full-stack software development.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const isDevFrames = exp.company === 'DevFrames';

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`p-6 sm:p-8 rounded-lg border transition-all ${
                  isDevFrames
                    ? 'border-zinc-700 bg-[#14151b] shadow-lg shadow-black/25'
                    : 'border-zinc-800/90 bg-[#121317] hover:border-zinc-700'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md border border-zinc-700/80 bg-zinc-900 flex items-center justify-center shrink-0">
                      <Briefcase size={18} className="text-zinc-300" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-sans font-bold text-lg text-white">
                          {exp.company}
                        </h3>
                        {exp.badge && (
                          <span
                            className={`text-[11px] font-mono px-2.5 py-0.5 rounded border ${
                              isDevFrames
                                ? 'bg-zinc-800 text-zinc-200 border-zinc-600 font-semibold'
                                : 'bg-zinc-900 text-zinc-400 border-zinc-800'
                            }`}
                          >
                            {exp.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-mono text-zinc-300 font-medium">{exp.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:text-right">
                    <span className="font-mono text-xs text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded">
                      {exp.duration}
                    </span>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-white transition-colors p-1"
                        title="Agency Website / Repository"
                      >
                        <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description Bullets */}
                <div className="mt-5 pt-4 border-t border-zinc-800/70">
                  <ul className="space-y-2.5">
                    {exp.description.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300 leading-relaxed font-sans">
                        <CheckCircle2
                          size={15}
                          className="text-zinc-500 mt-1 shrink-0"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
