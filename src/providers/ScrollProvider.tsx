import { createContext, type ReactNode } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface ScrollContextProps {
  scrollTo: (target: string | number | HTMLElement) => void;
}

export const ScrollContext = createContext<ScrollContextProps>({
  scrollTo: () => {},
});

/**
 * Native scrolling only. Keeping programmatic navigation in one place avoids
 * competing scroll controllers while preserving the fixed-header offset.
 */
export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const reducedMotion = usePrefersReducedMotion();

  const scrollTo = (target: string | number | HTMLElement) => {
    const element =
      typeof target === 'string' ? document.querySelector<HTMLElement>(target) :
      target instanceof HTMLElement ? target : null;

    const top = element
      ? element.getBoundingClientRect().top + window.scrollY - 80
      : typeof target === 'number'
        ? target
        : 0;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: reducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <ScrollContext.Provider value={{ scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
};
