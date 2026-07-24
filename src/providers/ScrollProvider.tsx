import {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface ScrollContextProps {
  lenis: Lenis | null;
  scrollTo: (target: string | number | HTMLElement) => void;
}

export const ScrollContext = createContext<ScrollContextProps>({
  lenis: null,
  scrollTo: () => {},
});

/**
 * Lenis smooth scroll synced with ScrollTrigger (official GSAP integration pattern).
 * Skipped entirely when prefers-reduced-motion is set.
 */
export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setLenis(null);
      return;
    }

    const instance = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      // @ts-expect-error older Lenis API still accepted
      smooth: true,
    });

    instance.on('scroll', ScrollTrigger.update);

    const tickerFn = (time: number) => {
      instance.raf(time * 1000);
    };
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    setLenis(instance);

    // Recalc ScrollTrigger after Lenis mounts
    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      gsap.ticker.remove(tickerFn);
      instance.destroy();
      setLenis(null);
    };
  }, [reducedMotion]);

  const scrollTo = (target: string | number | HTMLElement) => {
    if (lenis) {
      lenis.scrollTo(target, { offset: -80 });
      return;
    }
    if (typeof target === 'string') {
      const el = document.querySelector(target);
      el?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <ScrollContext.Provider value={{ lenis, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
};
