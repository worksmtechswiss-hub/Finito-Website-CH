import { cn } from '@/lib/utils';
import { type ElementType, type ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export function GradientText({
  children,
  className,
  as: Component = 'span',
}: GradientTextProps) {
  return (
    <Component className={cn('gradient-text-animated', className)}>
      {children}
    </Component>
  );
}

export type { GradientTextProps };
