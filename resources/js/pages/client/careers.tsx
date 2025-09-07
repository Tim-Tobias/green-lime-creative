import { ScrollReveal } from '@/components/animations';
import PageWrapper from '@/components/animations/page-wrapper';
import { Head } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';

export default function Careers() {
    const jobPositions = [
        {
            title: 'CREATIVE DIRECTOR',
            type: 'FULL TIME',
        },
        {
            title: 'BRAND STRATEGIST',
            type: 'PART TIME',
        },
        {
            title: 'UI/UX DESIGNER',
            type: 'FULL TIME',
        },
        {
            title: 'MOTION DESIGNER',
            type: 'FREELANCE',
        },
        {
            title: 'FRONTEND DEVELOPER',
            type: 'FULL TIME',
        },
        {
            title: 'BACKEND DEVELOPER',
            type: 'REMOTE',
        },
    ];

    return (
        <PageWrapper>
            <Head title="Careers" />

            {/* Main Careers Section */}
            <section className="relative min-h-screen overflow-hidden bg-[#C4D82F]" data-bg-color="#C4D82F">
                <div className="container mx-auto px-6 py-30 lg:py-24">
                    <div className="grid min-h-[80vh] grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
                        {/* Left Content */}
                        <div className="flex flex-col justify-between lg:col-span-7">
                            {/* Main Heading */}
                            <ScrollReveal delay={0.5}>
                                <h1 className="relative mb-4 text-left text-5xl leading-tight font-bold text-[#2B5F44] md:text-6xl lg:text-7xl xl:text-8xl">
                                    MAKE THE
                                    <br />
                                    <span className="inline-block">
                                        <img src="/logo/Logogram-teal.png" alt="" className="h-10 w-auto animate-spin md:h-20" />
                                    </span>{' '}
                                    FUTURE
                                    <br />
                                    JEALOUS.
                                </h1>
                            </ScrollReveal>

                            {/* Job Positions */}
                            <ScrollReveal delay={0.5}>
                                <div className="bottom-1/4 mb-16 space-y-6 lg:absolute">
                                    {jobPositions.map((job, index) => (
                                        <div key={index} className={`${(index + 1) % 2 === 0 && index !== jobPositions.length - 1 ? 'pb-6' : ''}`}>
                                            <div className="mt-10 flex md:mt-0">
                                                <h3 className="text-lg leading-1 font-bold text-[#2B5F44]">{job.title}</h3>
                                                <span className="text-xs leading-1 text-[#2B5F44] italic">[{job.type}]</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right Content - Unsplash Photo */}
                        <div className="flex flex-col justify-center lg:col-span-5">
                            <ScrollReveal delay={0.5}>
                                <div className="mb-24 aspect-[3/4] w-full max-w-md overflow-hidden rounded-lg">
                                    <img
                                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=800&fit=crop&crop=center"
                                        alt="Team collaboration"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </ScrollReveal>

                            {/* Company Description */}
                            <ScrollReveal delay={1}>
                                <div className="space-y-6">
                                    <p className="max-w-2xl text-lg leading-tight text-[#2B5F44]">
                                        As part of Dept, we operate offices across the world. We're always looking to connect with individuals who
                                        want to make the best work of their lives with the world's greatest brands. If you're interested in working
                                        with us or learning more, drop us a note, portfolio link, or resume.
                                    </p>
                                    <p className="text-lg font-bold text-[#2B5F44] md:text-xl">We'll take anything you've got.</p>

                                    {/* Apply Button */}
                                    <div className="pt-6">
                                        <form action="mailto:hi@greenlimecreative.com" method="POST">
                                            <button
                                                type="submit"
                                                className="flex items-center gap-1 rounded-full bg-[#2B5F44] px-8 py-2 text-lg font-bold text-[#C4D82F] transition-colors duration-300 hover:bg-[#1a3d2b]"
                                            >
                                                <span className="mt-2">APPLY HERE</span> <ArrowUpRight />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
}
