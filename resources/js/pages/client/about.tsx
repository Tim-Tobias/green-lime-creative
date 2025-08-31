import { PageWrapper, ScrollReveal } from '@/components/animations';
import { Head } from '@inertiajs/react';

// Komponen reusable untuk item statistik
interface StatisticItemProps {
    title: string;
    value: string;
    description: string;
    delay: number;
}

const StatisticItem = ({ title, value, description, delay }: StatisticItemProps) => {
    return (
        <ScrollReveal delay={delay}>
            <div className="w-[80%] space-y-4">
                <h3 className="text-sm font-semibold tracking-wider text-[#BDD330] uppercase">{title}</h3>
                <div className="text-6xl font-bold text-[#BDD330] md:text-7xl lg:text-8xl">{value}</div>
                <p className="text-sm leading-relaxed text-[#BDD330] opacity-80">{description}</p>
            </div>
        </ScrollReveal>
    );
};

export default function About() {
    return (
        <>
            <Head title="About Us" />
            <PageWrapper className="relative flex min-h-screen flex-col overflow-hidden">
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
                        <div className="relative right-0 -bottom-20 md:absolute">
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

                {/* GREENLIME CREATIVE STUDIO Section */}
                <section className="bg-[#096260] py-16">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col items-center">
                            <div className="mb-10 w-full border-t-2 border-[#BDD330]"></div>
                            <ScrollReveal delay={0.5}>
                                <h2 className="my-3 text-center text-4xl font-bold text-[#BDD330] md:my-8 md:text-5xl lg:text-7xl">
                                    GREENLIME CREATIVE STUDIO
                                </h2>
                            </ScrollReveal>
                            <div className="mt-10 w-full border-b-2 border-[#BDD330]"></div>
                        </div>
                    </div>
                </section>

                {/* Agency Snapshot Section */}
                <section className="bg-[#096260] py-20">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-24">
                            {/* Agency Snapshot Title */}
                            <div className="flex items-start">
                                <ScrollReveal delay={0.3}>
                                    <h2 className="text-2xl font-bold tracking-wider text-[#BDD330] uppercase md:text-3xl lg:text-4xl">
                                        AGENCY
                                        <br />
                                        SNAPSHOT
                                    </h2>
                                </ScrollReveal>
                            </div>

                            {/* Statistics Grid */}
                            <div className="col-span-2 grid grid-cols-1 gap-12 md:grid-cols-2">
                                <StatisticItem
                                    title="PEOPLE"
                                    value="120+"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation."
                                    delay={0.5}
                                />
                                <StatisticItem
                                    title="GLOBAL REACH"
                                    value="28"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation."
                                    delay={0.7}
                                />
                                <StatisticItem
                                    title="YEARS"
                                    value="1"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation."
                                    delay={0.9}
                                />
                                <StatisticItem
                                    title="GROWTH"
                                    value="150%"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation."
                                    delay={1.1}
                                />
                                <StatisticItem
                                    title="SERVICES"
                                    value="02"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation."
                                    delay={1.3}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </PageWrapper>
        </>
    );
}
