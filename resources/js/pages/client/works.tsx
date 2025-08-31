import { PageWrapper, ScrollReveal } from '@/components/animations';
import ProjectCard from '@/components/ui/project-card';
import { Head } from '@inertiajs/react';

// Portfolio Layout Component
interface PortfolioSectionProps {
    category: string;
    categoryNumber: string;
    totalNumber: string;
    projects: Array<{
        title: string;
        description: string;
        imageUrl?: string;
    }>;
}

const PortfolioSection = ({ category, categoryNumber, totalNumber, projects }: PortfolioSectionProps) => {
    return (
        <section className="container mx-auto border-t border-gray-500 py-20">
            <div className="px-6">
                {/* Main Layout: Category on left, Projects on right */}
                <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
                    {/* Left Column - Category */}
                    <div className="min-h-full lg:col-span-3 lg:border-r lg:border-gray-500 lg:pr-5">
                        <ScrollReveal delay={0.3} className="flex w-full justify-between">
                            <span className="text-sm text-gray-600">{categoryNumber}</span>
                            <span className="text-sm text-gray-600">/{totalNumber}</span>
                        </ScrollReveal>

                        <div className="h-full items-center md:flex">
                            <ScrollReveal delay={0.2}>
                                <h2 className="my-10 text-center text-2xl leading-tight font-bold tracking-wide text-black uppercase md:w-[20%] md:text-xl lg:my-0 lg:text-2xl xl:text-4xl">
                                    {category}
                                </h2>
                            </ScrollReveal>
                        </div>
                    </div>

                    {/* Right Column - Projects Grid */}
                    <div className="lg:col-span-9 lg:pl-16">
                        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
                            {projects.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    title={project.title}
                                    description={project.description}
                                    imageUrl={project.imageUrl}
                                    delay={0.4 + index * 0.2}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Portfolio data
const portfolioData = [
    {
        category: 'TECH BRANDS',
        categoryNumber: '01',
        projects: [
            {
                title: 'ADVAN INDONESIA',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.',
                imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
            },
            {
                title: 'SAMSUNG',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.',
                imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
            },
        ],
    },
    {
        category: 'CREATIVE DESIGN',
        categoryNumber: '02',
        projects: [
            {
                title: 'BRAND IDENTITY',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.',
                imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
            },
            {
                title: 'VISUAL CAMPAIGN',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.',
                imageUrl: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
            },
        ],
    },
    {
        category: 'WEB DEVELOPMENT',
        categoryNumber: '03',
        projects: [
            {
                title: 'E-COMMERCE PLATFORM',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.',
                imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
            },
            {
                title: 'CORPORATE WEBSITE',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.',
                imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
            },
        ],
    },
];

export default function Works() {
    return (
        <PageWrapper className="bg-white">
            <Head title="Works" />

            {/* Hero Section */}
            <section className="py-20 lg:py-32">
                <div className="relative container mx-auto space-y-7 px-6">
                    {/* Left Column - Main Title */}
                    <ScrollReveal delay={0.3}>
                        <h1 className="text-4xl leading-tight font-bold text-black md:text-5xl lg:text-6xl xl:text-7xl">
                            MAKE
                            <br />
                            IMPACT,
                            <br />
                            <span className="text-[#BDD330]">*</span> THROUGH
                            <br />
                            CREATIVITY.
                        </h1>
                    </ScrollReveal>

                    {/* Right Column - Description */}
                    <div className="right-10 bottom-0 md:absolute">
                        <ScrollReveal delay={0.5}>
                            <p className="text-right text-sm leading-tight text-gray-600 md:text-left md:text-base">
                                The work we create lives at the intersection
                                <br />
                                of clarity and surprise and functions to
                                <br />
                                connect through shared values and beliefs.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Portfolio Sections */}
            {portfolioData.map((section) => (
                <PortfolioSection
                    key={section.category}
                    category={section.category}
                    categoryNumber={section.categoryNumber}
                    totalNumber="03"
                    projects={section.projects}
                />
            ))}
        </PageWrapper>
    );
}
