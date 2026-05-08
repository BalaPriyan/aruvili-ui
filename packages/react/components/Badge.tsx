'use client';
import React from 'react';
import { cn } from '@aruviliui/core/utils';
import { BadgeProps } from '@aruviliui/core/types/badge';

export const Badge = React.memo(React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    
    const variants = {
      default: 'border-transparent bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900',
      secondary: 'border-transparent bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50',
      outline: 'text-zinc-950 dark:text-zinc-50',
      danger: 'border-transparent bg-red-500 text-white dark:bg-red-900 dark:text-red-100',
    };

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full border border-zinc-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300",
          variants[variant as keyof typeof variants],
          className
        )}
        {...props}
      />
    );
  }
));

Badge.displayName = "Badge";


