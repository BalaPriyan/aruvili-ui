'use client';

import React from 'react';
import { cn } from '@aruviliui/core/utils';
import { ButtonProps, ButtonGroupProps } from '@aruviliui/core/types/button';

export const Button = React.memo(React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', disabled, loading, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

    const variants = {
      primary: 'bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 shadow-sm',
      secondary: 'bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-50 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-800 shadow-sm',
      outline: 'border border-zinc-200 bg-transparent hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100',
      ghost: 'hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100',
      danger: 'bg-red-500 text-white hover:bg-red-600 shadow-sm',
    };

    const sizes = {
      sm: 'h-8 px-3 text-xs',
      md: 'h-10 px-4 py-2 text-sm',
      lg: 'h-12 px-8 text-base',
      icon: 'h-10 w-10',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(baseStyles, variants[variant as keyof typeof variants], sizes[size as keyof typeof sizes], className)}
        {...props}
      >
        {loading ? (
          <span className="mr-2 animate-spin">🌀</span>
        ) : null}
        {children}
      </button>
    );
  }
));

Button.displayName = 'Button';

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ children, className, vertical = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex isolate',
          vertical ? 'flex-col' : 'flex-row',
          !vertical && '[&>button]:rounded-none first:[&>button]:rounded-l-md last:[&>button]:rounded-r-md',
          vertical && '[&>button]:rounded-none first:[&>button]:rounded-t-md last:[&>button]:rounded-b-md',
          !vertical && '[&>button:not(:first-child)]:-ml-px',
          vertical && '[&>button:not(:first-child)]:-mt-px',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
ButtonGroup.displayName = 'ButtonGroup';

export const IconButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <Button ref={ref} size="icon" className={cn('p-0', className)} {...props} />
  )
);
IconButton.displayName = 'IconButton';


