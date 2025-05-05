import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Star, Trophy } from 'lucide-react';

const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'NASA Space Apps Challenge',
      subtitle: 'Local Nominee',
      description: 'National-level hackathon at Chandigarh University'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'CODE4KITSW',
      subtitle: 'Winner',
      description: 'C programming competition conducted by the technical club KITSW'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'HackerRank C Programming',
      subtitle: 'Gold 6-star Badge',
      description: 'Advanced proficiency in C programming concepts'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'HackerRank Java',
      subtitle: 'Silver Badge',
      description: 'Demonstrated expertise in Java programming'
    }
  ];

const Achievements: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-dark-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              My <span className="text-primary-500">Achievements</span>
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
              Recognition and accomplishments from my journey in technology and programming.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                className="bg-dark-50 dark:bg-dark-800 rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary-500 text-white">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <h4 className="text-lg font-semibold text-primary-500 mb-2">
                  {achievement.subtitle}
                </h4>
                <p className="text-dark-600 dark:text-dark-300">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;