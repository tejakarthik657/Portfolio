import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, MapPin, Terminal, Briefcase } from 'lucide-react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={15} />,
      url: 'https://github.com/tejakarthik657',
      label: 'tejakarthik657',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={15} />,
      url: 'https://www.linkedin.com/in/karthik-kona-dev/',
      label: 'karthik-kona',
    },
    {
      name: 'Email',
      icon: <Mail size={15} />,
      url: 'mailto:teja.karthik.5505@gmail.com',
      label: 'teja.karthik.5505@gmail.com',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-fade-in',
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
          delay: 0.1,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center bg-[#0d0e12] text-zinc-100 pt-28 pb-16 border-b border-zinc-800/80"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-zinc-800/25 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_30%,transparent_100%)]" />
      </div>

      <div ref={contentRef} className="relative z-10 max-w-5xl mx-auto w-full px-6">
        {/* Availability & Location Badges */}
        <div className="hero-fade-in flex flex-wrap items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/90 text-zinc-300 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Available for Opportunities & Agency Contracts</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 text-zinc-500 text-xs font-mono">
            <MapPin size={12} className="text-zinc-400" />
            <span>Warangal, Telangana, India</span>
          </div>
        </div>

        {/* Name & Role */}
        <div className="hero-fade-in mb-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-bold tracking-tight text-white mb-3">
            K. Teja Karthik
          </h1>
          <p className="text-lg sm:text-2xl font-mono text-zinc-300 font-medium">
            Backend & AI Software Engineer
          </p>
        </div>

        {/* Narrative / Context */}
        <div className="hero-fade-in max-w-2xl text-zinc-400 text-base sm:text-lg leading-relaxed mb-10 space-y-3">
          <p>
            Computer Science undergraduate architecting scalable backend services, event-driven
            workflows, autonomous AI agents, and enterprise RAG platforms.
          </p>
          <p className="text-sm sm:text-base text-zinc-400">
            Founder of <a href="#agency" className="text-white font-medium underline underline-offset-4 decoration-zinc-600 hover:decoration-white transition-colors">DevFrames</a>, an independent freelance agency delivering production AI solutions and custom client systems.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="hero-fade-in flex flex-wrap items-center gap-3.5 pt-1 mb-12">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-zinc-950 font-sans font-semibold text-sm rounded-md hover:bg-zinc-200 transition-colors shadow-sm"
          >
            <span>Explore Projects</span>
            <ArrowUpRight size={15} />
          </a>

          <a
            href="#agency"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-white font-sans font-medium text-sm rounded-md transition-colors"
          >
            <Briefcase size={14} className="text-zinc-300" />
            <span>DevFrames Agency</span>
          </a>

          <a
            href="#skills"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-zinc-400 hover:text-white font-mono text-xs transition-colors"
          >
            <Terminal size={14} />
            <span>Skills</span>
          </a>
        </div>

        {/* Social strip */}
        <div className="hero-fade-in border-t border-zinc-800/80 pt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          <div className="font-mono text-xs text-zinc-500">
            <span>Kakatiya Institute of Technology & Science (2023–2027)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
