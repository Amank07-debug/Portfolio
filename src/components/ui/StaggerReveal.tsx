import { useRef, type ReactNode } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import { cn } from '@/utils/cn';

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  /** Child selector within the scoped container */
  childSelector?: string;
  stagger?: number;
  start?: string;
}

/**
 * Section-level staggered reveal via a single timeline + ScrollTrigger.
 * Prefer this over many separate Reveal wrappers for grids/lists.
 */
export function StaggerReveal({
  children,
  className,
  childSelector = '[data-reveal-item]',
  stagger = 0.1,
  start = 'top 82%',
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      const items = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll(childSelector)
      );
      if (!items.length) return;

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
            gsap.set(items, { autoAlpha: 1, y: 0 });
            return;
          }

          const tl = gsap.timeline({
            defaults: { ease: 'power3.out', duration: 0.65 },
            scrollTrigger: {
              trigger: root,
              start,
              once: true,
              toggleActions: 'play none none none',
            },
          });

          tl.fromTo(
            items,
            { autoAlpha: 0, y: 32 },
            { autoAlpha: 1, y: 0, stagger, overwrite: 'auto' }
          );
        },
        ref
      );

      return () => mm.revert();
    },
    { scope: ref, dependencies: [childSelector, stagger, start] }
  );

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
