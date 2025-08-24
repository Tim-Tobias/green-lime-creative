import { motion } from 'framer-motion';
import { BiFullscreen, BiExitFullscreen } from 'react-icons/bi';

interface FullscreenButtonProps {
  onClick: () => void;
  isHovering: boolean;
  playing: boolean;
  isFullscreen: boolean;
}

export const FullscreenButton = ({ onClick, isHovering, playing, isFullscreen }: FullscreenButtonProps) => {
  return (
    <motion.div
      className="absolute bottom-4 right-4 focus:outline-none"
      initial={{ opacity: 0 }}
      animate={{
        opacity: isHovering || playing ? 1 : 0,
      }}
      transition={{
        opacity: { duration: 0.3 },
      }}
    >
      <motion.button
        className="bg-opacity-70 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg"
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
      >
        {isFullscreen ? (
          <BiExitFullscreen className="text-lime-500" size={20} />
        ) : (
          <BiFullscreen className="text-lime-500" size={20} />
        )}
      </motion.button>
    </motion.div>
  );
};