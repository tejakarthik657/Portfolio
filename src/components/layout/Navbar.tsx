import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, FileText, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import cvUrl from '../../assets/Karthik_Resume.pdf';

const navLinks = [
  { name: 'Home',       href: '#home',       id: 'home' },
  { name: 'About',      href: '#about',      id: 'about' },
  { name: 'Skills',     href: '#skills',     id: 'skills' },
  { name: 'Agency',     href: '#agency',     id: 'agency' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Projects',   href: '#projects',   id: 'projects' },
  { name: 'Contact',    href: '#contact',    id: 'contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [isMenuOpen, setIsMenuOpen]       = useState(false);
  const [activeLink, setActiveLink]       = useState('home');
  const [currentTime, setCurrentTime]     = useState('');
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const navRef   = useRef<HTMLElement>(null);
  const logoRef  = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const ctaRef   = useRef<HTMLButtonElement>(null);

  // Live Clock
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
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
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // GSAP entrance
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.15 });
    if (logoRef.current && linksRef.current && ctaRef.current) {
      tl.fromTo(navRef.current, { opacity: 0 }, { opacity: 1, duration: 0.01 })
        .fromTo(
          logoRef.current,
          { opacity: 0, x: -16 },
          { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out' }
        )
        .fromTo(
          linksRef.current.querySelectorAll('li'),
          { opacity: 0, y: -8 },
          { opacity: 1, y: 0, duration: 0.35, stagger: 0.05, ease: 'power2.out' },
          '-=0.25'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, x: 16 },
          { opacity: 1, x: 0, duration: 0.45, ease: 'power3.out' },
          '-=0.25'
        );
    }
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#0f1013]/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-lg shadow-black/20'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            ref={logoRef}
            href="#home"
            onClick={() => setActiveLink('home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center text-xs font-mono font-bold text-white group-hover:border-zinc-500 transition-colors">
              TK
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-semibold text-white text-sm tracking-tight group-hover:text-zinc-200 transition-colors">
                K. Teja Karthik
              </span>
              <span className="font-mono text-[10px] text-zinc-400 tracking-wider">
                Backend & AI Engineer
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <ul ref={linksRef} className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.id)}
                  className={`relative text-[12px] font-mono tracking-wider transition-colors duration-150 py-1 block ${
                    activeLink === link.id
                      ? 'text-white font-medium'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {activeLink === link.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Right: Live Clock + Resume CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 border-r border-zinc-800 pr-4">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="font-mono text-[11px] text-zinc-400 tabular-nums">
                {currentTime}
              </span>
            </div>

            <button
              ref={ctaRef}
              onClick={() => setIsCvModalOpen(true)}
              className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800 text-white transition-colors rounded-md px-3.5 py-1.5 text-xs font-mono tracking-wider"
            >
              <FileText size={13} className="text-zinc-400" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-zinc-800 bg-[#0f1013]/98 backdrop-blur-xl"
            >
              <ul className="px-6 py-5 flex flex-col gap-3.5">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="block text-zinc-300 hover:text-white text-sm font-mono tracking-wide py-1 transition-colors"
                      onClick={() => {
                        setActiveLink(link.id);
                        setIsMenuOpen(false);
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <button
                    className="w-full flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-700 text-white rounded-md px-4 py-2 text-xs font-mono"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsCvModalOpen(true);
                    }}
                  >
                    <FileText size={14} className="text-zinc-400" />
                    <span>View Resume</span>
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Resume Modal Popup */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {isCvModalOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
              >
                {/* Backdrop */}
                <div
                  className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                  onClick={() => setIsCvModalOpen(false)}
                />

                {/* Modal Window */}
                <motion.div
                  initial={{ scale: 0.96, opacity: 0, y: 15 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.96, opacity: 0, y: 15 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="relative w-full max-w-5xl h-full max-h-[90vh] bg-[#121317] border border-zinc-800 rounded-lg shadow-2xl flex flex-col overflow-hidden"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-[#15161b]">
                    <div className="flex items-center gap-3">
                      <FileText size={16} className="text-zinc-400" />
                      <div>
                        <h3 className="font-sans font-semibold text-sm text-white">
                          K. Teja Karthik — Resume
                        </h3>
                        <p className="font-mono text-[10px] text-zinc-400">
                          Backend & AI Software Engineer
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href={cvUrl}
                        download="Karthik_Resume.pdf"
                        className="flex items-center gap-2 px-3.5 py-1.5 border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-white rounded text-xs font-mono transition-colors"
                      >
                        <Download size={13} />
                        Download
                      </a>
                      <button
                        onClick={() => setIsCvModalOpen(false)}
                        aria-label="Close modal"
                        className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-zinc-800 transition-colors"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Summary Bar */}
                  <div className="border-b border-zinc-800 bg-[#101114] px-6 py-3.5 hidden sm:grid sm:grid-cols-2 gap-4 text-xs font-mono">
                    <div>
                      <span className="text-zinc-500 uppercase tracking-wider text-[10px] block mb-1">
                        Experience Overview
                      </span>
                      <p className="text-zinc-300">
                        <strong className="text-white">DevFrames</strong> (Freelance Agency) ·{' '}
                        <strong className="text-white">Aform Solutions</strong> ·{' '}
                        <strong className="text-white">SuPrazo</strong> ·{' '}
                        <strong className="text-white">Svapps</strong>
                      </p>
                    </div>
                    <div>
                      <span className="text-zinc-500 uppercase tracking-wider text-[10px] block mb-1">
                        Core Competencies
                      </span>
                      <p className="text-zinc-300">
                        FastAPI, Node.js, Next.js, LLMs, RAG, MongoDB, PostgreSQL, Vector DBs, Docker
                      </p>
                    </div>
                  </div>

                  {/* PDF Viewer */}
                  <div className="flex-1 w-full bg-[#18191f] relative">
                    <iframe
                      src={`${cvUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                      className="w-full h-full border-none bg-white"
                      title="Resume Viewer"
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};

export default Navbar;
