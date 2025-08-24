import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { FullscreenButton } from './fullscreen-button';
import { PlayButton } from './play-button';
import { VideoControls } from './video-controls';
import { VideoOverlay } from './video-overlay';
import { VideoThumbnail } from './video-thumbnail';
import { VideoTitle } from './video-title';
import { VideoVolume } from './video-volume';

interface VideoPlayerProps {
    src: string;
    title?: string;
    description?: string;
    thumbnail?: string;
    className?: string;
    width?: string | number;
    height?: string | number;
}

export const VideoPlayer = ({
    src,
    title = '',
    description = '',
    thumbnail = '',
    className = '',
    width = '100%',
    height = '100%',
}: VideoPlayerProps) => {
    const [playing, setPlaying] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [muted, setMuted] = useState(false);
    const [volume, setVolume] = useState(1);
    const playerRef = useRef(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const videoContainerRef = useRef(null);

    // Initialize cursor position to center when component mounts
    useEffect(() => {
        if (videoContainerRef.current) {
            const rect = videoContainerRef.current.getBoundingClientRect();
            setCursorPosition({
                x: rect.width / 2,
                y: rect.height / 2,
            });
        }
    }, []);

    const togglePlay = () => {
        setPlaying(!playing);
    };

    const toggleMute = () => {
        setMuted(!muted);
    };

    const handleVolumeChange = (newVolume: number) => {
        setVolume(newVolume);
    };

    const toggleFullscreen = () => {
        if (!videoContainerRef.current) return;

        if (!isFullscreen) {
            if (videoContainerRef.current.requestFullscreen) {
                videoContainerRef.current.requestFullscreen();
            } else if (videoContainerRef.current.webkitRequestFullscreen) {
                videoContainerRef.current.webkitRequestFullscreen();
            } else if (videoContainerRef.current.msRequestFullscreen) {
                videoContainerRef.current.msRequestFullscreen();
            }
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            setIsFullscreen(false);
        }
    };

    // Listen for fullscreen change events
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('mozfullscreenchange', handleFullscreenChange);
        document.addEventListener('MSFullscreenChange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
            document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
        };
    }, []);

    const handleMouseMove = (e) => {
        if (!videoContainerRef.current) return;

        const rect = videoContainerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setCursorPosition({ x, y });
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        // Reset to center when mouse leaves
        if (videoContainerRef.current) {
            const rect = videoContainerRef.current.getBoundingClientRect();
            setCursorPosition({
                x: rect.width / 2,
                y: rect.height / 2,
            });
        }
    };

    return (
        <div
            className={`relative h-full w-full ${className}`}
            ref={videoContainerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div onClick={togglePlay} className="h-full w-full">
                <ReactPlayer
                    className="object-cover"
                    src={src}
                    width={width}
                    height={height}
                    playing={playing}
                    muted={muted}
                    volume={volume}
                    controls={false}
                    ref={playerRef}
                />
                <PlayButton onClick={togglePlay} isHovering={isHovering} cursorPosition={cursorPosition} playing={playing} />
            </div>
            <FullscreenButton onClick={toggleFullscreen} isHovering={isHovering} playing={playing} isFullscreen={isFullscreen} />
            <VideoVolume volume={volume} onVolumeChange={handleVolumeChange} isHovering={isHovering} playing={playing} isFullscreen={isFullscreen} />
            <VideoControls isHovering={isHovering} playing={playing} muted={muted} onVolumeToggle={toggleMute} />
            {title && <VideoTitle title={title} isHovering={isHovering} playing={playing} />}
            {thumbnail && <VideoOverlay playing={playing} title={title} description={description} />}
            {thumbnail && <VideoThumbnail thumbnail={thumbnail} playing={playing} onPlay={() => setPlaying(true)} title={title} />}
        </div>
    );
};
