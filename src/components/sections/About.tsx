import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, ArrowUpRight } from 'lucide-react';
import { educationList } from '../../data/experience';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0d0e12] text-zinc-100 border-b border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-wider mb-2">
            <span>01 // Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
            About & Education
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative Summary */}
          <div className="lg:col-span-7 space-y-6 text-zinc-300 font-sans text-base sm:text-lg leading-relaxed">
            <p>
              I am a Computer Science undergraduate focused on practical engineering, problem-solving,
              and building resilient systems for real-world challenges. My technical core centers around
              <span className="text-white font-medium"> backend architecture</span>,{' '}
              <span className="text-white font-medium">event-driven workflows</span>, and{' '}
              <span className="text-white font-medium">applied AI orchestration</span>.
            </p>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Beyond individual engineering roles, I run{' '}
              <strong className="text-white">DevFrames</strong>, my independent freelance agency where
              I partner with businesses and founders to build end-to-end AI-powered products, custom
              backend infrastructure, and automated workflows from idea to production deployment.
            </p>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              I place high value on clean, maintainable architecture, analytical thinking, teamwork,
              and staying at the cutting edge of AI-assisted engineering methodologies.
            </p>

            {/* Quick Stats / Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-800">
              <div className="p-4 rounded-md border border-zinc-800 bg-[#121317]">
                <span className="block text-2xl font-bold font-sans text-white">4+</span>
                <span className="text-xs font-mono text-zinc-400">Engineering Roles</span>
              </div>
              <div className="p-4 rounded-md border border-zinc-800 bg-[#121317]">
                <span className="block text-2xl font-bold font-sans text-white">2+</span>
                <span className="text-xs font-mono text-zinc-400">Agency AI Products</span>
              </div>
              <div className="p-4 rounded-md border border-zinc-800 bg-[#121317]">
                <span className="block text-2xl font-bold font-sans text-white">7.62</span>
                <span className="text-xs font-mono text-zinc-400">B.Tech CGPA</span>
              </div>
            </div>

            {/* DevFrames agency callout */}
            <div className="p-5 rounded-lg border border-zinc-800 bg-[#14151b] flex items-center justify-between gap-4 mt-6">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center shrink-0">
                  <Briefcase size={18} className="text-white" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-white text-sm">
                    DevFrames Freelance Agency
                  </h4>
                  <p className="font-mono text-xs text-zinc-400">
                    Bespoke AI products, client APIs & cloud deployments
                  </p>
                </div>
              </div>
              <a
                href="#experience"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-white transition-colors shrink-0"
              >
                <span>View Details</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Right Column: Education Timeline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap size={18} className="text-zinc-300" />
              <h3 className="font-sans font-semibold text-lg text-white">Academic Education</h3>
            </div>

            <div className="space-y-3.5">
              {educationList.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-lg border border-zinc-800/90 bg-[#121317] hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <span className="font-mono text-xs text-zinc-400">{edu.duration}</span>
                    <span className="font-mono text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
                      {edu.score}
                    </span>
                  </div>
                  <h4 className="font-sans font-semibold text-white text-sm leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1">{edu.institution}</p>
                  <span className="inline-block mt-2 text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                    {edu.type}
                  </span>
                </div>
              ))}
            </div>

            {/* Core Strengths Badge */}
            <div className="p-4 rounded-lg border border-zinc-800/80 bg-[#101115] mt-4">
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block mb-2">
                Core Strengths (Resume)
              </span>
              <p className="text-xs font-mono text-zinc-300 leading-relaxed">
                Analytical Thinking · Problem Solving · Adaptability · Teamwork · Clear Communication · Decision-Making
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
