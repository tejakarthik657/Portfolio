// Skills.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProgressBar from '../ui/ProgressBar';
import { skills } from '../../data/skills';
import {
  FaAtom,
  FaServer,
  FaCode,
  FaMapMarkedAlt,
  FaPalette,
  FaWrench,
} from 'react-icons/fa';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skillCategories = [
  { name: 'Frontend', category: 'frontend', icon: <FaAtom className="w-5 h-5" /> },
  { name: 'Backend', category: 'backend', icon: <FaServer className="w-5 h-5" /> },
  { name: 'Programming', category: 'programming', icon: <FaCode className="w-5 h-5" /> },
  { name: 'Visualization', category: 'visualization', icon: <FaMapMarkedAlt className="w-5 h-5" /> },
  { name: 'Design', category: 'design', icon: <FaPalette className="w-5 h-5" /> },
  { name: 'Tools', category: 'tools', icon: <FaWrench className="w-5 h-5" /> },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const getIconComponent = (iconName: string) => {
  if (iconName.toLowerCase() === 'vscvscode') return VscVscode;
  if (iconName.startsWith('Si')) {
    return SiIcons[iconName as keyof typeof SiIcons] ?? FaIcons.FaQuestion;
  }
  return FaIcons[iconName as keyof typeof FaIcons] ?? FaIcons.FaQuestion;
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.1 }}
      variants={itemVariants}
      className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
    >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mt-16 text-dark-900 dark:text-white mb-4">
              Technical <span className="text-primary-500">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          </motion.div>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {skillCategories.map((category) => (
          <motion.button
            key={category.name}
            onClick={() => setActiveCategory(category.category)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-base font-semibold transition-all border ${
              activeCategory === category.category
                ? 'bg-primary-600 text-white border-primary-600 shadow-md'
                : 'bg-white dark:bg-dark-800 text-dark-800 dark:text-dark-300 border-dark-200 dark:border-dark-600 hover:bg-dark-100 dark:hover:bg-dark-700'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.icon}
            {category.name}
          </motion.button>
        ))}
      </div>

      <div className="space-y-4">
        {skills
          .filter((skill) => skill.category === activeCategory)
          .map((skill) => {
            const Icon = getIconComponent(skill.icon);

            return (
              <ProgressBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                icon={Icon}
              />
            );
          })}
      </div>
    </motion.div>
  );
};

export default Skills;
