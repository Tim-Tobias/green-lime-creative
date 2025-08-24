import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
  viewport?: boolean;
  once?: boolean;
};

export const StaggerContainer = ({
  children,
  className = '',
  delayChildren = 0,
  staggerChildren = 0.1,
  viewport = false,
  once = true,
}: StaggerContainerProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren,
        staggerChildren,
      },
    },
  };

  return (
    <motion.div
      className={cn(className)}
      variants={containerVariants}
      initial="hidden"
      whileInView={viewport ? "show" : undefined}
      animate={!viewport ? "show" : undefined}
      viewport={viewport ? { once } : undefined}
    >
      {children}
    </motion.div>
  );
};

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
};

export const StaggerItem = ({
  children,
  className = '',
  direction = 'up',
  distance = 30,
}: StaggerItemProps) => {
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

  const itemVariants = {
    hidden: {
      opacity: 0,
      ...getDirectionOffset(),
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0], // Cubic bezier curve similar to basicagency.com
      },
    },
  };

  return (
    <motion.div className={cn(className)} variants={itemVariants}>
      {children}
    </motion.div>
  );
};