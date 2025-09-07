import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Link, router } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface HeaderProps {
    className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [currentBgColor, setCurrentBgColor] = useState<string>('#096260'); // Default teal
    const isMobile = useIsMobile();

    // Define color mappings for header based on background
    const getHeaderColors = (bgColor: string) => {
        switch (bgColor) {
            case '#C4D82F': // Lime background
                return {
                    text: '#096260', // Dark teal text
                    hamburger: '#096260',
                };
            case '#E6E6E6': // Light gray background
                return {
                    text: '#090909', // Black text
                    hamburger: '#090909',
                };
            case '#FFFFFF': // White background
            case 'white':
                return {
                    text: '#096260', // Dark teal text
                    hamburger: '#096260',
                };
            case '#096260': // Teal background
            default:
                return {
                    text: '#BDD330', // Lime text
                    hamburger: '#FFFFFF', // White hamburger
                };
        }
    };

    // Get appropriate logo based on background color
    const getLogoSrc = (bgColor: string) => {
        switch (bgColor) {
            case '#C4D82F': // Lime background - use black logo
                return '/logo/Logogram-teal.png';
            case '#E6E6E6': // Light gray background - use black logo
            case '#FFFFFF': // White background - use black logo
            case 'white':
                return '/logo/Logogram-black.png';
            case '#096260': // Teal background - use lime logo
            default:
                return '/logo/Logogram-lime.png';
        }
    };

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

    useEffect(() => {
        const checkCurrentSection = () => {
            // Get all sections with data-bg-color or check computed background color
            const sections = document.querySelectorAll('section');
            const headerHeight = 80; // Approximate header height
            let detectedBgColor = '#096260'; // Default

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= headerHeight && rect.bottom >= headerHeight) {
                    // First check for data-bg-color attribute
                    const dataBgColor = section.getAttribute('data-bg-color');
                    if (dataBgColor) {
                        detectedBgColor = dataBgColor;
                    } else {
                        // Fallback: check computed background color from classes
                        const computedStyle = window.getComputedStyle(section);
                        const bgColor = computedStyle.backgroundColor;

                        // Convert common RGB values to hex for consistency
                        if (bgColor === 'rgb(196, 216, 47)')
                            detectedBgColor = '#C4D82F'; // Lime
                        else if (bgColor === 'rgb(9, 98, 96)')
                            detectedBgColor = '#096260'; // Teal
                        else if (bgColor === 'rgb(230, 230, 230)')
                            detectedBgColor = '#E6E6E6'; // Light gray
                        else if (bgColor === 'rgb(255, 255, 255)' || bgColor === 'white') detectedBgColor = '#FFFFFF'; // White

                        // Check for Tailwind classes as fallback
                        const classList = section.classList.toString();
                        if (classList.includes('bg-[#C4D82F]')) detectedBgColor = '#C4D82F';
                        else if (classList.includes('bg-[#096260]')) detectedBgColor = '#096260';
                        else if (classList.includes('bg-[#E6E6E6]')) detectedBgColor = '#E6E6E6';
                        else if (classList.includes('bg-white')) detectedBgColor = '#FFFFFF';
                        else if (classList.includes('bg-gray-50')) detectedBgColor = '#E6E6E6';
                    }
                }
            });

            setCurrentBgColor(detectedBgColor);
        };

        // Check immediately on mount and page change
        checkCurrentSection();

        // Add scroll listener to check during scroll
        window.addEventListener('scroll', checkCurrentSection);

        // Add listener for page changes (for SPA navigation)
        const handlePageChange = () => {
            // Small delay to ensure DOM is updated
            setTimeout(checkCurrentSection, 100);
        };

        // Listen for popstate (browser back/forward)
        window.addEventListener('popstate', handlePageChange);

        // Listen for Inertia navigation events
        const removeInertiaListener = router.on('navigate', () => {
            handlePageChange();
        });

        // Listen for pushstate/replacestate (programmatic navigation)
        const originalPushState = history.pushState;
        const originalReplaceState = history.replaceState;

        history.pushState = function (...args) {
            originalPushState.apply(history, args);
            handlePageChange();
        };

        history.replaceState = function (...args) {
            originalReplaceState.apply(history, args);
            handlePageChange();
        };

        return () => {
            window.removeEventListener('scroll', checkCurrentSection);
            window.removeEventListener('popstate', handlePageChange);
            removeInertiaListener();
            history.pushState = originalPushState;
            history.replaceState = originalReplaceState;
        };
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = '';
        }

        return () => {
            document.documentElement.style.overflow = '';
        };
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header
            className={cn(
                'fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300',
                scrolled && !isMobile ? 'py-3 backdrop-blur-md' : 'bg-transparent py-4',
                className,
            )}
        >
            <div className="container mx-auto flex items-center justify-between px-8 py-4">
                <div className="flex items-center">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2, duration: 0.4 }}>
                        <Link href="/" className={cn('transition-opacity duration-300 hover:opacity-80')}>
                            <span className="flex items-center gap-1">
                                <img src={getLogoSrc(currentBgColor)} alt="GREENLIME" className="h-8 w-auto transition-all duration-300" />
                                <h1
                                    className="text-3xl leading-0 font-bold mt-3"
                                    style={{
                                        color: getHeaderColors(currentBgColor).text,
                                    }}
                                >
                                    GREENLIME
                                </h1>
                            </span>
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
                            transition={{ delay: 1.3 + 0.1 * i, duration: 0.4 }}
                        >
                            <Link
                                href={link.href}
                                className={cn('transition-colors duration-300')}
                                style={{ color: getHeaderColors(currentBgColor).text }}
                            >
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
                    <motion.span
                        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className="block h-0.5 w-6 transition-all duration-300"
                        style={{ backgroundColor: getHeaderColors(currentBgColor).hamburger }}
                    />
                    <motion.span
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="block h-0.5 w-6 transition-all duration-300"
                        style={{ backgroundColor: getHeaderColors(currentBgColor).hamburger }}
                    />
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className="block h-0.5 w-6 transition-all duration-300"
                        style={{ backgroundColor: getHeaderColors(currentBgColor).hamburger }}
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
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#096260]"
                    >
                        <div className="container mx-auto flex h-full flex-col px-6">
                            <div className="flex flex-grow flex-col justify-center">
                                <nav className="flex flex-col space-y-8">
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
