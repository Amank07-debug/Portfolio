import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'outline';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'glass', ...props }, ref) => {
    const variants = {
      default: 'bg-surface border border-border',
      glass: 'glass',
      outline: 'border border-border bg-transparent',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl text-foreground transition-all duration-300',
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

export { Card };
