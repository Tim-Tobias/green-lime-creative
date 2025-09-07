import { motion } from 'framer-motion';

interface PlayButtonProps {
    onClick: () => void;
    isHovering: boolean;
    cursorPosition: { x: number; y: number };
    playing: boolean;
    cursorFollowing?: boolean;
}

export const PlayButton = ({ onClick, isHovering, cursorPosition, playing, cursorFollowing = true }: PlayButtonProps) => {
    return (
        <motion.div
            className="absolute focus:outline-none"
            initial={{ opacity: 0 }}
            animate={{
                left: isHovering && cursorFollowing ? `${cursorPosition.x}px` : '50%',
                top: isHovering && cursorFollowing ? `${cursorPosition.y}px` : '50%',
                opacity: playing ? 0 : 1,
                scale: playing ? 0.8 : 1,
                x: isHovering && cursorFollowing ? 0 : '-50%',
                y: isHovering && cursorFollowing ? 0 : '-50%',
            }}
            transition={{
                left: { type: 'spring', stiffness: 150, damping: 15, mass: 0.1 },
                top: { type: 'spring', stiffness: 150, damping: 15, mass: 0.1 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
            }}
        >
            <motion.button
                className="bg-opacity-70 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                whileTap={{ scale: 0.95 }}
                onClick={onClick}
            >
                <motion.div
                    className="ml-1 h-0 w-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-lime-500"
                    initial={{ x: 0 }}
                    animate={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                />
            </motion.button>
        </motion.div>
    );
};
