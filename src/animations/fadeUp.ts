type GsapLike = {
  fromTo: (
    targets: unknown,
    fromVars: Record<string, unknown>,
    toVars: Record<string, unknown>
  ) => unknown;
};

/** Shared fade-up entrance (transforms + autoAlpha only). */
export function fadeUpFrom(
  gsapApi: GsapLike,
  targets: unknown,
  {
    delay = 0,
    y = 28,
    duration = 0.65,
    stagger = 0,
  }: {
    delay?: number;
    y?: number;
    duration?: number;
    stagger?: number | object;
  } = {}
) {
  return gsapApi.fromTo(
    targets,
    { autoAlpha: 0, y },
    {
      autoAlpha: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease: 'power3.out',
      overwrite: 'auto',
    }
  );
}
