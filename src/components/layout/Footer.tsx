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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
    hover: { 
      scale: 1.25, 
      color: '#ff5733',
      transition: { duration: 0.3, ease: 'easeOut' } 
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
      className="bg-dark-900 dark:bg-dark-900 text-white py-12 px-6 sm:px-8 md:px-16"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-64">
          {/* Left section: Name */}
          <div className="md:col-span-1">
            <h2 className="text-3xl font-display font-bold text-primary-500 mb-4">
              <span className="text-white">Nikhil </span> Madaravena
            </h2>
            <p className="text-lg text-dark-300">
              Frontend Developer | UI/UX Designer
            </p>
          </div>

          {/* Middle section: Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#home" 
                  className="text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right section: Social Icons */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-white mb-4">Connect</h3>
            <div className="flex space-x-6">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-dark-800 text-dark-500 dark:text-dark-300 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
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

        {/* Bottom section: Copyright */}
        <div className="mt-10 pt-8 border-t border-dark-200 dark:border-dark-700">
          <p className="text-center text-dark-400 dark:text-dark-300 text-sm">
            © {currentYear} Nikhil Madaravena. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
