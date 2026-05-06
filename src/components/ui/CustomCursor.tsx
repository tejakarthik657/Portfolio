import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIfDesktop = () => setIsDesktop(window.innerWidth > 1024);
    checkIfDesktop();
    window.addEventListener('resize', checkIfDesktop);
    return () => window.removeEventListener('resize', checkIfDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const mouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    const mouseDown = () => setCursorVariant('click');
    const mouseUp = () => setCursorVariant('default');
    const handleHover = () => setCursorVariant('hover');
    const handleLeave = () => setCursorVariant('default');

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);

    const interactables = document.querySelectorAll('a, button, [role="button"]');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: 'rgba(255, 255, 255, 0)',
      border: '1px solid rgba(255, 255, 255, 0.35)',
    },
    hover: {
      x: mousePosition.x - 22,
      y: mousePosition.y - 22,
      height: 44,
      width: 44,
      backgroundColor: 'rgba(255, 255, 255, 0.07)',
      border: '1px solid rgba(255, 255, 255, 0.6)',
    },
    click: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      height: 24,
      width: 24,
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      border: '1px solid rgba(255, 255, 255, 0.8)',
    },
  };

  return (
    <>
      {/* Outer ring cursor */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: 'spring', stiffness: 600, damping: 32 }}
      />
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 rounded-full bg-white pointer-events-none z-[9999]"
        animate={{ x: mousePosition.x - 2, y: mousePosition.y - 2 }}
        transition={{ type: 'spring', stiffness: 1200, damping: 40 }}
      />
    </>
  );
};

export default CustomCursor;