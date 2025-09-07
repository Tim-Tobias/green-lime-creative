import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import HeroVideo from '../../videos/[Visualizer] Milena 밀레나 - Older than you.mp4';
import { VideoPlayer } from './video-player';

// Import Swiper styles
import 'swiper/css';
import './VideoSlider.css';

interface VideoSliderProps {
    videos: {
        url: string;
        thumbnail?: string;
        title?: string;
        description?: string;
    }[];
    className?: string;
    showNavigation?: boolean;
    showPagination?: boolean;
    autoplay?: boolean;
    slidesPerView?: number;
    spaceBetween?: number;
}

const VideoSlider: React.FC<VideoSliderProps> = ({ videos, className = '', autoplay = false, slidesPerView = 1, spaceBetween = 30 }) => {
    return (
        <div className={`video-slider ${className}`}>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                autoplay={
                    autoplay
                        ? {
                              delay: 5000,
                              disableOnInteraction: false,
                          }
                        : false
                }
                loop={videos.length > 1}
                className="h-full w-full"
                centeredSlides={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        centeredSlides: true,
                    },
                    700: {
                        slidesPerView: 2.5,
                        spaceBetween: 20,
                        centeredSlides: true,
                    },
                    1100: {
                        slidesPerView: slidesPerView,
                        spaceBetween: spaceBetween,
                        centeredSlides: true,
                    },
                }}
            >
                {videos.map((video, index) => (
                    <SwiperSlide key={index}>
                        <div className="h-full w-full md:aspect-[3/4.5]">
                            <VideoPlayer
                                src={HeroVideo}
                                title={video.title}
                                description={video.description}
                                className="rounded-lg"
                                cursorFollowing={false}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default VideoSlider;
