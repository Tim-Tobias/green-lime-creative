import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type CustomCursorProps = {
    className?: string;
    size?: number;
    color?: string;
    mixBlendMode?: string;
    trailEffect?: boolean;
    useImage?: boolean;
    adaptToSection?: boolean;
};

export const CustomCursor = ({
    className = '',
    size = 24,
    color = 'rgba(255, 255, 255, 0.8)',
    mixBlendMode = 'difference',
    trailEffect = false,
    useImage = false,
    adaptToSection = true,
}: CustomCursorProps) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [currentBgColor, setCurrentBgColor] = useState<string>('#096260');

    // Get cursor style based on background color
    const getCursorStyle = (bgColor: string) => {
        if (!adaptToSection) {
            return {
                color: color,
                image: useImage ? '/logo/Logogram-lime.png' : null,
            };
        }

        switch (bgColor) {
            case '#C4D82F': // Lime background
                return {
                    color: 'rgba(9, 98, 96, 0.8)', // Dark teal
                    image: useImage ? '/logo/Logogram-teal.png' : null,
                };
            case '#E6E6E6': // Light gray background
                return {
                    color: 'rgba(9, 9, 9, 0.8)', // Black
                    image: useImage ? '/logo/Logogram-black.png' : null,
                };
            case '#FFFFFF': // White background
            case 'white':
                return {
                    color: 'rgba(9, 98, 96, 0.8)', // Dark teal
                    image: useImage ? '/logo/Logogram-black.png' : null,
                };
            case '#096260': // Teal background
            default:
                return {
                    color: 'rgba(189, 211, 48, 0.8)', // Lime
                    image: useImage ? '/logo/Logogram-lime.png' : null,
                };
        }
    };

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        // Track hover state on interactive elements
        const handleElementMouseEnter = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Check if element or its parent has data-cursor-following="false"
            if (target.getAttribute('data-cursor-following') === 'false' || target.closest('[data-cursor-following="false"]')) {
                setIsVisible(false);
                return;
            }

            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.getAttribute('role') === 'button'
            ) {
                setIsHovering(true);
            }
        };

        const handleElementMouseLeave = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Restore visibility when leaving an element with data-cursor-following="false"
            if (target.getAttribute('data-cursor-following') === 'false' || target.closest('[data-cursor-following="false"]')) {
                setIsVisible(true);
            }

            setIsHovering(false);
        };

        document.addEventListener('mousemove', updatePosition);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseover', handleElementMouseEnter);
        document.addEventListener('mouseout', handleElementMouseLeave);

        return () => {
            document.removeEventListener('mousemove', updatePosition);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseover', handleElementMouseEnter);
            document.removeEventListener('mouseout', handleElementMouseLeave);
        };
    }, []);

    // Track current section background color
    useEffect(() => {
        if (!adaptToSection) return;

        const checkCurrentSection = () => {
            const sections = document.querySelectorAll('section');
            const cursorHeight = 50; // Area around cursor to check
            let detectedBgColor = '#096260'; // Default

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= position.y + cursorHeight && rect.bottom >= position.y - cursorHeight) {
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

        checkCurrentSection();
        window.addEventListener('scroll', checkCurrentSection);

        return () => {
            window.removeEventListener('scroll', checkCurrentSection);
        };
    }, [position.y, adaptToSection]);

    const currentStyle = getCursorStyle(currentBgColor);

    const cursorVariants = {
        default: {
            x: position.x - size / 2,
            y: position.y - size / 2,
            width: size,
            height: size,
            backgroundColor: useImage ? 'transparent' : currentStyle.color,
            mixBlendMode: useImage ? 'normal' : mixBlendMode,
            opacity: isVisible ? 1 : 0,
        },
        clicking: {
            x: position.x - size / 2,
            y: position.y - size / 2,
            width: size * 0.8,
            height: size * 0.8,
            backgroundColor: useImage ? 'transparent' : currentStyle.color,
            mixBlendMode: useImage ? 'normal' : mixBlendMode,
            opacity: isVisible ? 1 : 0,
        },
        hovering: {
            x: position.x - size,
            y: position.y - size,
            width: size * 1.5,
            height: size * 1.5,
            backgroundColor: useImage ? 'transparent' : 'rgba(255, 255, 255, 0.2)',
            mixBlendMode: useImage ? 'normal' : mixBlendMode,
            opacity: isVisible ? 1 : 0,
        },
    };

    const cursorState = isHovering ? 'hovering' : isClicking ? 'clicking' : 'default';

    return (
        <motion.div
            className={cn('pointer-events-none fixed top-0 left-0 z-50 rounded-full', useImage ? 'flex items-center justify-center' : '', className)}
            variants={cursorVariants}
            animate={cursorState}
            transition={{
                type: 'spring',
                damping: 30,
                stiffness: 200,
                mass: trailEffect ? 0.5 : 0.1,
            }}
        >
            {useImage && currentStyle.image && (
                <img
                    src={currentStyle.image}
                    alt="Cursor"
                    className="hidden h-full w-full animate-spin object-contain lg:block"
                    style={{
                        filter: isHovering ? 'brightness(1.2)' : 'none',
                    }}
                />
            )}
        </motion.div>
    );
};
