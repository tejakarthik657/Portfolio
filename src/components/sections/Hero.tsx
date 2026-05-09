import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Core3D from '../ui/Core3D';
import Magnetic from '../ui/Magnetic';

gsap.registerPlugin(ScrollTrigger);

/* ── Utility: split a string into individually-animatable letter spans ── */
const SplitLetters = ({ text, className }: { text: string; className?: string }) => (
  <span className={className} aria-label={text}>
    {text.split('').map((ch, i) =>
      ch === ' '
        ? <span key={i}>&nbsp;</span>
        : <span key={i} className="split-letter inline-block" style={{ willChange: 'transform, opacity' }}>{ch}</span>
    )}
  </span>
);

const Hero: React.FC = () => {
  const sectionRef   = useRef<HTMLElement>(null);
  const headlineRef  = useRef<HTMLDivElement>(null);
  const metaColRef   = useRef<HTMLDivElement>(null);
  const ctaRef       = useRef<HTMLDivElement>(null);
  const tickerRef    = useRef<HTMLDivElement>(null);
  const bracketsTLRef = useRef<HTMLDivElement>(null);
  const bracketsBRRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const socialLinks = [
    { name: 'GitHub',   icon: <Github size={14} />,   url: 'https://github.com/tejakarthik657' },
    { name: 'LinkedIn', icon: <Linkedin size={14} />, url: 'https://www.linkedin.com/in/karthik-kona-dev/' },
    { name: 'Email',    icon: <Mail size={14} />,     url: 'mailto:teja.karthik.5505@gmail.com' },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 });

      // Corner bracket lines draw in
      tl.fromTo('.bracket-h', { scaleX: 0 }, { scaleX: 1, duration: 0.6, stagger: 0.05, ease: 'power3.out', transformOrigin: 'left center' })
        .fromTo('.bracket-v', { scaleY: 0 }, { scaleY: 1, duration: 0.6, stagger: 0.05, ease: 'power3.out', transformOrigin: 'top center' }, '-=0.5');

      // Letters cascade up from beneath mask
      tl.fromTo(
        headlineRef.current?.querySelectorAll('.split-letter') ?? [],
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          stagger: { amount: 0.55, from: 'start' },
          ease: 'power4.out',
        },
        '-=0.3'
      );

      // Right meta column slides in
      tl.fromTo(
        metaColRef.current,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
        '-=0.6'
      );

      // CTA row rises
      tl.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
        '-=0.5'
      );

      // Ticker fades in last
      tl.fromTo(tickerRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.3');

      // Parallax: headline drifts upward while scrolling
      gsap.to(headlineRef.current, {
        yPercent: -18,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const tickerItems = [
    'Backend Engineering', '·', 'Real-Time Systems', '·',
    'AI Integration', '·', 'System Architecture', '·', 'Product Engineering', '·',
    'Node.js', '·', 'React.js', '·', 'MongoDB', '·', 'TypeScript', '·',
  ];

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex flex-col bg-[#080808] overflow-hidden"
    >
      {/* ── Architectural Grid & 3D Core ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-[-5%] transition-transform duration-700 ease-out bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" 
          style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
        />
        <Core3D />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_50%,transparent_40%,#080808_100%)]" />
      </div>

      {/* ── Corner Brackets (TL) ── */}
      <div ref={bracketsTLRef} className="absolute top-8 left-8 z-20 pointer-events-none">
        <div className="bracket-h absolute top-0 left-0 w-10 h-px bg-white/30" style={{ transformOrigin: 'left center', transform: 'scaleX(0)' }} />
        <div className="bracket-v absolute top-0 left-0 w-px h-10 bg-white/30" style={{ transformOrigin: 'top center', transform: 'scaleY(0)' }} />
      </div>

      {/* ── Corner Brackets (BR) ── */}
      <div ref={bracketsBRRef} className="absolute bottom-8 right-8 z-20 pointer-events-none">
        <div className="bracket-h absolute bottom-0 right-0 w-10 h-px bg-white/30" style={{ transformOrigin: 'right center', transform: 'scaleX(0)' }} />
        <div className="bracket-v absolute bottom-0 right-0 w-px h-10 bg-white/30" style={{ transformOrigin: 'bottom center', transform: 'scaleY(0)' }} />
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 flex-1 flex flex-col">

        {/* Top spacer for navbar */}
        <div className="h-24" />

        {/* ─── Hero Grid ─── */}
        <div className="flex-1 max-w-6xl mx-auto w-full px-6 flex flex-col justify-center pt-24">

          {/* Status row */}
          <div className="flex items-center gap-4 mb-12">
            <div className="flex items-center gap-2 border border-white/10 bg-white/[0.02] px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-[9px] text-mono-400 tracking-[0.25em] uppercase">Available</span>
            </div>
            <div className="h-px w-10 bg-white/15" />
            <span className="font-mono text-[9px] text-mono-600 tracking-widest uppercase hidden sm:block">Open to new opportunities</span>
          </div>

          {/* Headline — letter-by-letter animated (Full Width) */}
          <div ref={headlineRef} className="leading-none mb-16 relative">
            <h1 className="font-display font-bold tracking-[-0.05em] uppercase leading-[0.85] hover:tracking-[-0.03em] transition-all duration-700">
              {/* TEJA — solid white */}
              <div style={{ clipPath: 'inset(-20% -20% 0 -20%)' }}>
                <SplitLetters
                  text="Teja"
                  className="text-[clamp(3.5rem,10vw,7rem)] text-white whitespace-nowrap"
                />
              </div>
              {/* KARTHIK — hollow outline, fills on hover */}
              <div style={{ clipPath: 'inset(-20% -20% 0 -20%)' }} className="group/hollow">
                <SplitLetters
                  text="Karthik"
                  className="text-[clamp(3.5rem,10vw,7rem)] hollow-name cursor-default whitespace-nowrap group-hover/hollow:animate-glitch-skew"
                />
              </div>
            </h1>
          </div>

          {/* ─── Descriptors & Meta Row ─── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start border-t border-white/[0.05] pt-10">
            
            {/* Left: Descriptors */}
            <div className="lg:col-span-7 flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="w-12 h-px bg-white/30 shrink-0 hidden sm:block" />
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {['Full-Stack Developer', 'Backend-Focused', 'AI Workflows'].map((label) => (
                  <span key={label} className="font-mono text-[10px] text-mono-500 tracking-[0.25em] uppercase border border-white/[0.05] bg-white/[0.01] px-3 py-1.5 rounded-sm">{label}</span>
                ))}
              </div>
            </div>

            {/* Right: Meta Column */}
            <div
              ref={metaColRef}
              style={{ opacity: 0 }}
              className="lg:col-span-5 flex flex-col gap-6 lg:pl-10 lg:border-l border-white/[0.06]"
            >
              <p className="font-mono text-xs text-mono-500 leading-relaxed">
                Building scalable full-stack systems with{' '}
                <span className="text-white">backend-first architecture</span>,{' '}
                <span className="text-white">AI-assisted workflows</span>, and{' '}
                <span className="text-white">real-world product thinking</span>.
              </p>
              
              {/* Social links row */}
              <div className="flex items-center gap-4">
                {socialLinks.map(link => (
                  <Magnetic key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-mono-500 hover:text-white transition-colors duration-300 group px-3 py-2 border border-white/[0.05] hover:border-white/20 hover:bg-white/[0.02] rounded-sm"
                    >
                      {link.icon}
                      <span className="font-mono text-[9px] tracking-widest uppercase">{link.name}</span>
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ─── CTA Row ─── */}
        <div
          ref={ctaRef}
          style={{ opacity: 0 }}
          className="max-w-6xl mx-auto w-full px-6 py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-white/[0.05]"
        >
          <div className="flex items-center gap-4">
            <Magnetic>
              <a
                href="#contact"
                className="group relative overflow-hidden flex items-center gap-3 px-7 py-3.5 bg-white text-[#080808] text-[10px] font-mono tracking-[0.25em] uppercase hover:bg-mono-100 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-mono-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-3 group-hover:animate-glitch-anim">
                  Hire Me
                  <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
                </span>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#projects"
                className="group relative flex items-center gap-3 px-7 py-3.5 border border-white/20 text-white text-[10px] font-mono tracking-[0.25em] uppercase hover:border-white/50 hover:bg-white/[0.03] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                <span className="relative z-10">View Work</span>
              </a>
            </Magnetic>
          </div>

          {/* Page index + scroll indicator */}
          <div className="flex items-center gap-6">
            <a href="#about" className="flex items-center gap-4 text-mono-600 hover:text-white transition-colors duration-300 group">
              <div className="flex flex-col gap-1.5">
                <div className="h-px bg-white/20 w-8 group-hover:w-12 transition-all duration-500" />
                <div className="h-px bg-white/10 w-4 group-hover:w-8 transition-all duration-500 delay-75" />
              </div>
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase">Scroll</span>
            </a>
            <span className="font-mono text-[9px] text-mono-700 tracking-widest">01 / 05</span>
          </div>
        </div>
      </div>

      {/* ── Bottom Ticker Tape ── */}
      <div className="w-full max-w-6xl mx-auto px-6 pb-8">
        <div ref={tickerRef} style={{ opacity: 0 }} className="relative z-10 border border-white/[0.05] bg-white/[0.01] py-3.5 overflow-hidden rounded-sm">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />
          <div className="ticker-inner flex gap-0 w-max">
            {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
              <span
                key={i}
                className={`font-mono text-[10px] tracking-[0.25em] uppercase px-6 whitespace-nowrap ${item === '·' ? 'text-white/20' : 'text-mono-600'}`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .ticker-inner {
          animation: ticker-scroll 30s linear infinite;
        }
      `}</style>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default Hero;
