import React from 'react';
import { motion } from 'framer-motion';

interface FilterButtonProps {
  name: string;
  isActive: boolean;
  onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ name, isActive, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`px-4 py-2 text-xs font-mono tracking-widest uppercase border rounded-sm transition-all duration-300 ${
        isActive
          ? 'bg-white text-[#080808] border-white'
          : 'border-white/10 text-mono-500 hover:border-white/25 hover:text-white'
      }`}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
    >
      {name}
    </motion.button>
  );
};

export default FilterButton;