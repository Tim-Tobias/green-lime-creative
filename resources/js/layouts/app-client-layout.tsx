import { useSmooth } from '@/hooks/useSmooth';
import React, { useEffect } from 'react';

interface AppClientLayoutProps {
    children: React.ReactNode;
}

export const AppClientLayout: React.FC<AppClientLayoutProps> = ({ children }) => {
    const lenis = useSmooth();

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
