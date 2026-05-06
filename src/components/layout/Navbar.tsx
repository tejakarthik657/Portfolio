import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[rgba(8,8,8,0.92)] backdrop-blur-xl border-b border-white/[0.06] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setActiveLink('home')}
        >
          <span className="w-8 h-8 rounded-sm bg-white flex items-center justify-center">
            <span className="font-display font-bold text-[#080808] text-sm leading-none">NM</span>
          </span>
          <span className="hidden sm:block font-display font-semibold text-white/70 text-sm tracking-widest uppercase group-hover:text-white transition-colors duration-300">
            Nikhil Madaravena
          </span>
        </motion.a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={() => setActiveLink(link.id)}
                className={`relative text-sm font-medium tracking-wider uppercase transition-colors duration-300 pb-1 group ${
                  activeLink === link.id
                    ? 'text-white'
                    : 'text-mono-500 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-px bg-white transition-all duration-300 ${
                  activeLink === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <motion.a
          href="#contact"
          className="hidden md:flex items-center gap-2 px-4 py-2 border border-white/20 text-white/80 text-sm font-medium rounded-sm hover:bg-white hover:text-[#080808] transition-all duration-300 tracking-wider uppercase"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Hire Me
        </motion.a>

        {/* Mobile Hamburger */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-mono-400 hover:text-white transition-colors"
          whileTap={{ scale: 0.9 }}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-white/[0.06] bg-[rgba(8,8,8,0.97)] backdrop-blur-xl"
          >
            <ul className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a
                    href={link.href}
                    className="text-mono-300 hover:text-white text-base font-medium tracking-wider uppercase transition-colors block"
                    onClick={() => { setActiveLink(link.id); setIsMenuOpen(false); }}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }}>
                <a
                  href="#contact"
                  className="inline-block px-5 py-2.5 border border-white/20 text-white text-sm font-medium rounded-sm tracking-wider uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hire Me
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;