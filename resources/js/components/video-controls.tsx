import { motion } from 'framer-motion';
import { useState } from 'react';
import { BiVolumeFull, BiVolumeMute } from 'react-icons/bi';

interface VideoControlsProps {
  isHovering: boolean;
  playing: boolean;
  muted: boolean;
  onVolumeToggle: () => void;
}

export const VideoControls = ({ isHovering, playing, muted, onVolumeToggle }: VideoControlsProps) => {
  return (
    <motion.div
      className="absolute bottom-4 left-4 focus:outline-none"
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
        onClick={onVolumeToggle}
      >
        {muted ? (
          <BiVolumeMute className="text-lime-500" size={20} />
        ) : (
          <BiVolumeFull className="text-lime-500" size={20} />
        )}
      </motion.button>
    </motion.div>
  );
};