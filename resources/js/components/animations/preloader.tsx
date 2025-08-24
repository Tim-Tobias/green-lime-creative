import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PreloaderProps {
    duration?: number;
    delay?: number;
    backgroundColor?: string;
    textColor?: string;
    text?: string;
}

export function Preloader({ duration = 2, delay = 0, backgroundColor = '#BDD330', textColor = '#096260', text = 'GREEN LIME' }: PreloaderProps) {
    const [loading, setLoading] = useState(true);

    // Add overflow hidden to body when preloader is active
    useEffect(() => {
        if (loading) {
            document.documentElement.style.overflow = 'hidden'; // Also set on html element

            // Restore original overflow when preloader is removed
            return () => {
                document.documentElement.style.overflow = '';
            };
        }
    }, [loading]);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(
            () => {
                // Start exit animation for text reveal
                setIsExiting(true);

                // After text reveal animation completes, hide the preloader
                setTimeout(() => {
                    setLoading(false);
                }, 800); // Match the duration of text reveal exit animation
            },
            (duration + delay) * 1000,
        );

        return () => clearTimeout(timer);
    }, [duration, delay]);

    // State to track when to start exit animation
    const [isExiting, setIsExiting] = useState(false);

    // Variants for container animation
    const containerVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: {
            y: '-100%',
            transition: {
                duration: 0.8,
                ease: [0.65, 0, 0.35, 1],
            },
        },
    };

    // Variants for text reveal animation
    const textRevealVariants = {
        initial: { height: '100%' },
        animate: {
            height: 0,
            transition: {
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.65, 0.35, 1],
            },
        },
        exit: {
            height: '100%',
            transition: {
                duration: 0.5,
                ease: [0.65, 0, 0.35, 1],
            },
        },
    };

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center"
                    style={{ backgroundColor }}
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <div className="relative">
                        <motion.div
                            className="font-sans text-5xl font-bold tracking-tight md:text-8xl"
                            style={{ color: textColor }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {text}
                        </motion.div>

                        {/* Mask for vertical wipe reveal effect */}
                        <motion.div
                            className="absolute inset-0 origin-bottom"
                            style={{ backgroundColor }}
                            variants={textRevealVariants}
                            initial="initial"
                            animate={isExiting ? 'exit' : 'animate'}
                            exit="exit"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Preloader;
