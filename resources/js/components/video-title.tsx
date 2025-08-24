import { motion } from 'framer-motion';

interface VideoTitleProps {
  title: string;
  isHovering: boolean;
  playing: boolean;
}

export const VideoTitle = ({ title, isHovering, playing }: VideoTitleProps) => {
  return (
    <motion.div
      className="absolute top-6 left-6 text-white text-lg font-medium bg-black bg-opacity-50 px-3 py-1 rounded max-w-[80%] truncate"
      initial={{ opacity: 0, y: -10 }}
      animate={{
        opacity: isHovering || playing ? 1 : 0,
        y: isHovering || playing ? 0 : -10,
      }}
      transition={{
        opacity: { duration: 0.3 },
        y: { duration: 0.3 },
      }}
    >
      {title}
    </motion.div>
  );
};