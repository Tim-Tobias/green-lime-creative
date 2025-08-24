import { motion } from 'framer-motion';
import { BiPlay } from 'react-icons/bi';

interface VideoThumbnailProps {
  thumbnail?: string;
  playing: boolean;
  onPlay: () => void;
  title?: string;
}

export const VideoThumbnail = ({ thumbnail, playing, onPlay, title }: VideoThumbnailProps) => {
  if (!thumbnail || playing) return null;
  
  return (
    <motion.div
      className="absolute inset-0 bg-black cursor-pointer"
      initial={{ opacity: 1 }}
      animate={{ opacity: playing ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onPlay}
      style={{ pointerEvents: playing ? 'none' : 'auto' }}
    >
      {thumbnail && (
        <img 
          src={thumbnail} 
          alt={title || 'Video thumbnail'} 
          className="w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <motion.div
          className="bg-white bg-opacity-80 rounded-full p-4 text-black"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <BiPlay size={40} />
        </motion.div>
      </div>
      {title && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
          <h3 className="text-white text-xl font-bold">{title}</h3>
        </div>
      )}
    </motion.div>
  );
};