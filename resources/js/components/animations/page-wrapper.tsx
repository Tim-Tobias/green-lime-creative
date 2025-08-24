import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';

interface PageWrapperProps {
    children: React.ReactNode;
    className?: string;
    initial?: boolean;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children, className = '', initial = true }) => {
    const pageVariants = {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.3,
                ease: 'easeInOut',
            }
        }
    };

    return (
        <motion.div 
            className={cn('w-full', className)} 
            initial={initial ? 'initial' : false}
            animate="animate"
            exit="exit"
            variants={pageVariants}
        >
            {children}
        </motion.div>
    );
};

export default PageWrapper;
