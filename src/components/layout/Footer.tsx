import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub',   icon: <Github size={16} />,   url: 'https://github.com/tejakarthik657' },
    { name: 'LinkedIn', icon: <Linkedin size={16} />, url: 'https://www.linkedin.com/in/karthik-kona-dev/' },
    { name: 'Email',    icon: <Mail size={16} />,     url: 'mailto:teja.karthik.5505@gmail.com' },
  ];

  const navLinks = ['Home', 'About', 'Experience', 'Projects', 'Contact'];

  return (
    <footer className="bg-[#0d0d0e] border-t border-white/[0.06] pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 mb-14">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-5 mb-6 group cursor-default">
              <div className="relative flex items-center justify-center w-9 h-9">
                {/* The Core Box */}
                <div className="relative z-10 w-full h-full border border-white/20 group-hover:border-white/50 bg-[#050505] transition-colors duration-500 flex flex-col justify-between p-1 overflow-hidden">
                  
                  {/* Internal Scanline */}
                  <div className="absolute inset-0 bg-white/[0.03] -translate-y-full group-hover:translate-y-full transition-transform duration-[1.5s] ease-in-out" />
                  
                  {/* Top Row */}
                  <div className="flex justify-between items-start w-full relative z-10">
                    <span className="font-mono text-[8px] font-bold leading-none text-white tracking-widest">N</span>
                    <div className="flex gap-0.5">
                      <div className="w-1 h-1 bg-white/20 group-hover:bg-white transition-colors duration-500 delay-100" />
                      <div className="w-1 h-1 bg-white/20 group-hover:bg-white transition-colors duration-500 delay-200" />
                    </div>
                  </div>
                  
                  {/* Bottom Row */}
                  <div className="flex justify-between items-end w-full relative z-10">
                    <div className="flex flex-col gap-[1px] w-full pr-2 pb-0.5">
                      <div className="w-full h-px bg-white/20 group-hover:bg-white/50 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 delay-100" />
                      <div className="w-2/3 h-px bg-white/20 group-hover:bg-white/50 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 delay-200" />
                    </div>
                    <span className="font-mono text-[8px] font-bold leading-none text-white tracking-widest">M</span>
                  </div>
                  
                  {/* Targeting Reticle Corners */}
                  <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Surrounding Frame */}
                <div className="absolute inset-[-4px] border border-white/5 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-500 pointer-events-none" />
              </div>

              <div className="flex flex-col justify-center gap-1">
                  <span className="font-display font-bold text-white text-xs tracking-[0.2em] uppercase transition-all duration-500 group-hover:tracking-[0.25em]">
                    Teja Karthik
                </span>
                <div className="flex items-center gap-2">
                  <div className="h-px bg-white/20 w-4 group-hover:w-8 transition-all duration-500" />
                  <span className="font-mono text-[8px] text-mono-500 tracking-[0.3em] uppercase leading-none group-hover:text-white transition-colors duration-500">
                      Full_Stack_Node // 01
                  </span>
                </div>
              </div>
            </div>
            <p className="text-xs text-mono-600 leading-relaxed font-mono">
                Full-Stack Developer focused on backend engineering, secure web systems, and AI-assisted workflows.<br />
                Building clean, modern digital experiences with purpose.
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
            © {currentYear} Teja Karthik. All rights reserved.
          </p>
          <p className="text-xs text-mono-700 font-mono">
            Built with React · TypeScript · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
