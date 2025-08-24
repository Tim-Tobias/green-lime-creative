import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { cn } from '@/lib/utils';

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  speed?: number; // Positive values move slower, negative values move faster
  direction?: 'vertical' | 'horizontal';
};

export const Parallax = ({
  children,
  className = '',
  speed = 0.5,
  direction = 'vertical',
}: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Calculate movement based on scroll position and speed
  const movement = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'vertical' ? ['0%', `${speed * 100}%`] : ['0%', `${speed * 100}%`]
  );

  return (
    <div ref={ref} className={cn('relative overflow-hidden', className)}>
      <motion.div
        style={{
          [direction === 'vertical' ? 'y' : 'x']: movement,
        }}
        transition={{ ease: 'linear' }}
      >
        {children}
      </motion.div>
    </div>
  );
};