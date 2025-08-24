import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { BiVolumeFull, BiVolumeMute } from 'react-icons/bi';

interface VideoVolumeProps {
    volume: number;
    onVolumeChange: (volume: number) => void;
    isHovering: boolean;
    playing: boolean;
    isFullscreen: boolean;
}

export const VideoVolume = ({ volume, onVolumeChange, isHovering, playing, isFullscreen }: VideoVolumeProps) => {
    const [showVolumeSlider, setShowVolumeSlider] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [previousVolume, setPreviousVolume] = useState(1);
    const volumeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (volume === 0) {
            setIsMuted(true);
        } else {
            setIsMuted(false);
            setPreviousVolume(volume);
        }
    }, [volume]);

    const handleVolumeClick = () => {
        if (isMuted) {
            onVolumeChange(previousVolume);
            setIsMuted(false);
        } else {
            setPreviousVolume(volume);
            onVolumeChange(0);
            setIsMuted(true);
        }
    };

    const handleVolumeChange = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!volumeRef.current) return;

        const rect = volumeRef.current.getBoundingClientRect();
        const height = rect.height;
        const y = e.clientY - rect.top;
        const volumeValue = Math.max(0, Math.min(1, 1 - y / height));

        onVolumeChange(volumeValue);
    };

    return (
        <motion.div
            className={`absolute right-4 bottom-16 flex flex-col items-center ${isFullscreen ? 'bottom-16' : 'bottom-4'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovering ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setShowVolumeSlider(true)}
            onMouseLeave={() => setShowVolumeSlider(false)}
        >
            {showVolumeSlider && (
                <motion.div
                    className="bg-opacity-50 relative mb-2 h-24 w-1 cursor-pointer rounded-full bg-gray-300"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 96 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    ref={volumeRef}
                    onClick={handleVolumeChange}
                >
                    <motion.div className="absolute right-0 bottom-0 left-0 rounded-full bg-white" style={{ height: `${volume * 100}%` }} />
                </motion.div>
            )}
            <motion.button
                className="bg-opacity-50 rounded-full bg-black p-2 text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleVolumeClick}
            >
                {isMuted ? <BiVolumeMute size={20} /> : <BiVolumeFull size={20} />}
            </motion.button>
        </motion.div>
    );
};
