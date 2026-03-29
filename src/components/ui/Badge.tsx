'use client';

import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

type BadgeVariant = 'default' | 'shimmer' | 'new';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:
    'bg-white/10 text-white/80 border border-white/10',
  shimmer:
    'bg-white/5 text-white/90 border border-white/10 relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent',
  new:
    'bg-gradient-to-r from-purple-600/20 to-cyan-500/20 text-cyan-400 border border-cyan-500/30',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-wide',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export type { BadgeProps, BadgeVariant };
