import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';
import FilterButton from '../ui/FilterButton';
import { projects } from '../../data/projects';
import { Sparkles } from 'lucide-react';


const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'Fullstack', value: 'fullstack' },
    { name: 'Featured', value: 'featured' },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category.includes(filter));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-dark-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-white leading-tight">
              My <span className="text-primary-500">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mt-4 mb-6 rounded"></div>
            <p className="text-dark-600 dark:text-dark-300 max-w-2xl mx-auto text-lg">
              A curated showcase of my standout projects, blending creativity, code, and cutting-edge technology.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((item) => (
              <FilterButton
                key={item.value}
                name={item.name}
                isActive={filter === item.value}
                onClick={() => setFilter(item.value)}
              />
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  lg:mx-16 gap-10"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center justify-center mt-12 text-center text-dark-500 dark:text-dark-400"
            >
              <Sparkles className="w-10 h-10 mb-4 text-primary-500 animate-pulse" />
              <p className="text-lg font-medium">No projects found in this category. Try another filter!</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
