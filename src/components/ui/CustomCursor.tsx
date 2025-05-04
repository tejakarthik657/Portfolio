import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const mouseDown = () => setCursorVariant('click');
    const mouseUp = () => setCursorVariant('default');
    
    const handleLinkHover = () => setCursorVariant('hover');
    const handleLinkLeave = () => setCursorVariant('default');

    // Add event listeners
    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);

    // Add link hover effects
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      // Remove event listeners
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
      
      // Remove link hover effects
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  // Only show custom cursor on desktop devices
  const [isDesktop, setIsDesktop] = useState(false);
  
  useEffect(() => {
    // Check if the device is desktop
    if (typeof window !== 'undefined') {
      const checkIfDesktop = () => {
        setIsDesktop(window.innerWidth > 1024);
      };
      
      checkIfDesktop();
      window.addEventListener('resize', checkIfDesktop);
      
      return () => {
        window.removeEventListener('resize', checkIfDesktop);
      };
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: 'rgba(255, 87, 51, 0.3)',
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: 'rgba(255, 87, 51, 0.5)',
    },
    click: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 24,
      width: 24,
      backgroundColor: 'rgba(255, 87, 51, 0.8)',
    },
  };

  if (!isDesktop) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    />
  );
};

export default CustomCursor;