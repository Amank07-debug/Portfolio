import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { Button } from '@/components/ui/Button';
import { TypewriterText } from '@/components/ui/TypewriterText';
import { useScroll } from '@/hooks/useScroll';
import { gsap, useGSAP } from '@/lib/gsap';

const SplineHero = lazy(() => import('@/components/spline/SplineHero'));
const HeroScene = lazy(() => import('@/components/three/HeroScene'));

export default function Hero() {
  const { scrollTo } = useScroll();
  const rootRef = useRef<HTMLElement>(null);
  const [enableSpline, setEnableSpline] = useState(false);
  const [splineReady, setSplineReady] = useState(false);
  const [splineFailed, setSplineFailed] = useState(false);

  useGSAP(
    () => {
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

          const targets = gsap.utils.toArray<HTMLElement>(
            '.hero-animate',
            rootRef.current ?? undefined
          );

          if (isReduced) {
            gsap.set(targets, { autoAlpha: 1, y: 0 });
            return;
          }

          gsap.set(targets, { autoAlpha: 0, y: 28 });

          const tl = gsap.timeline({
            defaults: { ease: 'power3.out', duration: 0.75 },
          });

          tl.to('.hero-eyebrow', { autoAlpha: 1, y: 0 }, 0)
            .to('.hero-title', { autoAlpha: 1, y: 0 }, '-=0.5')
            .to('.hero-roles', { autoAlpha: 1, y: 0 }, '-=0.45')
            .to('.hero-tagline', { autoAlpha: 1, y: 0 }, '-=0.4')
            .to('.hero-cta', { autoAlpha: 1, y: 0 }, '-=0.35');
        },
        rootRef
      );

      return () => mm.revert();
    },
    { scope: rootRef }
  );

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const narrow = window.matchMedia('(max-width: 1024px)').matches;
    const saveData =
      'connection' in navigator &&
      Boolean(
        (navigator as Navigator & { connection?: { saveData?: boolean } })
          .connection?.saveData
      );

    if (narrow || saveData) return;

    let idleId = 0;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const enable = () => setEnableSpline(true);

    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(enable, { timeout: 2500 });
    } else {
      timeoutId = setTimeout(enable, 1800);
    }

    return () => {
      if (idleId && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const showSpline = enableSpline && !splineFailed;

  return (
    <section
      id="hero"
      ref={rootRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

      {!splineReady ? (
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      ) : null}

      {showSpline ? (
        <Suspense fallback={null}>
          <SplineHero
            onReady={() => setSplineReady(true)}
            onError={() => setSplineFailed(true)}
          />
        </Suspense>
      ) : null}

      <div className="container-narrow section-pad relative z-10 w-full">
        <div className="max-w-3xl">
          <p className="hero-animate hero-eyebrow mb-4 font-mono text-xs uppercase tracking-[0.24em] text-primary">
            Available for SDE · Full Stack · Backend · AI/ML internships
          </p>

          <h1 className="hero-animate hero-title font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>

          <p className="hero-animate hero-roles mt-5 text-lg text-muted-foreground sm:text-xl">
            <TypewriterText words={profile.roles} className="text-primary" />
          </p>

          <p className="hero-animate hero-tagline mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.tagline}
          </p>

          <div className="hero-animate hero-cta mt-9 flex flex-wrap items-center gap-3">
            <Button size="lg" onClick={() => scrollTo('#projects')}>
              View projects
              <ArrowDown className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo('#contact')}
            >
              <Mail className="h-4 w-4" />
              Contact
            </Button>
            <a href={profile.resumePath} download>
              <Button size="lg" variant="ghost" type="button">
                <Download className="h-4 w-4" />
                Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
