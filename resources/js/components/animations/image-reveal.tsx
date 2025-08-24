import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ImageRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'left' | 'right' | 'top' | 'bottom';
  viewport?: boolean;
  once?: boolean;
};

export const ImageReveal = ({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  direction = 'left',
  viewport = false,
  once = true,
}: ImageRevealProps) => {
  const getDirectionVariants = () => {
    switch (direction) {
      case 'left':
        return {
          hidden: { clipPath: 'inset(0 100% 0 0)' },
          visible: { clipPath: 'inset(0 0% 0 0)' },
        };
      case 'right':
        return {
          hidden: { clipPath: 'inset(0 0 0 100%)' },
          visible: { clipPath: 'inset(0 0 0 0%)' },
        };
      case 'top':
        return {
          hidden: { clipPath: 'inset(100% 0 0 0)' },
          visible: { clipPath: 'inset(0% 0 0 0)' },
        };
      case 'bottom':
        return {
          hidden: { clipPath: 'inset(0 0 100% 0)' },
          visible: { clipPath: 'inset(0 0 0% 0)' },
        };
      default:
        return {
          hidden: { clipPath: 'inset(0 100% 0 0)' },
          visible: { clipPath: 'inset(0 0% 0 0)' },
        };
    }
  };

  const variants = getDirectionVariants();

  return (
    <motion.div
      className={cn('overflow-hidden', className)}
      variants={variants}
      initial="hidden"
      whileInView={viewport ? "visible" : undefined}
      animate={!viewport ? "visible" : undefined}
      viewport={viewport ? { once } : undefined}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1.0], // Cubic bezier curve similar to basicagency.com
      }}
    >
      {children}
    </motion.div>
  );
};