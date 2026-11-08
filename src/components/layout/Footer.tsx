import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub',   icon: <Github size={15} />,   url: 'https://github.com/tejakarthik657' },
    { name: 'LinkedIn', icon: <Linkedin size={15} />, url: 'https://www.linkedin.com/in/karthik-kona-dev/' },
    { name: 'Email',    icon: <Mail size={15} />,     url: 'mailto:teja.karthik.5505@gmail.com' },
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0b0c0f] border-t border-zinc-800/80 pt-16 pb-12 px-6 text-zinc-400">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-7 h-7 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center text-xs font-mono font-bold text-white">
                TK
              </div>
              <span className="font-sans font-bold text-white text-base tracking-tight">
                K. Teja Karthik
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-2">
              Backend & AI Software Engineer · Founder at DevFrames Freelance Agency.
            </p>
            <p className="text-xs text-zinc-500 font-mono">
              Warangal, Telangana, India
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
              Navigation
            </h3>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Back to top */}
          <div>
            <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
              Connect
            </h3>
            <div className="flex items-center gap-2 mb-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="p-2 border border-zinc-800 rounded-md text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-900 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <a
              href="#home"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-white transition-colors"
            >
              <ArrowUp size={12} />
              <span>Back to Top</span>
            </a>
          </div>
        </div>

        {/* Bottom divider + copyright */}
        <div className="border-t border-zinc-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-500">
          <p>© {currentYear} K. Teja Karthik. All rights reserved.</p>
          <p>DevFrames Agency · Portfolio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
