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
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2.5">
          {Icon && <Icon className="w-3.5 h-3.5 text-mono-500" />}
          <span className="text-sm font-medium text-mono-200">{name}</span>
        </div>
        <span className="text-xs font-mono text-mono-600">{percentage}%</span>
      </div>
      {/* Track */}
      <div className="h-px bg-white/[0.08] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-white rounded-full origin-left"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: `${percentage}%`, transformOrigin: 'left' }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;