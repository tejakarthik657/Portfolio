import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Skills from './Skills';

const About: React.FC = () => {
  const controls = useAnimation();
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="about" className="py-32 bg-[#080808] relative overflow-hidden">
      {/* Background typographic noise */}
      <div className="absolute top-1/4 -right-[10%] text-[15vw] font-display font-bold text-white/[0.02] leading-none select-none pointer-events-none mix-blend-overlay">
        SYSTEMS
      </div>
      <div className="absolute bottom-10 -left-[5%] text-[15vw] font-display font-bold text-white/[0.02] leading-none select-none pointer-events-none mix-blend-overlay">
        CRAFT
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Top minimal header */}
          <motion.div variants={itemVariants} className="flex items-center gap-6 mb-24">
            <span className="font-mono text-xs text-mono-500 tracking-[0.3em] uppercase">01 // Identity</span>
            <div className="flex-1 h-px bg-white/[0.05]" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start mb-24">
            
            {/* Left Column: The Manifesto (Col span 5) */}
            <motion.div variants={itemVariants} className="lg:col-span-5 relative">
              <div className="lg:sticky lg:top-32">
                <div className="flex flex-col gap-6">
                  <div className="w-12 h-px bg-white" />
                  <h2 className="font-display font-bold text-5xl sm:text-6xl text-white tracking-tighter leading-[1.1]">
                    Bridging <br/>
                    <span className="text-mono-500">backend engineering</span><br/>
                    with <br/>
                    <span className="text-gradient">AI-integrated</span><br/>
                    applications.
                  </h2>
                </div>
                
                <div className="mt-16 grid grid-cols-2 gap-8">
                  <div className="relative">
                    <div className="absolute -left-4 top-2 w-px h-12 bg-white/20" />
                    <div className="text-4xl font-display font-bold text-white mb-2">RESTful</div>
                    <div className="text-[10px] font-mono text-mono-500 uppercase tracking-widest leading-relaxed">API<br/>Design</div>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-4 top-2 w-px h-12 bg-white/20" />
                    <div className="text-4xl font-display font-bold text-white mb-2">Real<span className="text-xl text-mono-500">-Time</span></div>
                    <div className="text-[10px] font-mono text-mono-500 uppercase tracking-widest leading-relaxed">System<br/>Design</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: The Prose (Col span 7) */}
            <motion.div variants={itemVariants} className="lg:col-span-7 lg:pl-16 flex flex-col gap-12">
              
              {/* Editorial Text Block */}
              <div>
                <p className="text-xl sm:text-2xl text-mono-300 font-light leading-relaxed mb-8">
                  I don't just write code; I <span className="text-white font-medium">build systems</span> from the ground up. Whether it's scalable backend architectures, AI-integrated applications, or real-time workflows, I obsess over designing systems that solve real-world problems while maintaining clean, modular code.
                </p>
                
                <div className="h-px w-full bg-white/[0.05] my-12" />

                <div className="grid sm:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xs font-mono text-white tracking-widest uppercase mb-5 flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-white rounded-sm" />
                      Backend & System Design
                    </h3>
                    <p className="text-sm text-mono-400 leading-relaxed">
                      Deep expertise in building scalable backends with Node.js, Express.js, NestJS, and Spring Boot. I design efficient APIs, optimize database queries, and architect real-time workflows using technologies like MongoDB, PostgreSQL, and Redis.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-mono text-white tracking-widest uppercase mb-5 flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-white rounded-sm" />
                      AI-Integrated Development
                    </h3>
                    <p className="text-sm text-mono-400 leading-relaxed">
                      Highly interested in AI-assisted workflows and intelligent applications. I leverage LangChain, LlamaIndex, RAG systems, and modern LLM APIs to build practical AI-powered features that enhance user experiences and developer productivity.
                    </p>
                  </div>
                </div>
              </div>

              {/* Minimal Skill Tags */}
              <div className="mt-4 pt-10 border-t border-white/[0.05]">
                <p className="text-[10px] font-mono text-mono-600 tracking-widest uppercase mb-5">Core Arsenal</p>
                <div className="flex flex-wrap gap-2.5">
                  {['Node.js', 'React.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'NestJS', 'LangChain', 'RAG'].map((tag) => (
                    <span key={tag} className="px-4 py-2 border border-white/10 text-[11px] font-mono text-mono-300 tracking-widest uppercase rounded-sm hover:bg-white hover:text-[#080808] transition-colors duration-300 cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>

          {/* Full-width Skills Component */}
          <motion.div variants={itemVariants} className="mt-32 pt-16 border-t border-white/[0.05]">
            <Skills />
          </motion.div>

        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default About;