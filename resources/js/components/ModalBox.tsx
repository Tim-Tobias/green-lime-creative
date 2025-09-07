import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface ModalBoxProps {
    items: Array<{
        content: React.ReactNode;
        title?: string;
        description?: string;
    }>;
    isOpen: boolean;
    onClose: () => void;
    initialIndex?: number;
    showNavigation?: boolean;
    showPagination?: boolean;
    showCounter?: boolean;
    className?: string;
}

const ModalBox: React.FC<ModalBoxProps> = ({
    items,
    isOpen,
    onClose,
    initialIndex = 0,
    showNavigation = true,
    showPagination = false,
    showCounter = true,
    className = '',
}) => {
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
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!items || items.length === 0) {
        return null;
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div onClick={onClose} className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            {/* Modal Content */}
            <div className={`relative h-[90vh] w-[90vw] max-w-7xl ${className}`}>
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-black/70"
                >
                    <X size={20} />
                </button>

                {/* Swiper Container */}
                <Swiper
                    key={`modal-swiper-${initialIndex}-${isOpen}`}
                    modules={[Navigation, Keyboard, ...(showPagination ? [Pagination] : [])]}
                    navigation={
                        showNavigation
                            ? {
                                  nextEl: '.modal-swiper-button-next',
                                  prevEl: '.modal-swiper-button-prev',
                              }
                            : false
                    }
                    pagination={
                        showPagination
                            ? {
                                  clickable: true,
                                  el: '.modal-swiper-pagination',
                              }
                            : false
                    }
                    keyboard={{
                        enabled: true,
                        onlyInViewport: false,
                    }}
                    initialSlide={initialIndex}
                    className="h-full w-full"
                    onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
                >
                    {items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex h-full w-full flex-col items-center justify-center p-4">
                                {/* Content */}
                                <div className="flex h-full w-full items-center justify-center">{item.content}</div>

                                {/* Title and Description */}
                                {(item.title || item.description) && (
                                    <div className="absolute bottom-16 left-1/2 z-10 max-w-md -translate-x-1/2 text-center">
                                        {item.title && <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>}
                                        {item.description && <p className="text-sm text-white/80">{item.description}</p>}
                                    </div>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                {showNavigation && items.length > 1 && (
                    <>
                        <div className="modal-swiper-button-prev absolute top-1/2 left-4 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-black/70">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </div>
                        <div className="modal-swiper-button-next absolute top-1/2 right-4 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-black/70">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </>
                )}

                {/* Pagination */}
                {showPagination && <div className="modal-swiper-pagination absolute bottom-8 left-1/2 z-10 -translate-x-1/2" />}

                {/* Counter */}
                {showCounter && items.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-sm text-white backdrop-blur-sm">
                        {currentIndex + 1} / {items.length}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ModalBox;
