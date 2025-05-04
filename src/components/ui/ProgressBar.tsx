// ProgressBar.tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { IconType } from 'react-icons';

interface ProgressBarProps {
  name: string;
  percentage: number;
  icon?: IconType;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ name, percentage, icon: Icon }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="w-4 h-4 text-primary-500" />}
          <span className="text-sm font-medium text-dark-900 dark:text-dark-200">{name}</span>
        </div>
        <span className="text-sm font-medium text-dark-600 dark:text-dark-400">{percentage}%</span>
      </div>
      <div className="h-2 bg-dark-200 dark:bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary-500 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;