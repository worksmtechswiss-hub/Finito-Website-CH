'use client';

import { cn } from '@/lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';
import Link from 'next/link';
import { forwardRef, type ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  href?: string;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<HTMLMotionProps<'button'>, keyof ButtonBaseProps>;

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps>;

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg hover:shadow-purple-500/25',
  secondary:
    'border border-white/20 bg-transparent text-white hover:bg-white/5 hover:border-white/40',
  ghost:
    'bg-transparent text-white/70 hover:text-white hover:bg-white/5',
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
};

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      className,
      href,
      ...rest
    },
    ref
  ) => {
    const classes = cn(
      'inline-flex items-center justify-center font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50',
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const motionProps = {
      whileHover: {
        y: -2,
        ...(variant === 'primary' && {
          boxShadow: '0 8px 30px rgba(168, 85, 247, 0.4)',
        }),
      },
      whileTap: { scale: 0.97 },
      transition: { type: 'spring' as const, stiffness: 400, damping: 17 },
    };

    if (href) {
      return (
        <motion.div {...motionProps} className="inline-block">
          <Link
            href={href}
            ref={ref as React.Ref<HTMLAnchorElement>}
            className={classes}
            {...(rest as Omit<
              React.AnchorHTMLAttributes<HTMLAnchorElement>,
              keyof ButtonBaseProps
            >)}
          >
            {children}
          </Link>
        </motion.div>
      );
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...motionProps}
        {...(rest as Omit<HTMLMotionProps<'button'>, keyof ButtonBaseProps>)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps, Variant as ButtonVariant, Size as ButtonSize };
