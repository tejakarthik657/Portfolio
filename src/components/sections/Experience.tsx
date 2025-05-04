import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { experiences } from '../../data/experience';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  useEffect(() => {
    if (!timelineRef.current) return;

    const timeline = timelineRef.current;
    const timelineItems = timeline.querySelectorAll('.timeline-item');

    gsap.fromTo(
      timelineItems,
      {
        opacity: 0,
        x: index => (index % 2 === 0 ? -50 : 50),
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.3,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: timeline,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

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
    <section id="experience" className="py-20 bg-dark-50 dark:bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              Work <span className="text-primary-500">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
              My professional journey as a frontend developer, showcasing my roles and accomplishments.
            </p>
          </motion.div>

          <div ref={timelineRef} className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary-500/30"></div>

            {/* Timeline items */}
            {experiences.map((experience, index) => (
              <div 
                key={experience.id}
                className={`timeline-item mb-12 md:mb-24 flex flex-col ${
                  index % 2 === 0 
                    ? 'md:flex-row' 
                    : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2"></div>
                
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary-500 border-4 border-white dark:border-dark-900"></div>
                
                {/* Content card */}
                <div className="md:w-1/2 pl-8 md:px-8">
                  <div className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-dark-900 dark:text-white">
                          {experience.role}
                        </h3>
                        <div className="flex items-center mt-1">
                          <img 
                            src={experience.logo} 
                            alt={experience.company}
                            className="w-6 h-6 rounded-full object-cover mr-2"
                          />
                          <p className="text-dark-600 dark:text-dark-400">
                            {experience.company}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300">
                          {experience.duration}
                        </span>
                      </div>
                    </div>
                    
                    <ul className="list-disc pl-5 text-dark-600 dark:text-dark-300 space-y-2">
                      {experience.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;