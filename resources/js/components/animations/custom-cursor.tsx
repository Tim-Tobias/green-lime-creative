import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type CustomCursorProps = {
  className?: string;
  size?: number;
  color?: string;
  mixBlendMode?: string;
  trailEffect?: boolean;
};

export const CustomCursor = ({
  className = '',
  size = 24,
  color = 'rgba(255, 255, 255, 0.8)',
  mixBlendMode = 'difference',
  trailEffect = false,
}: CustomCursorProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Track hover state on interactive elements
    const handleElementMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if element or its parent has data-cursor-following="false"
      if (target.getAttribute('data-cursor-following') === 'false' || 
          target.closest('[data-cursor-following="false"]')) {
        setIsVisible(false);
        return;
      }
      
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      }
    };

    const handleElementMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Restore visibility when leaving an element with data-cursor-following="false"
      if (target.getAttribute('data-cursor-following') === 'false' || 
          target.closest('[data-cursor-following="false"]')) {
        setIsVisible(true);
      }
      
      setIsHovering(false);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleElementMouseEnter);
    document.addEventListener('mouseout', handleElementMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleElementMouseEnter);
      document.removeEventListener('mouseout', handleElementMouseLeave);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: position.x - size / 2,
      y: position.y - size / 2,
      width: size,
      height: size,
      backgroundColor: color,
      mixBlendMode,
      opacity: isVisible ? 1 : 0,
    },
    clicking: {
      x: position.x - size / 2,
      y: position.y - size / 2,
      width: size * 0.8,
      height: size * 0.8,
      backgroundColor: color,
      mixBlendMode,
      opacity: isVisible ? 1 : 0,
    },
    hovering: {
      x: position.x - size,
      y: position.y - size,
      width: size * 1.5,
      height: size * 1.5,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      mixBlendMode,
      opacity: isVisible ? 1 : 0,
    },
  };

  const cursorState = isHovering ? 'hovering' : isClicking ? 'clicking' : 'default';

  return (
    <motion.div
      className={cn(
        'fixed top-0 left-0 rounded-full pointer-events-none z-50',
        className
      )}
      variants={cursorVariants}
      animate={cursorState}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 200,
        mass: trailEffect ? 0.5 : 0.1,
      }}
    />
  );
};