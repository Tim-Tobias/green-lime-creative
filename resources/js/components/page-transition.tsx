import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useEffect } from 'react';

interface PageTransitionProps {
    children: ReactNode;
    location: string;
}

export const PageTransition = ({ children, location }: PageTransitionProps) => {
    // Reset scroll position when location changes
    useEffect(() => {
        // Force immediate scroll reset
        const resetScroll = () => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        };
        
        resetScroll();
        
        // Additional reset after a brief delay to ensure it works
        const timeoutId = setTimeout(resetScroll, 10);
        
        return () => clearTimeout(timeoutId);
    }, [location]);
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
