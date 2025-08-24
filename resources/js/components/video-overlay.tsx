import { motion } from 'framer-motion';

interface VideoOverlayProps {
  playing: boolean;
  title?: string;
  description?: string;
}

export const VideoOverlay = ({ playing, title, description }: VideoOverlayProps) => {
  return (
    <motion.div
      className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-6 text-white"
      initial={{ opacity: 0 }}
      animate={{
        opacity: playing ? 0 : 1,
      }}
      transition={{
        opacity: { duration: 0.3 },
      }}
      style={{ pointerEvents: playing ? 'none' : 'auto' }}
    >
      {title && (
        <motion.h2 
          className="text-2xl font-bold mb-2"
          initial={{ y: -20 }}
          animate={{ y: playing ? -20 : 0 }}
          transition={{ duration: 0.4 }}
        >
          {title}
        </motion.h2>
      )}
      {description && (
        <motion.p 
          className="text-sm text-center max-w-md"
          initial={{ y: 20 }}
          animate={{ y: playing ? 20 : 0 }}
          transition={{ duration: 0.4 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};