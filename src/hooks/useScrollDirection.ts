import { useState, useEffect } from 'react';

export interface ScrollDirectionState {
  scrollY: number;
  scrollingUp: boolean;
  scrollingDown: boolean;
  atTop: boolean;
  isPastThreshold: boolean;
}

export function useScrollDirection(threshold: number = 80): ScrollDirectionState {
  const [scrollState, setScrollState] = useState<ScrollDirectionState>({
    scrollY: 0,
    scrollingUp: false,
    scrollingDown: false,
    atTop: true,
    isPastThreshold: false,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollY;
      const atTop = currentScrollY <= 20;
      const isPastThreshold = currentScrollY > threshold;

      // Only trigger state update if significant scroll movement (> 3px) or near top
      if (Math.abs(difference) > 3 || atTop) {
        const scrollingDown = difference > 0 && currentScrollY > 100;
        const scrollingUp = difference < 0;

        setScrollState({
          scrollY: currentScrollY,
          scrollingUp,
          scrollingDown,
          atTop,
          isPastThreshold,
        });

        lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrollState;
}
