import { useRef, type ReactNode } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import { cn } from '@/utils/cn';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** ScrollTrigger start position */
  start?: string;
  y?: number;
}

/**
 * Scroll-triggered fade-up using useGSAP + ScrollTrigger.
 * Respects prefers-reduced-motion via gsap.matchMedia().
 * Animates only autoAlpha + y (compositor-friendly).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  start = 'top 88%',
  y = 28,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          isReduced: '(prefers-reduced-motion: reduce)',
          isMotion: '(prefers-reduced-motion: no-preference)',
        },
        (context) => {
          const { isReduced } = context.conditions as {
            isReduced: boolean;
            isMotion: boolean;
          };

          if (isReduced) {
            gsap.set(el, { autoAlpha: 1, y: 0 });
            return;
          }

          gsap.fromTo(
            el,
            { autoAlpha: 0, y },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              delay,
              ease: 'power3.out',
              overwrite: 'auto',
              scrollTrigger: {
                trigger: el,
                start,
                once: true,
                toggleActions: 'play none none none',
              },
            }
          );
        },
        ref
      );

      return () => mm.revert();
    },
    { scope: ref, dependencies: [delay, start, y] }
  );

  return (
    <div ref={ref} className={cn('gsap-reveal', className)}>
      {children}
    </div>
  );
}
