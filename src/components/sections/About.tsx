import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import profile from '../../assets/analysis.svg';
import Skills from './Skills';

const About: React.FC = () => {
  const controls = useAnimation();
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="about" className="py-20 bg-dark-50 dark:bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              About <span className="text-primary-500">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            <motion.div variants={itemVariants}>
              <div className="relative mt-16 w-full h-72 md:h-96 lg:h-[600px] rounded-lg">
                <img
                  src={profile}
                  alt="Developer"
                  className="w-full h-full"
                />
            </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center lg:items-start text-center lg:text-left px-4 sm:px-6 lg:px-10 py-6 max-w-5xl mx-auto"
            >
              {/* Who I Am */}
              <h3 className="relative text-2xl sm:text-3xl font-bold text-dark-900 dark:text-white mb-3 after:content-[''] after:absolute after:-bottom-1 after:left-1/2 lg:after:left-0 after:-translate-x-1/2 lg:after:-translate-x-0 after:w-16 after:h-1 after:bg-primary-500 after:rounded-full">
                Who I Am
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-dark-600 dark:text-dark-300 max-w-2xl mb-4 opacity-90">
                I'm a front-end developer passionate about building clean, responsive, and user-focused digital experiences. I combine design sensibility with technical precision to deliver intuitive interfaces.
              </p>

              {/* What I Do */}
              <h3 className="relative text-xl sm:text-2xl font-semibold text-dark-900 dark:text-white mt-6 mb-2 after:content-[''] after:absolute after:-bottom-1 after:left-1/2 lg:after:left-0 after:-translate-x-1/2 lg:after:-translate-x-0 after:w-14 after:h-1 after:bg-primary-500 after:rounded-full">
                What I Do
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-dark-600 dark:text-dark-300 max-w-2xl mb-4 opacity-90">
                I create modern web applications using <span className="font-medium text-dark-800 dark:text-white">React.js</span>, <span className="font-medium text-dark-800 dark:text-white">Three.js</span>, and <span className="font-medium text-dark-800 dark:text-white">Framer Motion</span>. My work blends performance, accessibility, and design precision.
              </p>

              {/* My Approach */}
              <h3 className="relative text-xl sm:text-2xl font-semibold text-dark-900 dark:text-white mt-6 mb-2 after:content-[''] after:absolute after:-bottom-1 after:left-1/2 lg:after:left-0 after:-translate-x-1/2 lg:after:-translate-x-0 after:w-14 after:h-1 after:bg-primary-500 after:rounded-full">
                My Approach
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-dark-600 dark:text-dark-300 max-w-2xl mb-3 opacity-90">
                I follow clean coding principles, emphasize scalability, and continuously explore new tools. Each project reflects thoughtful design and attention to detail.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-dark-600 dark:text-dark-300 max-w-2xl mb-3 opacity-90">
                I'm active in the open-source community and stay aligned with modern front-end practices to create polished, adaptable solutions.
              </p>

              {/* Final Call to Action */}
              <p className="text-sm sm:text-base leading-relaxed text-dark-600 dark:text-dark-300 max-w-2xl mt-4 opacity-90 font-medium">
                Open to new opportunities and collaborations — let’s build something impactful together.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;