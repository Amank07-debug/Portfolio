import { HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-10 md:mb-14 max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
      {...props}
    >
      {eyebrow ? (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
