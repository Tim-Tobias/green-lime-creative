import { VideoPlayer, WorkCard } from '@/components';
import { ImageReveal, PageWrapper, ScrollReveal } from '@/components/animations';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import HeroVideo from '../../../videos/[Visualizer] Milena 밀레나 - Older than you.mp4';

export default function Welcome() {
    // Sample work data
    const workData = [
        {
            title: 'Brand Identity Design',
            description:
                'Complete brand identity redesign for a modern tech startup, including logo design, color palette, and brand guidelines that reflect innovation and trust.',
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
        },
        {
            title: 'Social Media Campaign',
            description:
                'Creative social media campaign that increased engagement by 300% through compelling visual storytelling and strategic content planning.',
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
        },
        {
            title: 'Product Photography',
            description:
                'Professional product photography session that showcases the beauty and functionality of luxury consumer goods with artistic lighting and composition.',
            image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
        },
    ];

    return (
        <>
            <Head title="Green Lime - Creative Agency">
                {/* Basic Meta Tags */}
                <meta
                    name="description"
                    content="Green Lime is a creative agency specializing in brand identity, digital experiences, and content creation. We help brands tell their stories in compelling and authentic ways."
                />
                <meta name="keywords" content="creative agency, brand identity, digital design, content creation, marketing, branding, web design" />
                <meta name="author" content="Green Lime Creative Agency" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="Green Lime - Creative Agency" />
                <meta
                    property="og:description"
                    content="Make impact through creativity. We create brands that live at the intersection of clarity and surprise."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://greenlime.com" />
                <meta property="og:image" content="https://greenlime.com/og-image.jpg" />
                <meta property="og:site_name" content="Green Lime" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Green Lime - Creative Agency" />
                <meta
                    name="twitter:description"
                    content="Make impact through creativity. We create brands that live at the intersection of clarity and surprise."
                />
                <meta name="twitter:image" content="https://greenlime.com/twitter-image.jpg" />

                {/* Additional Meta Tags */}
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
                <meta name="theme-color" content="#096260" />
                <link rel="canonical" href="https://greenlime.com" />

                {/* Existing Font Links */}
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <PageWrapper className="relative flex min-h-screen flex-col overflow-hidden">
                {/* Hero Section */}
                <section className="flex-grow bg-[#096260] text-white">
                    <div className="container mx-auto grid items-center justify-between gap-5 px-6 py-34 md:py-40 lg:grid-cols-3">
                        <div className="relative lg:col-span-2">
                            <div className="mb-6 text-center lg:text-left">
                                <h1 className="text-5xl font-bold text-[#BDD330] md:text-6xl xl:text-8xl">
                                    MAKE
                                    <br />
                                    IMPACT.
                                    <br />
                                    * THROUGH
                                    <br />
                                    CREATIVITY.
                                </h1>
                            </div>

                            <motion.div
                                initial={{ height: '100%' }}
                                animate={{
                                    height: 0,
                                    transition: {
                                        duration: 0.5,
                                        delay: 1.2, // Dynamic delay
                                    },
                                }}
                                className="absolute top-0 h-full w-full bg-[#096260]"
                            />
                        </div>

                        <ImageReveal delay={1.4} duration={1} direction="bottom" className="relative">
                            <div
                                data-cursor-following="false"
                                className="flex aspect-[3/2] w-full items-center justify-center overflow-hidden lg:aspect-[3/4.5]"
                            >
                                <VideoPlayer
                                    src={HeroVideo}
                                    title="Milena - Older than you"
                                    description="A visualizer music video by Milena featuring beautiful visuals and captivating sounds."
                                    className="rounded-lg shadow-xl"
                                />
                            </div>

                            <p className="mt-3 text-center text-xs text-gray-300 lg:mr-6 lg:text-left">
                                The work we create lives at the intersection clarity and surprise and position brands in culture through shared values
                                and ideals.
                            </p>
                        </ImageReveal>
                    </div>
                </section>

                {/* About Section */}
                <section className="bg-[#E6E6E6] py-20">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                            <div className="md:w-1/2">
                                <ScrollReveal direction="left" delay={0.5}>
                                    <p className="text-lg text-gray-600">
                                        We are a creative agency that specializes in brand identity, digital experiences, and content creation. Our
                                        mission is to help brands tell their stories in compelling and authentic ways.
                                    </p>
                                    <Button
                                        variant="outline"
                                        className="mt-6 rounded-full border border-gray-400 bg-transparent px-6 py-2 text-xs tracking-wider text-black uppercase"
                                    >
                                        SEE THE WORK
                                    </Button>
                                </ScrollReveal>
                            </div>
                            <div className="flex justify-end md:w-1/2">
                                <ScrollReveal direction="right" delay={1}>
                                    <div className="relative flex items-center text-center text-8xl font-bold text-[#242422] md:text-9xl">
                                        <span>GCS</span>
                                        <span className="mt-11 align-bottom text-7xl">®</span>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Work Section */}
                <section className="bg-[#E6E6E6] py-20">
                    <div className="container mx-auto px-6">
                        {/* Work Grid */}
                        <div className="grid gap-8 md:grid-cols-3">
                            {workData.map((work, index) => (
                                <ScrollReveal key={index} direction="right" delay={0.3 * (index + 1)}>
                                    <WorkCard title={work.title} description={work.description} image={work.image} className="h-full" />
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>
            </PageWrapper>
        </>
    );
}
