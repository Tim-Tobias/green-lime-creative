import { useSmooth } from '@/hooks/useSmooth';
import { router } from '@inertiajs/react';
import React, { useEffect } from 'react';

interface AppClientLayoutProps {
    children: React.ReactNode;
}

export const AppClientLayout: React.FC<AppClientLayoutProps> = ({ children }) => {
    const lenis = useSmooth();

    // Reset scroll position to top on page navigation
    useEffect(() => {
        const resetScroll = () => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
            
            if (lenis) {
                lenis.scrollTo(0, { immediate: true });
            }
        };

        const handleStart = () => {
            resetScroll();
        };

        const handleFinish = () => {
            resetScroll();
            // Additional reset to ensure it works
            setTimeout(resetScroll, 10);
        };

        // Handle link clicks directly
        const handleLinkClick = (e: Event) => {
            const target = e.target as HTMLElement;
            const link = target.closest('a[href]');
            if (link && !link.getAttribute('href')?.startsWith('#')) {
                resetScroll();
            }
        };

        router.on('start', handleStart);
        router.on('finish', handleFinish);
        document.addEventListener('click', handleLinkClick, true);

        return () => {
            router.off('start', handleStart);
            router.off('finish', handleFinish);
            document.removeEventListener('click', handleLinkClick, true);
        };
    }, []);

    // Disable smooth scroll on certain elements if needed
    useEffect(() => {
        if (lenis) {
            // Example: disable on modals
            const modals = document.querySelectorAll('[data-lenis-prevent]');
            modals.forEach((modal) => {
                lenis.stop();
            });
        }
    }, [lenis]);

    return <div className="app-layout">{children}</div>;
};
