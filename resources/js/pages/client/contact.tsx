import { PageWrapper, ScrollReveal } from '@/components/animations';
import PhotoSlider from '@/components/PhotoSlider';
import { Head } from '@inertiajs/react';

export default function Contact() {
    const contactPhotos = [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=1200&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=1200&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=1200&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=1200&fit=crop&crop=center',
    ];

    const officePhotos1 = [
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600&h=400&fit=crop&crop=center',
    ];

    const officePhotos2 = [
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop&crop=center',
    ];

    return (
        <>
            <Head title="Contact Us" />
            <PageWrapper className="relative overflow-hidden">
                {/* Main Contact Section */}
                <section className="bg-white" data-bg-color="#E6E6E6">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 pt-30 lg:grid-cols-2 lg:py-40">
                            {/* Left Photo Section */}
                            <div className="relative aspect-[3/4] px-5 lg:px-0">
                                <PhotoSlider
                                    photos={contactPhotos}
                                    className="h-full w-full"
                                    showNavigation={false}
                                    showPagination={false}
                                    autoplay={true}
                                    enableModal={true}
                                    modalTitle="Contact Photo"
                                />
                            </div>

                            {/* Right Content Section */}
                            <div className="flex h-full justify-center p-8 lg:p-16">
                                <div className="flex w-full max-w-2xl flex-col justify-between">
                                    <ScrollReveal delay={0.2}>
                                        <div className="mb-16">
                                            <h1 className="mb-8 text-5xl font-bold text-black md:text-6xl lg:text-7xl">
                                                CONTACT
                                                <br />
                                                US<span className="align-top text-sm">®</span>
                                            </h1>

                                            <div className="w-[25%] text-sm text-gray-600">
                                                <p>
                                                    Make Impact THROUGH CREATIVITY GCS<span className="align-top text-sm">®</span>, QQF8+GM
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    <ScrollReveal delay={0.4}>
                                        <div className="mb-16 grid gap-10 md:grid-cols-3 md:gap-0">
                                            <img src="/logo/Logogram-lime.png" alt="" className="h-10 w-auto animate-spin md:h-20" />

                                            <div className="col-span-2 grid gap-8 md:grid-cols-2">
                                                <div>
                                                    <h3 className="mb-2 text-lg font-semibold text-black">GENERAL</h3>
                                                    <p className="text-lg text-gray-600">hello@greenlime.studio</p>
                                                </div>

                                                <div>
                                                    <h3 className="mb-2 text-lg font-semibold text-black">CREATIVE</h3>
                                                    <p className="text-lg text-gray-600">creative@greenlime.studio</p>
                                                </div>

                                                <div>
                                                    <h3 className="mb-2 text-lg font-semibold text-black">JOIN US</h3>
                                                    <p className="text-lg text-gray-600">careers@greenlime.studio</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Offices Section */}
                <section className="bg-white lg:py-16" data-bg-color="#E6E6E6">
                    <div className="container mx-auto px-8 lg:px-16">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                            {/* Left - OFFICES Text */}
                            <div className="flex h-full flex-col justify-center lg:border-r">
                                <ScrollReveal delay={0.2}>
                                    <h2 className="mb-4 text-4xl font-bold text-black">OFFICES</h2>
                                    <div className="space-y-1 text-sm text-gray-600">
                                        Jl. Persatuan 3 No. 10B,
                                        <br />
                                        Kby Lama, South Jakarta,
                                        <br />
                                        Indonesia
                                    </div>
                                </ScrollReveal>
                            </div>

                            {/* PHOTOS */}
                            <div className="relative col-span-2">
                                <ScrollReveal delay={0.4}>
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        <div className="md:aspect-[3/4]">
                                            <PhotoSlider
                                                photos={officePhotos1}
                                                className="h-full w-full"
                                                showNavigation={false}
                                                showPagination={false}
                                                autoplay={true}
                                                enableModal={true}
                                                modalTitle="Office Photo Set 1"
                                            />
                                        </div>
                                        <div className="md:aspect-[3/4]">
                                            <PhotoSlider
                                                photos={officePhotos2}
                                                className="h-full w-full"
                                                showNavigation={false}
                                                showPagination={false}
                                                autoplay={true}
                                                enableModal={true}
                                                modalTitle="Office Photo Set 2"
                                            />
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </section>
            </PageWrapper>
        </>
    );
}
