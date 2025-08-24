import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
};

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
  direction = 'up',
  distance = 30,
}: FadeInProps) => {
  const getDirectionOffset = () => {
    switch (direction) {
      case 'up':
        return { y: distance };
      case 'down':
        return { y: -distance };
      case 'left':
        return { x: distance };
      case 'right':
        return { x: -distance };
      case 'none':
        return {};
      default:
        return { y: distance };
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...getDirectionOffset(),
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0], // Cubic bezier curve similar to basicagency.com
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};