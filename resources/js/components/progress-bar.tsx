import { motion } from 'framer-motion';

interface ProgressBarProps {
  played: number;
  isHovering: boolean;
  playing: boolean;
  onSeek: (value: number) => void;
}

export const ProgressBar = ({ played, isHovering, playing, onSeek }: ProgressBarProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const width = bounds.width;
    const percent = x / width;
    onSeek(percent);
  };

  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800 bg-opacity-50 cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{
        opacity: isHovering || playing ? 1 : 0,
        height: isHovering ? '6px' : '4px'
      }}
      transition={{
        opacity: { duration: 0.3 },
        height: { duration: 0.2 }
      }}
      onClick={handleClick}
    >
      <motion.div
        className="h-full bg-lime-500"
        style={{ width: `${played * 100}%` }}
      />
    </motion.div>
  );
};