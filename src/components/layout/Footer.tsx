import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com/' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://linkedin.com/' },
    { name: 'Email', icon: <Mail size={20} />, url: 'mailto:nikhil.madaravena@gmail.com' },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
    hover: { 
      scale: 1.2, 
      color: '#ff5733',
      transition: { duration: 0.2 } 
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
      className="bg-dark-100 dark:bg-dark-900 py-12 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-display font-bold text-primary-500 mt-16 mb-4">
              <span className="text-dark-900 dark:text-white">Nikhil </span>
              Madaravena
            </h2>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-dark-600 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-dark-600 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-dark-600 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-dark-600 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white dark:bg-dark-800 text-dark-500 dark:text-dark-300 rounded-full hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  aria-label={link.name}
                  custom={i}
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-dark-200 dark:border-dark-700">
          <p className="text-center text-dark-500 dark:text-dark-400">
            © {currentYear} Nikhil Madaravena. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;