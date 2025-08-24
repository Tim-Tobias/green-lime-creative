import { motion, useScroll, useSpring } from 'framer-motion';
import { ReactNode, useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type SmoothScrollProps = {
  children: ReactNode;
  className?: string;
  damping?: number;
  mass?: number;
  stiffness?: number;
};

export const SmoothScroll = ({
  children,
  className = '',
  damping = 30,
  mass = 1,
  stiffness = 100,
}: SmoothScrollProps) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollableRef = useRef<HTMLDivElement>(null);

  // Get scroll progress
  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, {
    damping,
    mass,
    stiffness,
  });

  // Update window height on resize
  useEffect(() => {
    const updateHeight = () => {
      if (scrollableRef.current) {
        setWindowHeight(scrollableRef.current.scrollHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // Apply smooth scroll effect
  useEffect(() => {
    return smoothY.onChange((latest) => {
      if (containerRef.current) {
        containerRef.current.style.transform = `translateY(${-latest}px)`;
      }
    });
  }, [smoothY]);

  return (
    <div className={cn('fixed top-0 left-0 w-full h-screen overflow-hidden', className)}>
      <div ref={scrollableRef} style={{ height: windowHeight }} />
      <motion.div ref={containerRef} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
};