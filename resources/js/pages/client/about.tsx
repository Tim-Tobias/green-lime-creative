import { PageWrapper, ScrollReveal } from '@/components/animations';
import { Head } from '@inertiajs/react';

export default function About() {
    return (
        <>
            <Head title="About Us" />
            <PageWrapper className="flex min-h-screen flex-col">
                {/* Hero Section */}
                <section className="min-h-[90vh] flex-grow bg-[#096260] text-white">
                    <div className="relative container mx-auto px-6 py-20 md:py-32 lg:py-40">
                        <div className="space-y-8">
                            <ScrollReveal delay={1.3}>
                                <h1 className="text-4xl leading-tight font-bold text-[#BDD330] md:text-5xl lg:text-6xl xl:text-7xl">
                                    WE ARE STORYTELLERS,
                                    <br />
                                    VISIONARIES, AND CONTENT
                                    <br />
                                    ARCHITECTS.
                                </h1>
                            </ScrollReveal>
                        </div>

                        {/* Right Content */}
                        <div className="absolute right-0 -bottom-10">
                            <ScrollReveal delay={1}>
                                <div className="space-y-4">
                                    <h2 className="text-lg font-semibold tracking-wider text-[#BDD330] uppercase md:text-xl">INTO COMPANY VALUE</h2>
                                    <p className="text-base leading-snug text-[#BDD330] md:text-lg">
                                        Our focus is to elevate your brand, strengthen
                                        <br />
                                        your identity, and optimize your brand potential
                                        <br />
                                        with innovative and creative solutions.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>
            </PageWrapper>
        </>
    );
}
