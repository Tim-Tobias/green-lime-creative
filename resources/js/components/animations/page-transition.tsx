import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

interface PageTransitionProps {
    children: React.ReactNode;
    className?: string;
    direction?: 'left' | 'right' | 'up' | 'down' | 'fade';
    duration?: number;
    delay?: number;
    mode?: 'wait' | 'sync' | 'popLayout';
}

export const PageTransition: React.FC<PageTransitionProps> = ({
    children,
    className = '',
    direction = 'fade',
    duration = 0.5,
    delay = 0,
    mode = 'wait',
}) => {
    const getVariants = () => {
        const variants = {
            initial: {},
            animate: {},
            exit: {},
        };

        switch (direction) {
            case 'left':
                variants.initial = { x: '100%', opacity: 0 };
                variants.animate = { x: 0, opacity: 1, transition: { duration, delay, ease: 'easeInOut' } };
                variants.exit = { x: '-100%', opacity: 0, transition: { duration, ease: 'easeInOut' } };
                break;
            case 'right':
                variants.initial = { x: '-100%', opacity: 0 };
                variants.animate = { x: 0, opacity: 1, transition: { duration, delay, ease: 'easeInOut' } };
                variants.exit = { x: '100%', opacity: 0, transition: { duration, ease: 'easeInOut' } };
                break;
            case 'up':
                variants.initial = { y: '100%', opacity: 0 };
                variants.animate = { y: 0, opacity: 1, transition: { duration, delay, ease: 'easeInOut' } };
                variants.exit = { y: '-100%', opacity: 0, transition: { duration, ease: 'easeInOut' } };
                break;
            case 'down':
                variants.initial = { y: '-100%', opacity: 0 };
                variants.animate = { y: 0, opacity: 1, transition: { duration, delay, ease: 'easeInOut' } };
                variants.exit = { y: '100%', opacity: 0, transition: { duration, ease: 'easeInOut' } };
                break;
            case 'fade':
                variants.initial = { opacity: 0 };
                variants.animate = { opacity: 1, transition: { duration, delay, ease: 'easeInOut' } };
                variants.exit = { opacity: 0, transition: { duration, ease: 'easeInOut' } };
                break;
            default:
                variants.initial = { opacity: 0 };
                variants.animate = { opacity: 1, transition: { duration, delay, ease: 'easeInOut' } };
                variants.exit = { opacity: 0, transition: { duration, ease: 'easeInOut' } };
        }

        return variants;
    };

    return (
        <AnimatePresence mode={mode}>
            <motion.div className={cn(className)} initial="initial" animate="animate" exit="exit" variants={getVariants()}>
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default PageTransition;
