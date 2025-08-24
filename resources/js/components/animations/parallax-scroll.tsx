import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ParallaxScrollProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  offset?: [number, number];
}

export const ParallaxScroll = ({
  children,
  className = '',
  speed = 0.5,
  direction = 'up',
  offset = [-100, 100],
}: ParallaxScrollProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const getTransformValue = () => {
    switch (direction) {
      case 'up':
        return useTransform(scrollYProgress, [0, 1], [offset[1] * speed, offset[0] * speed]);
      case 'down':
        return useTransform(scrollYProgress, [0, 1], [offset[0] * speed, offset[1] * speed]);
      case 'left':
        return useTransform(scrollYProgress, [0, 1], [offset[1] * speed, offset[0] * speed]);
      case 'right':
        return useTransform(scrollYProgress, [0, 1], [offset[0] * speed, offset[1] * speed]);
      default:
        return useTransform(scrollYProgress, [0, 1], [offset[1] * speed, offset[0] * speed]);
    }
  };

  const transformValue = getTransformValue();
  const style = direction === 'left' || direction === 'right' 
    ? { x: transformValue } 
    : { y: transformValue };

  return (
    <div ref={ref} className={cn('overflow-hidden', className)}>
      <motion.div style={style}>{children}</motion.div>
    </div>
  );
};