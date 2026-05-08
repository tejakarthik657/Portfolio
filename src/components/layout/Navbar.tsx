import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, FileText, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import cvUrl from '../../assets/CV.pdf';

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
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const navRef   = useRef<HTMLElement>(null);
  const logoRef  = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const ctaRef   = useRef<HTMLButtonElement>(null);

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

  // CV Modal body scroll lock
  useEffect(() => {
    if (isCvModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isCvModalOpen]);

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
          {/* CV Modal Trigger */}
          <button 
            ref={ctaRef}
            onClick={() => setIsCvModalOpen(true)}
            className="group relative flex items-center gap-2 bg-[#050505] border border-white/[0.15] hover:border-white/40 transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(255,255,255,0.05)] rounded-sm px-5 py-2.5"
          >
            <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-sm" />
            
            <FileText size={14} className="text-mono-500 group-hover:text-white transition-colors duration-300 relative z-10" />
            <span className="relative z-10 text-white text-[10px] font-mono tracking-[0.2em] uppercase">Access_CV</span>

            {/* Corner Bracket acccents */}
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-0.5 -translate-y-0.5 group-hover:translate-x-0 group-hover:translate-y-0" />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0.5 translate-y-0.5 group-hover:translate-x-0 group-hover:translate-y-0" />
          </button>
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
                <button
                  className="group relative inline-flex items-center gap-3 bg-[#050505] border border-white/[0.15] hover:border-white/40 transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(255,255,255,0.05)] rounded-sm px-6 py-3.5"
                  onClick={() => { setIsMenuOpen(false); setIsCvModalOpen(true); }}
                >
                  <FileText size={14} className="text-mono-500 group-hover:text-white transition-colors duration-300 relative z-10" />
                  <span className="relative z-10 text-white text-[11px] font-mono tracking-[0.2em] uppercase">Access_CV</span>
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CV Modal Popup */}
      <AnimatePresence>
        {isCvModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-[#080808]/90 backdrop-blur-xl" 
              onClick={() => setIsCvModalOpen(false)}
            />
            
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl h-full max-h-[85vh] bg-[#050505] border border-white/10 rounded-sm shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Corner Brackets */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/20 -translate-x-1 -translate-y-1 pointer-events-none z-20" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/20 translate-x-1 translate-y-1 pointer-events-none z-20" />

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#080808] relative z-20">
                <div className="flex items-center gap-4">
                  <FileText size={16} className="text-mono-500" />
                  <h3 className="font-mono text-xs text-white tracking-[0.2em] uppercase">System_Profile // CV</h3>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={cvUrl}
                    download="Nikhil_Madaravena_CV.pdf"
                    className="flex items-center gap-2 px-4 py-2 border border-white/20 hover:border-white/50 text-white hover:bg-white hover:text-black transition-all duration-300 text-[10px] font-mono tracking-widest uppercase rounded-sm group"
                  >
                    <Download size={14} className="group-hover:-translate-y-0.5 transition-transform" />
                    Download
                  </a>
                  <button
                    onClick={() => setIsCvModalOpen(false)}
                    className="p-2 text-mono-400 hover:text-white transition-colors border border-transparent hover:border-white/20 rounded-sm"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 w-full bg-[#0a0a0a] relative p-1 lg:p-4">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                <iframe
                  src={`${cvUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                  className="w-full h-full border-none relative z-10 rounded-sm bg-white"
                  title="CV Viewer"
                />
              </div>
              
              {/* Footer Bar */}
              <div className="h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent relative z-20" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;