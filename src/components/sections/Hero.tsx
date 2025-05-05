import React, { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useFrame, Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Github, Linkedin, Mail } from "lucide-react";
import gsap from "gsap";
import { useTheme } from "../../context/ThemeContext";

function GeometricModel() {
  const mesh = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={mesh} scale={[2, 2, 2]}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#ff5733" wireframe />
    </mesh>
  );
}

function ParticlesBackground() {
  const groupRef = useRef<THREE.Group>(null);
  const { theme } = useTheme();
  const { mouse, camera, raycaster } = useThree();

  const particles = useMemo(() => {
    const particleCount = 1200; // Increased the particle count
    const data = [];
    for (let i = 0; i < particleCount; i++) {
      data.push({
        position: [
          (Math.random() - 0.5) * 20,  // Adjusted the range for more spread
          (Math.random() - 0.5) * 20,  // Adjusted the range for more spread
          (Math.random() - 0.5) * 20,  // Adjusted the range for more spread
        ],
        scale: Math.random() * 0.5 + 0.5,
      });
    }
    return data;
  }, []);

  useEffect(() => {
    if (!groupRef.current) return;

    groupRef.current.children.forEach((mesh, index) => {
      const delay = Math.random() * 2;
      gsap.to(mesh.position, {
        y: "+=0.3",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay,
      });
      gsap.to(mesh.scale, {
        x: "+=0.3",
        y: "+=0.3",
        z: "+=0.3",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay,
      });
      gsap.from(mesh.material, {
        emissiveIntensity: 0,
        duration: 1,
        ease: "power1.inOut",
        delay,
      });
    });
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      groupRef.current.rotation.x += 0.0005;

      raycaster.setFromCamera(mouse, camera);
      const mousePos = new THREE.Vector3();
      raycaster.ray.at(0, mousePos);

      groupRef.current.children.forEach((mesh) => {
        const dx = mesh.position.x - mousePos.x;
        const dy = mesh.position.y - mousePos.y;
        const dz = mesh.position.z - mousePos.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 1.5) {
          gsap.to(mesh.scale, {
            x: 1.5,
            y: 1.5,
            z: 1.5,
            duration: 0.3,
          });
          gsap.to(mesh.material, {
            emissiveIntensity: 2,
            duration: 0.3,
          });
        } else {
          gsap.to(mesh.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 0.5,
          });
          gsap.to(mesh.material, {
            emissiveIntensity: 0.8,
            duration: 0.5,
          });
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {particles.map((p, index) => (
        <mesh position={p.position} scale={p.scale} key={index}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial
            color={theme === "dark" ? "#e83a17" : "#ff5733"}
            emissive={theme === "dark" ? new THREE.Color("rgba(255, 87, 51, 0.8)") : new THREE.Color("#ff5733")}
            emissiveIntensity={0.8}
            transparent
            opacity={theme === "dark" ? 1 : 0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

const Hero: React.FC = () => {
  const socialLinks = [
    { name: "GitHub", icon: <Github />, url: "https://github.com/" },
    { name: "LinkedIn", icon: <Linkedin />, url: "https://linkedin.com/" },
    { name: "Email", icon: <Mail />, url: "mailto:nikhil-madaravena@gmail.com" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20 bg-white dark:bg-dark-950"
    >
      <div className="absolute inset-0 z-0 h-[100vh] sm:h-full w-full opacity-50 dark:opacity-10">
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <ParticlesBackground />
          <OrbitControls
            enableZoom={!isMobile}
            enablePan={!isMobile}
            enableRotate
            autoRotate
            autoRotateSpeed={1}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            maxDistance={10}
            minDistance={2}
            target={[0, 0, 0]}
            rotateSpeed={0.5}
            minAzimuthAngle={-Math.PI / 2}
            maxAzimuthAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

      <div className="container mx-4 px-4 sm:mx-10 sm:px-10 z-10">
        <div className="grid gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.h2
              variants={itemVariants}
              className="text-xl text-center md:text-2xl font-medium text-dark-900 dark:text-white mb-2"
            >
              Hello, I'm
            </motion.h2>
            <motion.h1
              variants={itemVariants}
              className="text-4xl text-center md:text-5xl lg:text-6xl font-bold text-primary-500 mb-4"
            >
              Nikhil Madaravena
            </motion.h1>
            <motion.div
              variants={itemVariants}
              className="text-xl text-center md:text-2xl text-dark-600 dark:text-dark-300 mb-6 h-8"
            >
              <TypeAnimation
                sequence={[
                  "Frontend Developer", 2000,
                  "UI/UX Enthusiast", 2000,
                  "React Specialist", 2000,
                  "Web Animator", 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>
            <div className="flex justify-center">
              <motion.div variants={itemVariants} className="flex items-center space-x-4 mb-8">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-dark-100 dark:bg-dark-800 text-dark-500 dark:text-dark-300 rounded-full hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>
            <div className="flex justify-center">
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <motion.a
                  href="#contact"
                  className="px-6 py-3 bg-primary-600 text-white rounded-lg shadow-lg hover:bg-primary-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.a>
                <motion.a
                  href="#projects"
                  className="px-6 py-3 bg-dark-100 dark:bg-dark-800 text-dark-900 dark:text-white rounded-lg shadow-lg hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-dark-500 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
