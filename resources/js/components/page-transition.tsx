import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
    children: ReactNode;
    location: string;
}

export const PageTransition = ({ children, location }: PageTransitionProps) => {
    const pageVariants = {
        initial: {
            opacity: 0,
            y: 20,
        },
        in: {
            opacity: 1,
            y: 0,
        },
        out: {
            opacity: 0,
            y: -20,
        },
    };

    const pageTransition = {
        type: 'tween',
        ease: 'anticipate',
        duration: 0.5,
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="h-full w-full"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};
