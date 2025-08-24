import React, { useEffect } from 'react';
import { useSmooth } from '@/hooks/useSmooth';

interface AppLayoutProps {
    children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    const lenis = useSmooth();

    // Disable smooth scroll on certain elements if needed
    useEffect(() => {
        if (lenis) {
            // Example: disable on modals
            const modals = document.querySelectorAll('[data-lenis-prevent]');
            modals.forEach(modal => {
                lenis.stop();
            });
        }
    }, [lenis]);

    return (
        <div className="app-layout">
            {children}
        </div>
    );
};
