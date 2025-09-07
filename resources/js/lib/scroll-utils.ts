import Lenis from '@studio-freight/lenis';

// Scroll to element
export const scrollToElement = (lenis: Lenis | null, selector: string, offset = 0) => {
    if (!lenis) return;
    
    const element = document.querySelector(selector);
    if (element) {
        lenis.scrollTo(element, {
            offset,
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
    }
};

// Scroll to top
export const scrollToTop = (lenis: Lenis | null, immediate = false) => {
    if (!lenis) return;
    
    lenis.scrollTo(0, {
        duration: immediate ? 0 : 1.2,
        immediate
    });
};

// Stop/Start smooth scroll
export const toggleSmooth = (lenis: Lenis | null, enable: boolean) => {
    if (!lenis) return;
    
    if (enable) {
        lenis.start();
    } else {
        lenis.stop();
    }
};