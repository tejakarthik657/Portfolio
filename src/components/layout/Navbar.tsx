import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

const navLinks = [
  { name: 'Home',     href: '#home',     id: 'home' },
  { name: 'About',    href: '#about',    id: 'about' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Contact',  href: '#contact',  id: 'contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled]   = useState(false);
  const [isMenuOpen, setIsMenuOpen]   = useState(false);
  const [activeLink, setActiveLink]   = useState('home');
  const [currentTime, setCurrentTime] = useState('');
  const navRef   = useRef<HTMLElement>(null);
  const logoRef  = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const ctaRef   = useRef<HTMLAnchorElement>(null);

  // Clock
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // GSAP entrance
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    if (logoRef.current && linksRef.current && ctaRef.current) {
      tl.fromTo(navRef.current, { opacity: 0 }, { opacity: 1, duration: 0.01 })
        .fromTo(logoRef.current,
          { opacity: 0, x: -24 },
          { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' })
        .fromTo(
          linksRef.current.querySelectorAll('li'),
          { opacity: 0, y: -12 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo(ctaRef.current,
          { opacity: 0, x: 24 },
          { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.4'
        );
    }
  }, []);

  return (
    <nav
      ref={navRef}
      style={{ opacity: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[rgba(8,8,8,0.92)] backdrop-blur-xl border-b border-white/[0.06] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a ref={logoRef} href="#home" onClick={() => setActiveLink('home')} className="flex items-center gap-4 group">
          <div className="w-9 h-9 bg-white flex items-center justify-center rounded-sm group-hover:bg-mono-200 transition-colors duration-300">
            <span className="font-display font-bold text-[#080808] text-sm leading-none tracking-tight">NM</span>
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-display font-semibold text-white text-sm tracking-widest uppercase group-hover:text-mono-200 transition-colors duration-300">
              Nikhil Madaravena
            </span>
            <span className="font-mono text-[9px] text-mono-600 tracking-[0.25em] uppercase mt-0.5">
              Full-Stack · Systems Engineer
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul ref={linksRef} className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={() => setActiveLink(link.id)}
                className={`relative text-[11px] font-mono tracking-[0.25em] uppercase transition-colors duration-300 pb-1 group ${
                  activeLink === link.id ? 'text-white' : 'text-mono-500 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-px bg-white transition-all duration-400 ${
                  activeLink === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Live Clock + CTA */}
        <div className="hidden md:flex items-center gap-6">
          {/* Live Clock */}
          <div className="flex items-center gap-2 border-r border-white/[0.07] pr-6">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400/80 animate-pulse" />
            <span className="font-mono text-[10px] text-mono-600 tabular-nums tracking-widest">{currentTime}</span>
          </div>
          {/* Hire Me */}
          <a
            ref={ctaRef}
            href="#contact"
            className="flex items-center gap-2 px-5 py-2 border border-white/20 text-white text-[11px] font-mono tracking-[0.2em] uppercase hover:bg-white hover:text-[#080808] transition-all duration-400 rounded-sm"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-mono-400 hover:text-white transition-colors"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t border-white/[0.06] bg-[rgba(8,8,8,0.98)] backdrop-blur-xl"
          >
            <ul className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-4 text-mono-400 hover:text-white text-base font-mono tracking-widest uppercase transition-colors"
                    onClick={() => { setActiveLink(link.id); setIsMenuOpen(false); }}
                  >
                    <span className="text-[10px] text-mono-600">{String(i + 1).padStart(2, '0')}</span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.32 }}>
                <a
                  href="#contact"
                  className="inline-block px-6 py-3 border border-white/20 text-white text-sm font-mono tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hire Me
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;