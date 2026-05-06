import React, { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useFrame, Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import gsap from "gsap";

function ParticlesBackground() {
  const groupRef = useRef<THREE.Group>(null);

  const particles = useMemo(() => {
    const count = 900;
    const data = [];
    for (let i = 0; i < count; i++) {
      data.push({
        position: [
          (Math.random() - 0.5) * 22,
          (Math.random() - 0.5) * 22,
          (Math.random() - 0.5) * 22,
        ] as [number, number, number],
        scale: Math.random() * 0.5 + 0.3,
      });
    }
    return data;
  }, []);

  useEffect(() => {
    if (!groupRef.current) return;
    groupRef.current.children.forEach((mesh) => {
      const delay = Math.random() * 3;
      gsap.to(mesh.position, {
        y: `+=${0.2 + Math.random() * 0.3}`,
        duration: 2 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay,
      });
    });
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0004;
      groupRef.current.rotation.x += 0.0002;
    }
  });

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <mesh position={p.position} scale={p.scale} key={i}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive={new THREE.Color("#ffffff")}
            emissiveIntensity={0.4}
            transparent
            opacity={0.25 + Math.random() * 0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

const Hero: React.FC = () => {
  const socialLinks = [
    { name: "GitHub",   icon: <Github size={18} />,   url: "https://github.com/Nikhil-Madaravena" },
    { name: "LinkedIn", icon: <Linkedin size={18} />, url: "https://www.linkedin.com/in/nikhil-madaravena" },
    { name: "Email",    icon: <Mail size={18} />,     url: "mailto:nikhil.madaravena@gmail.com" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.4, staggerChildren: 0.18 } },
  };

  const itemVariants = {
    hidden: { y: 28, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#080808]"
    >
      {/* 3D Particle Canvas */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#ffffff" />
          <ParticlesBackground />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            autoRotate
            autoRotateSpeed={0.4}
          />
        </Canvas>
      </div>

      {/* Subtle radial vignette */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_40%,#080808_100%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/10 rounded-full text-xs font-mono text-mono-400 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for new opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tighter leading-[0.9] mb-5"
          >
            Nikhil
            <br />
            <span className="text-gradient">Madaravena</span>
          </motion.h1>

          {/* Animated role */}
          <motion.div
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl font-mono text-mono-500 mb-10 h-8 flex items-center gap-2"
          >
            <span className="text-white/30">{">"}</span>
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",   2200,
                "Systems Engineer",       2200,
                "React + Rust Builder",   2200,
                "3D Web Specialist",      2200,
              ]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
            />
            <span className="inline-block w-0.5 h-5 bg-white/60 animate-blink" />
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-10">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="p-2.5 border border-white/10 text-mono-500 rounded-sm hover:border-white/30 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.93 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="#contact"
              className="px-7 py-3.5 bg-white text-[#080808] text-sm font-semibold rounded-sm hover:bg-mono-200 transition-all duration-300 tracking-wider uppercase"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="#projects"
              className="px-7 py-3.5 border border-white/20 text-white/80 text-sm font-semibold rounded-sm hover:border-white/40 hover:text-white transition-all duration-300 tracking-wider uppercase"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-mono-600 hover:text-white transition-colors duration-300 group"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </a>
      </motion.div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default Hero;
