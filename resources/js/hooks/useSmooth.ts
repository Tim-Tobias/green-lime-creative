import Lenis from '@studio-freight/lenis';
import { useEffect, useRef } from 'react';

export const useSmooth = () => {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Initialize Lenis with heavier/slower configuration
        lenisRef.current = new Lenis({
            duration: 3.5, // Increased from 1.2 to 2.5 for slower scroll
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1, // Reduced from 1 to 0.6 for slower mouse wheel
            smoothTouch: true, // Enabled for mobile smooth scroll
            touchMultiplier: 2, // Reduced from 2 to 1.2 for slower touch scroll
            infinite: false,
            wheelMultiplier: 1, // Added for even more control over wheel speed
        });

        // Animation frame loop
        function raf(time: number) {
            lenisRef.current?.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Reset scroll position on page load
        const resetInitialScroll = () => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
            
            if (lenisRef.current) {
                lenisRef.current.scrollTo(0, { immediate: true });
            }
        };
        
        resetInitialScroll();
        
        // Additional reset after Lenis is fully initialized
        setTimeout(resetInitialScroll, 50);

        // Cleanup
        return () => {
            lenisRef.current?.destroy();
        };
    }, []);

    return lenisRef.current;
};
