import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isDesktop, setIsDesktop] = useState(false);

  // Heavy spring configuration for the outer trailing ring
  const springConfig = { stiffness: 80, damping: 25, mass: 1.5 };
  const springX = useSpring(0, springConfig);
  const springY = useSpring(0, springConfig);

  useEffect(() => {
    const checkIfDesktop = () => setIsDesktop(window.innerWidth > 1024);
    checkIfDesktop();
    window.addEventListener('resize', checkIfDesktop);
    return () => window.removeEventListener('resize', checkIfDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      springX.set(e.clientX);
      springY.set(e.clientY);
    };
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
  }, [isDesktop, springX, springY]);

  if (!isDesktop) return null;

  const variants = {
    default: {
      height: 32,
      width: 32,
      x: "-50%",
      y: "-50%",
      backgroundColor: 'rgba(255, 255, 255, 0)',
      border: '1px solid rgba(255, 255, 255, 0.35)',
    },
    hover: {
      height: 48,
      width: 48,
      x: "-50%",
      y: "-50%",
      backgroundColor: 'rgba(255, 255, 255, 0.07)',
      border: '1px solid rgba(255, 255, 255, 0.8)',
    },
    click: {
      height: 24,
      width: 24,
      x: "-50%",
      y: "-50%",
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      border: '1px solid rgba(255, 255, 255, 1)',
    },
  };

  return (
    <>
      {/* Heavy physics outer ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
        style={{ x: springX, y: springY }}
        variants={variants}
        animate={cursorVariant}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      />
      {/* Instant responsive inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white pointer-events-none z-[9999]"
        style={{ x: mousePosition.x - 3, y: mousePosition.y - 3 }}
      />
    </>
  );
};

export default CustomCursor;