import { PageWrapper, ScrollReveal } from '@/components/animations';
import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import ModalBox from '../../components/ModalBox';
import VideoSlider from '../../components/VideoSlider';

interface WorkDetailProps {
    work: {
        id: number;
        title: string;
        description: string;
        category: string;
        subcategory: string;
        client?: string;
        year?: string;
        duration?: string;
        team?: string[];
        technologies?: string[];
        challenge?: string;
        solution?: string;
        result?: string;
        videos: {
            url: string;
            thumbnail?: string;
            title?: string;
            description?: string;
        }[];
        images?: string[];
        gallery?: {
            url: string;
            alt: string;
            description?: string;
        }[];
        testimonial?: {
            quote: string;
            author: string;
            position: string;
            company: string;
        };
    };
}

const WorkDetail: React.FC<WorkDetailProps> = ({ work }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalItems, setModalItems] = useState<
        Array<{
            content: React.ReactNode;
            title?: string;
            description?: string;
        }>
    >([]);
    const [initialIndex, setInitialIndex] = useState(0);

    const openImageModal = (index: number) => {
        const imageItems =
            work.images?.map((image, idx) => ({
                content: <img src={image} alt={`Project Photo ${idx + 1}`} className="max-h-full max-w-full object-contain" />,
                title: `Project Photo ${idx + 1}`,
                description: `${work.title} - Photo ${idx + 1}`,
            })) || [];

        setModalItems(imageItems);
        setInitialIndex(index);
        setIsModalOpen(true);
    };

    const openGalleryModal = (index: number) => {
        const galleryItems =
            work.gallery?.map((image, idx) => ({
                content: <img src={image.url} alt={image.alt} className="max-h-full max-w-full object-contain" />,
                title: image.alt,
                description: image.description || `${work.title} - Gallery ${idx + 1}`,
            })) || [];

        setModalItems(galleryItems);
        setInitialIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Head title={`${work.title} - Portfolio Detail`} />

            {/* Hero Section with Video Showcase */}
            <PageWrapper className="relative bg-white">
                <section className="relative container mx-auto pt-20 pb-10 md:pt-44" data-bg-color="#E6E6E6">
                    {/* Video Slider Container */}
                    <ScrollReveal direction="up" delay={0.1}>
                        <div data-cursor-following="false" className="mx-auto overflow-hidden px-4">
                            <VideoSlider videos={work.videos} autoplay={false} slidesPerView={3.5} spaceBetween={-10} />
                        </div>
                    </ScrollReveal>
                </section>

                {/* Project Info Section */}
                <section className="relative bg-gray-50 py-10" data-bg-color="#E6E6E6">
                    <div className="container mx-auto px-4">
                        <div className="py-5 md:border-t">
                            {/* Project Title and Category */}
                            <ScrollReveal direction="up" delay={0.2}>
                                <div className="mb-16">
                                    <div className="mb-6 flex flex-col items-center gap-4 md:flex-row">
                                        <span className="text-lg font-medium text-gray-600">Project</span>
                                        <span className="h-px w-12 bg-gray-300"></span>
                                        <span className="text-lg font-bold text-gray-900">{work.title}</span>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Project Description */}
                            <ScrollReveal direction="up" delay={0.3}>
                                <div className="max-w-3xl text-center md:text-left">
                                    <p className="text-lg leading-relaxed text-gray-600">{work.description}</p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Photo Gallery Section */}
                <section className="relative bg-white py-10" data-bg-color="#E6E6E6">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto border-t py-10">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {work.images?.map((image, index) => (
                                    <ScrollReveal key={index} direction="up" delay={0.1 * (index + 1)}>
                                        <div
                                            className="group relative aspect-[3/4.5] cursor-pointer overflow-hidden rounded-lg bg-gray-100"
                                            onClick={() => openImageModal(index)}
                                        >
                                            <img
                                                src={image}
                                                alt={`Project Photo ${index + 1}`}
                                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center bg-black opacity-0 transition-all duration-300 group-hover:opacity-80">
                                                <span className="font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                    VIEW FULLSCREEN
                                                </span>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <ScrollReveal direction="up" delay={0.1}>
                    <section className="py-16" data-bg-color="#E6E6E6">
                        <div className="container mx-auto px-6">
                            <div className="flex flex-col">
                                <div className="mb-10 w-full border-t-2 border-black"></div>
                                <ScrollReveal delay={0.5}>
                                    <h2 className="my-3 text-4xl font-bold text-black md:text-5xl lg:text-7xl">
                                        BEHIND THE SCENE
                                        <span className="text-3xl">®</span>
                                    </h2>
                                </ScrollReveal>
                                <div className="mt-10 w-full border-b-2 border-black"></div>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* Masonry Gallery Section */}
                <section className="relative bg-white py-20" data-bg-color="#E6E6E6">
                    <div className="container mx-auto px-4">
                        {/* Masonry Grid */}
                        <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3 xl:columns-4">
                            {work.gallery?.map((image, index) => (
                                <ScrollReveal key={index} direction="up" delay={0.1 * (index + 1)}>
                                    <div className="mb-6 break-inside-avoid">
                                        <div 
                                            className="group relative overflow-hidden rounded-lg bg-gray-100 shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer"
                                            onClick={() => openGalleryModal(index)}
                                        >
                                            <img
                                                src={image.url}
                                                alt={image.alt}
                                                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center bg-black opacity-0 transition-all duration-300 group-hover:opacity-30">
                                                <span className="text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                    {image.description}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>
            </PageWrapper>

            {/* ModalBox for fullscreen image viewing */}
            <ModalBox
                items={modalItems}
                isOpen={isModalOpen}
                onClose={closeModal}
                initialIndex={initialIndex}
                showNavigation={true}
                showCounter={true}
                showPagination={false}
            />
        </>
    );
};

export default WorkDetail;
