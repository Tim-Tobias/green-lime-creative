import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  threshold?: number;
  once?: boolean;
}

export const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  direction = 'up',
  distance = 50,
  threshold = 0.1,
  once = true,
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, threshold });

  const getInitialPosition = () => {
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
      ref={ref}
      className={cn(className)}
      initial={{
        opacity: 0,
        ...getInitialPosition(),
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : getInitialPosition().x,
        y: isInView ? 0 : getInitialPosition().y,
      }}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
};