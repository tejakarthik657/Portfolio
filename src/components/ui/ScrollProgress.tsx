import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Progress bar — pure white, 1px */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1px] bg-white origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Back to top */}
      {scrolled && (
        <motion.a
          href="#home"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 p-3 rounded-sm border border-white/20 bg-[rgba(8,8,8,0.9)] text-mono-400 hover:text-white hover:border-white/40 backdrop-blur-sm shadow-lg cursor-pointer z-50 transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} />
        </motion.a>
      )}
    </>
  );
};

export default ScrollProgress;