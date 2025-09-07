import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Keyboard, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface ImageLightboxProps {
    images: Array<{
        url: string;
        alt: string;
        description?: string;
    }>;
    isOpen: boolean;
    onClose: () => void;
    initialIndex?: number;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({ images, isOpen, onClose, initialIndex = 0 }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    useEffect(() => {
        setCurrentIndex(initialIndex);
    }, [initialIndex]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!images || images.length === 0) {
        return null;
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50">
            <div onClick={onClose} className="absolute top-0 left-0 min-h-screen w-full bg-black/70"></div>
            <div className="relative m-auto h-[80%] w-[80%]">
                <Swiper
                    modules={[Navigation, Keyboard]}
                    navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                    }}
                    keyboard={{
                        enabled: true,
                        onlyInViewport: false,
                    }}
                    initialSlide={currentIndex}
                    className="h-full w-full"
                    onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex h-full w-full items-center justify-center">
                                <img src={image.url} alt={image.alt} draggable={false} className="object-contain" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm text-white backdrop-blur-sm">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>
        </div>
    );
};

export default ImageLightbox;
