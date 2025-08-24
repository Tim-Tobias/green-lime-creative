import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { cn } from '@/lib/utils';
import React from 'react';

interface FooterProps {
    className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
    return (
        <footer className={cn('relative overflow-hidden bg-[#242422] pt-20 text-white', className)} id="contact">
            <div className="container mx-auto px-6">
                <ScrollReveal direction="left" delay={0.1}>
                    <h2 className="mb-18 text-4xl font-bold tracking-wide">GREEN LIME®</h2>
                </ScrollReveal>

                <div className="flex flex-col justify-between lg:flex-row lg:items-start">
                    {/* Left Section - Brand & Description */}
                    <div className="mb-12 lg:mb-0 lg:max-w-xs">
                        <ScrollReveal direction="right" delay={0.5}>
                            <p className="mb-6 text-lg leading-relaxed text-gray-300">
                                We collaborate with ambitious brands and people. Let's build
                                <br />
                                <span className="underline">hi@greenlimecreative.com</span>
                            </p>
                        </ScrollReveal>
                    </div>

                    {/* Right Section - Social & Office */}
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
                        {/* Social Links */}
                        <ScrollReveal direction="up" delay={0.4}>
                            <h3 className="mb-6 text-sm font-semibold tracking-wider text-gray-400 uppercase">SOCIAL</h3>
                            <ul className="space-y-2">
                                {[
                                    { href: 'https://instagram.com/greenlimecreative', label: 'Instagram' },
                                    { href: 'https://tiktok.com/@greenlimecreative', label: 'TikTok' },
                                    { href: 'https://youtube.com/@greenlimecreative', label: 'Youtube' },
                                    { href: 'https://linkedin.com/company/greenlimecreative', label: 'Linkedin' },
                                ].map((social, index) => (
                                    <ScrollReveal key={index} direction="up" delay={0.5 + index * 0.1}>
                                        <li>
                                            <a
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-gray-300 transition-colors duration-300 hover:text-[#BDD330]"
                                            >
                                                {social.label}
                                            </a>
                                        </li>
                                    </ScrollReveal>
                                ))}
                            </ul>
                        </ScrollReveal>

                        {/* Office Info */}
                        <ScrollReveal direction="up" delay={0.6}>
                            <h3 className="mb-6 text-sm font-semibold tracking-wider text-gray-400 uppercase">OFFICE</h3>
                            <address className="text-sm leading-relaxed text-gray-300 not-italic">
                                Jl. Persatuan 3 No.10B,
                                <br />
                                Kby Lama, South Jakarta
                                <br />
                                Indonesia
                            </address>
                        </ScrollReveal>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-16 border-t border-gray-700 py-6">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center justify-between text-xs text-gray-500 sm:flex-row">
                        <ScrollReveal direction="left" delay={0.8}>
                            <div className="mb-2 sm:mb-0">
                                <span>GCS®, GGP®, GKP®</span>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="left" delay={0.9}>
                            <div className="text-center sm:text-left">
                                <span className="tracking-wider uppercase">MAKE IMPACT THROUGH CREATIVITY.</span>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right" delay={1.0}>
                            <div className="mt-2 sm:mt-0">
                                <span>©{new Date().getFullYear()}</span>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
