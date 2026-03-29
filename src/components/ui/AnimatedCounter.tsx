'use client';

import { cn } from '@/lib/utils';
import {
  useMotionValue,
  useTransform,
  animate,
  motion,
  useInView,
} from 'framer-motion';
import { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  target,
  suffix = '',
  duration = 2,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, target, {
        duration,
        ease: 'easeOut',
      });
      return controls.stop;
    }
  }, [isInView, motionValue, target, duration]);

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export type { AnimatedCounterProps };
