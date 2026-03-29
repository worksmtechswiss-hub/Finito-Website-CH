'use client';

import { cn } from '@/lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { type ReactNode } from 'react';

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false, ...rest }: CardProps) {
  return (
    <motion.div
      className={cn(
        'relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-lg',
        hover &&
          'transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-xl hover:-translate-y-1 group',
        className
      )}
      {...(hover && {
        whileHover: { y: -4 },
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      })}
      {...rest}
    >
      {/* Glow border on hover */}
      {hover && (
        <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20" />
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export type { CardProps };
