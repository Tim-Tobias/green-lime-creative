import { router } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export const usePageTransition = () => {
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [heroDelay, setHeroDelay] = useState(2.5);
    const [headerDelay, setHeaderDelay] = useState(2.5);
    const [navDelay, setNavDelay] = useState(2.8);
    const [imageRevealDelay, setImageRevealDelay] = useState(2.8);

    useEffect(() => {
        // Check if this is first load or navigation
        const hasVisited = sessionStorage.getItem('has-visited');

        if (hasVisited) {
            // Subsequent page loads - use shorter delays
            setIsFirstLoad(false);
            setHeroDelay(0.2);
            setHeaderDelay(0.2);
            setNavDelay(0.4);
            setImageRevealDelay(0.4);
        } else {
            // First load - use original delays
            setIsFirstLoad(true);
            setHeroDelay(2.5);
            setHeaderDelay(2.5);
            setNavDelay(2.8);
            setImageRevealDelay(2.8);

            // Mark as visited
            sessionStorage.setItem('has-visited', 'true');
        }
    }, []);

    // Listen for Inertia navigation events
    useEffect(() => {
        const handleStart = () => {
            // Page navigation started
            setIsFirstLoad(false);
            setHeroDelay(1.2);
            setHeaderDelay(1.2);
            setNavDelay(1.4);
            setImageRevealDelay(1.4);
        };

        // router.on() returns a cleanup function
        const removeListener = router.on('start', handleStart);

        return () => {
            removeListener();
        };
    }, []);

    return {
        isFirstLoad,
        heroDelay,
        headerDelay,
        navDelay,
        imageRevealDelay,
    };
};
