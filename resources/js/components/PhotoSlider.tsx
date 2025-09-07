import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ModalBox from './ModalBox';
import './PhotoSlider.css';

interface PhotoSliderProps {
    photos: string[];
    className?: string;
    showNavigation?: boolean;
    showPagination?: boolean;
    autoplay?: boolean;
    slidesPerView?: number;
    spaceBetween?: number;
    enableModal?: boolean;
    modalTitle?: string;
}

const PhotoSlider: React.FC<PhotoSliderProps> = ({
    photos,
    className = '',
    showNavigation = true,
    showPagination = true,
    autoplay = true,
    slidesPerView = 1,
    spaceBetween = 20,
    enableModal = false,
    modalTitle = 'Photo Gallery',
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);

    const handlePhotoClick = (index: number) => {
        if (enableModal) {
            setModalIndex(index);
            setIsModalOpen(true);
        }
    };
    return (
        <div className={`photo-slider ${className}`}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                navigation={
                    showNavigation
                        ? {
                              nextEl: '.swiper-button-next-custom',
                              prevEl: '.swiper-button-prev-custom',
                          }
                        : false
                }
                pagination={
                    showPagination
                        ? {
                              clickable: true,
                              el: '.swiper-pagination-custom',
                              bulletClass: 'swiper-pagination-bullet-custom',
                              bulletActiveClass: 'swiper-pagination-bullet-active-custom',
                          }
                        : false
                }
                autoplay={
                    autoplay
                        ? {
                              delay: 3000,
                              disableOnInteraction: false,
                          }
                        : false
                }
                loop={true}
                className="h-full w-full"
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: slidesPerView,
                        spaceBetween: spaceBetween,
                    },
                }}
            >
                {photos.map((photo, index) => (
                    <SwiperSlide key={index}>
                        <div 
                            className={`relative h-full w-full ${enableModal ? 'cursor-pointer' : ''}`}
                            onClick={() => handlePhotoClick(index)}
                        >
                            <img
                                src={photo}
                                alt={`Photo ${index + 1}`}
                                className="h-full w-full object-cover transition-transform duration-300"
                                loading="lazy"
                            />
                        </div>
                    </SwiperSlide>
                ))}

                {/* Custom Navigation */}
                {showNavigation && (
                    <>
                        <div className="swiper-button-prev-custom absolute top-1/2 left-4 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 text-black shadow-lg transition-all hover:scale-110 hover:bg-white">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </div>
                        <div className="swiper-button-next-custom absolute top-1/2 right-4 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 text-black shadow-lg transition-all hover:scale-110 hover:bg-white">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </>
                )}

                {/* Custom Pagination */}
                {showPagination && <div className="swiper-pagination-custom absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2"></div>}
            </Swiper>

            {/* Modal Box */}
            {enableModal && (
                <ModalBox
                    items={photos.map((photo, index) => ({
                        content: (
                            <img
                                src={photo}
                                alt={`${modalTitle} ${index + 1}`}
                                className="h-full w-full object-contain"
                            />
                        ),
                        title: `${modalTitle} ${index + 1}`,
                    }))}
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    initialIndex={modalIndex}
                    showNavigation={true}
                    showPagination={false}
                    showCounter={true}
                />
            )}
        </div>
    );
};

export default PhotoSlider;
