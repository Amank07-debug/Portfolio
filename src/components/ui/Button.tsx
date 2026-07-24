import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variantClasses = {
      primary:
        'bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow',
      secondary:
        'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      outline:
        'border border-border/80 bg-transparent hover:bg-white/5 text-foreground',
      ghost: 'hover:bg-white/5 text-muted-foreground hover:text-foreground',
    };

    const sizeClasses = {
      sm: 'h-9 px-3 text-xs rounded-lg',
      md: 'h-11 px-5 text-sm rounded-xl',
      lg: 'h-12 px-7 text-base rounded-xl',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          'disabled:pointer-events-none disabled:opacity-50',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
