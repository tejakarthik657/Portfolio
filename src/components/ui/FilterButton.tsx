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
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        isActive
          ? 'bg-primary-500 text-white'
          : 'bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-700'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {name}
    </motion.button>
  );
};

export default FilterButton;