'use client';

import { cn } from '@/lib/utils';
import { motion, type Variants } from 'framer-motion';

type SplitBy = 'word' | 'char';

interface TextSplitProps {
  text: string;
  className?: string;
  splitBy?: SplitBy;
  staggerDelay?: number;
}

export function TextSplit({
  text,
  className,
  splitBy = 'word',
  staggerDelay = 0.03,
}: TextSplitProps) {
  const parts = splitBy === 'word' ? text.split(' ') : text.split('');

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.4,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <motion.span
      className={cn('inline-flex flex-wrap', className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      aria-label={text}
    >
      {parts.map((part, index) => (
        <motion.span
          key={`${part}-${index}`}
          variants={itemVariants}
          className="inline-block"
          aria-hidden="true"
        >
          {part}
          {splitBy === 'word' && index < parts.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </motion.span>
      ))}
    </motion.span>
  );
}

export type { TextSplitProps, SplitBy };
