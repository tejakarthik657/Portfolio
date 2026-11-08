import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Server, Code, CheckCircle, ExternalLink } from 'lucide-react';
import agencyLogo from '../../assets/devframes-logo.png';

const Agency: React.FC = () => {
  const capabilities = [
    {
      icon: <Sparkles size={18} className="text-zinc-200" />,
      title: 'Applied AI & Agentic Systems',
      description:
        'Building autonomous agents, enterprise RAG platforms, context engineering, and custom LLM workflows tailored to specific business domains.',
    },
    {
      icon: <Server size={18} className="text-zinc-200" />,
      title: 'Production Backend Engineering',
      description:
        'Architecting resilient REST APIs, event-driven microservices, WebSocket channels, relational/document/vector databases, and cloud infrastructure.',
    },
    {
      icon: <Code size={18} className="text-zinc-200" />,
      title: 'Full-Stack Products & Tooling',
      description:
        'Delivering end-to-end client applications, developer extensions (like Vibe for VS Code), and modern responsive web systems with Next.js.',
    },
  ];

  const inHouseWork = [
    {
      name: 'FrameUp',
      type: 'AI-Powered MSME Operating System',
      link: 'https://devframes-presence.vercel.app/',
    },
    {
      name: 'Vibe VS Code Extension',
      type: 'Developer AI Automation Tooling',
      link: 'https://marketplace.visualstudio.com/items?itemName=devframes.vibe-vscode-extension',
    },
  ];

  return (
    <section id="agency" className="py-24 bg-[#0e0f13] text-zinc-100 border-b border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Label */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-wider mb-2">
            <span>04 // Freelance Studio</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
                DevFrames Agency
              </h2>
              <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
                My independent freelance engineering agency dedicated to building production AI
                software, resilient backend architecture, and custom client systems.
              </p>
            </div>

            <a
              href="https://devframes.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-zinc-950 font-sans font-semibold text-xs hover:bg-zinc-200 transition-colors shrink-0 shadow-sm"
            >
              <span>Visit DevFrames</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Agency Hero Card with Embedded Logo */}
        <div className="p-8 sm:p-10 rounded-xl border border-zinc-700/80 bg-gradient-to-br from-[#15161d] via-[#121317] to-[#0f1014] mb-10 shadow-xl shadow-black/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Brand Identity & Narrative */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-zinc-900/90 border border-zinc-700/80 flex items-center justify-center p-2.5 shrink-0 overflow-hidden shadow-inner">
                  <img
                    src={agencyLogo}
                    alt="DevFrames Agency Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="font-sans font-bold text-2xl text-white tracking-tight">
                      DevFrames
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-700/60 text-emerald-300">
                      Active Agency
                    </span>
                  </div>
                  <p className="font-mono text-xs text-zinc-400">
                    Founded & Led by K. Teja Karthik · Freelance AI & Software Studio
                  </p>
                </div>
              </div>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed pt-2">
                DevFrames operates as a high-velocity development agency helping startups, local
                businesses, and innovators convert ambitious ideas into robust, production-ready software.
                From backend microservices and vector databases to custom VS Code extensions and AI agents,
                we engineer with precision.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 font-mono text-xs text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-zinc-300" />
                  <span>Custom AI Engineering</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-zinc-300" />
                  <span>Client-Owned IP</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-zinc-300" />
                  <span>End-to-End Delivery</span>
                </div>
              </div>
            </div>

            {/* Right: Quick In-House Highlights */}
            <div className="lg:col-span-4 p-5 rounded-lg border border-zinc-800 bg-[#0e0f13] space-y-3.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block border-b border-zinc-800 pb-2">
                Products Shipped Under DevFrames
              </span>

              {inHouseWork.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 hover:bg-zinc-900 transition-colors group"
                >
                  <div className="flex items-center justify-between text-xs font-sans font-semibold text-white group-hover:text-zinc-200">
                    <span>{item.name}</span>
                    <ExternalLink size={12} className="text-zinc-400 group-hover:text-white" />
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400 block mt-0.5">
                    {item.type}
                  </span>
                </a>
              ))}

              <div className="pt-2">
                <a
                  href="https://devframes.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-xs font-mono text-zinc-300 hover:text-white border border-zinc-700/80 rounded bg-zinc-800/80 hover:bg-zinc-800 transition-colors"
                >
                  <span>Explore devframes.vercel.app</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services & Capabilities Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="p-6 rounded-lg border border-zinc-800/90 bg-[#121317] hover:border-zinc-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-md border border-zinc-700/80 bg-zinc-900 flex items-center justify-center mb-4">
                  {cap.icon}
                </div>
                <h4 className="font-sans font-semibold text-white text-base mb-2">
                  {cap.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  {cap.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-zinc-800/70">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  DevFrames Capability
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agency;
