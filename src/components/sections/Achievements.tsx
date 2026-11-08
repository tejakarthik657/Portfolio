import React from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, Lightbulb, Zap, Users, Brain } from 'lucide-react';

const Achievements: React.FC = () => {
  const categories = [
    {
      title: 'Hackathons & Technical Events',
      icon: <Award size={18} className="text-zinc-300" />,
      description:
        'Actively participated in public hackathons, engineering innovation challenges, and technical conferences focused on building solutions under rapid deadlines.',
      tags: ['Public Hackathons', 'Innovation Challenges', 'Technical Events'],
    },
    {
      title: 'Interests & Innovation',
      icon: <Compass size={18} className="text-zinc-300" />,
      description:
        'Passionate about practical problem-solving, collaborative teamwork, scalable business operations, and exploring emerging trends in agentic AI and modern infrastructure.',
      tags: ['Problem-Solving', 'Team Collaboration', 'Business Operations', 'Emerging AI'],
    },
    {
      title: 'Core Strengths',
      icon: <Brain size={18} className="text-zinc-300" />,
      description:
        'Grounded engineering execution supported by continuous learning, critical analysis, adaptability, creative problem framing, and decisive delivery.',
      tags: [
        'Analytical Thinking',
        'Clear Communication',
        'Adaptability',
        'Creativity',
        'Time Management',
        'Decision-Making',
      ],
    },
  ];

  return (
    <section id="achievements" className="py-24 bg-[#0e0f13] text-zinc-100 border-b border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-wider mb-2">
            <span>05 // Additional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
            Achievements & Core Strengths
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            Highlights from competitions, collaborative technical pursuits, and core engineering principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-6 rounded-lg border border-zinc-800/90 bg-[#121317] hover:border-zinc-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-md border border-zinc-700/80 bg-zinc-900 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-sans font-semibold text-white text-base mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-5">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/70">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded border border-zinc-800 bg-zinc-900/80 text-[10px] font-mono text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
