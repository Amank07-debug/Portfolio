import {
  Component,
  Suspense,
  lazy,
  type ErrorInfo,
  type ReactNode,
} from 'react';
import { cn } from '@/utils/cn';

const Spline = lazy(() => import('@splinetool/react-spline'));

/** Public interactive Spline scene used as a hero backdrop when bandwidth allows. */
const SPLINE_SCENE =
  'https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode';

interface SplineHeroProps {
  className?: string;
  onReady?: () => void;
  onError?: () => void;
}

class SplineErrorBoundary extends Component<
  { children: ReactNode; onError?: () => void },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(_error: Error, _info: ErrorInfo) {
    this.props.onError?.();
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

export default function SplineHero({
  className,
  onReady,
  onError,
}: SplineHeroProps) {
  return (
    <div className={cn('absolute inset-0 -z-10', className)} aria-hidden="true">
      <SplineErrorBoundary onError={onError}>
        <Suspense fallback={null}>
          <Spline
            scene={SPLINE_SCENE}
            onLoad={() => onReady?.()}
            style={{ width: '100%', height: '100%' }}
          />
        </Suspense>
      </SplineErrorBoundary>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
