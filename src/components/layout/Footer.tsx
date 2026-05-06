import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub',   icon: <Github size={16} />,   url: 'https://github.com/Nikhil-Madaravena' },
    { name: 'LinkedIn', icon: <Linkedin size={16} />, url: 'https://www.linkedin.com/in/nikhil-madaravena' },
    { name: 'Email',    icon: <Mail size={16} />,     url: 'mailto:nikhil.madaravena@gmail.com' },
  ];

  const navLinks = ['Home', 'About', 'Projects', 'Experience', 'Contact'];

  return (
    <footer className="bg-[#0d0d0e] border-t border-white/[0.06] pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 mb-14">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-sm bg-white flex items-center justify-center">
                <span className="font-display font-bold text-[#080808] text-sm leading-none">NM</span>
              </span>
              <span className="font-display font-semibold text-white text-sm">Nikhil Madaravena</span>
            </div>
            <p className="text-xs text-mono-600 leading-relaxed font-mono">
              Full-Stack Developer & Systems Engineer.<br />
              Building precision-crafted digital experiences.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-mono text-mono-600 tracking-widest uppercase mb-5">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-mono-500 hover:text-white transition-colors duration-300 font-medium"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Back to top */}
          <div>
            <h3 className="text-xs font-mono text-mono-600 tracking-widest uppercase mb-5">Connect</h3>
            <div className="flex gap-3 mb-8">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="p-2.5 border border-white/10 text-mono-500 rounded-sm hover:border-white/30 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.93 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            {/* Back to top */}
            <motion.a
              href="#home"
              className="inline-flex items-center gap-2 text-xs font-mono text-mono-600 hover:text-white tracking-widest uppercase transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              <ArrowUp size={13} />
              Back to Top
            </motion.a>
          </div>
        </div>

        {/* Bottom divider + copyright */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-mono-700 font-mono">
            © {currentYear} Nikhil Madaravena. All rights reserved.
          </p>
          <p className="text-xs text-mono-700 font-mono">
            Built with React · Three.js · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
