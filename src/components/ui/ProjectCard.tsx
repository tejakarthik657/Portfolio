import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../types';


interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent flipping when clicking a link
  };

  return (
    <motion.div
      className="relative w-full h-[400px] [perspective:1200px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div
        onClick={handleCardClick}
        className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]"
        style={{ transform: `rotateY(${isFlipped ? 180 : 0}deg)` }}
      >
        {/* Front */}
        <div className="absolute inset-0 rounded-xl overflow-hidden shadow-xl backface-hidden">
          <div className="relative h-full group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.techStack.slice(0, 3).map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs rounded-full bg-white/10 text-white"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="px-2 py-1 text-xs rounded-full bg-white/20 text-white/70">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>
              <p className="text-sm text-white/80 line-clamp-2">{project.description}</p>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] backface-hidden bg-white dark:bg-dark-800 rounded-xl shadow-xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-3">
              {project.title}
            </h3>
            <p className="text-sm text-dark-600 dark:text-dark-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex space-x-4 mt-6">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                onClick={handleLinkClick}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} className="mr-2" />
                Live Demo
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                onClick={handleLinkClick}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-dark-100 dark:bg-dark-700 text-dark-800 dark:text-dark-300 rounded-lg hover:bg-dark-200 dark:hover:bg-dark-600 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={16} className="mr-2" />
                View Code
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
