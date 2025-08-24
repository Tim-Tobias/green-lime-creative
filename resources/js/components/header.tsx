import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { usePageTransition } from '@/hooks/usePageTransition';

interface HeaderProps {
    className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { headerDelay, navDelay } = usePageTransition();

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header
            className={cn(
                'fixed top-0 right-0 left-0 z-50 w-full overflow-hidden transition-all duration-300',
                scrolled ? 'py-3 backdrop-blur-md' : 'bg-transparent py-4',
                className,
            )}
        >
            <div className="container mx-auto flex items-center justify-between px-8 py-6">
                <div className="flex items-center">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: headerDelay, duration: 0.4 }}>
                        <Link href="/" className="text-2xl font-bold text-[#BDD330]">
                            * GREEN LIME
                        </Link>
                    </motion.div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden space-x-8 md:flex">
                    {[
                        { href: '/about', label: 'ABOUT' },
                        { href: '/works', label: 'WORKS' },
                        { href: '/careers', label: 'CAREERS' },
                        { href: '/contact', label: 'CONTACT' },
                    ].map((link, i) => (
                        <motion.div
                            key={link.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: navDelay + 0.1 * i, duration: 0.4 }}
                        >
                            <Link href={link.href} className="text-[#BDD330] transition-colors">
                                {link.label}
                            </Link>
                        </motion.div>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="z-50 flex h-8 w-8 flex-col items-center justify-center space-y-1.5 focus:outline-none md:hidden"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <motion.span animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="block h-0.5 w-6 bg-white transition-all" />
                    <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="block h-0.5 w-6 bg-white transition-all" />
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className="block h-0.5 w-6 bg-white transition-all"
                    />
                </button>
            </div>

            {/* Mobile Menu Overlay - BasicAgency style */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#096260]"
                    >
                        <div className="container mx-auto flex h-full flex-col px-6">
                            <div className="flex flex-grow flex-col justify-center">
                                <nav className="flex flex-col space-y-8">
                                    {[
                                        { href: '#about', label: 'ABOUT' },
                                        { href: '#works', label: 'WORKS' },
                                        { href: '#careers', label: 'CAREERS' },
                                        { href: '#contact', label: 'CONTACT' },
                                    ].map((link, i) => (
                                        <motion.div
                                            key={link.label}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                                        >
                                            <Link
                                                href={link.href}
                                                className="block text-4xl font-bold text-[#BDD330] transition-colors md:text-5xl"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>
                            </div>
                            <motion.div
                                className="border-t border-white/20 py-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="text-lime text-xl">* GREEN LIME®</div>
                                    <div className="text-right text-xs text-white/60">
                                        <div>CREATIVE AGENCY</div>
                                        <div>EST. 2024</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
