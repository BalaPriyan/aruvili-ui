'use client';

import React from 'react';
import { cn } from '@aruviliui/core/utils';
import { InputProps } from '@aruviliui/core/types/data-entry';

export const Input = React.memo(React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', size = 'md', error, disabled, iconLeft, iconRight, helperText, onChange, ...props }, ref) => {
    
    const baseStyles = 'flex w-full rounded-md border bg-white dark:bg-zinc-900 text-sm ring-offset-background transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 disabled:cursor-not-allowed disabled:opacity-50';
    
    const stateStyles = error 
      ? 'border-red-500 focus-visible:ring-red-500 dark:border-red-500 dark:focus-visible:ring-red-500' 
      : 'border-zinc-200 dark:border-zinc-800';

    const sizes = {
      sm: 'h-8 px-3 text-xs',
      md: 'h-10 px-3',
      lg: 'h-12 px-4 text-base',
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e.target.value);
      }
    };

    return (
      <div className="w-full space-y-1">
        <div className="relative flex items-center">
          {iconLeft && (
            <div className="absolute left-3 flex items-center justify-center text-zinc-500 pointer-events-none">
              {iconLeft}
            </div>
          )}
          
          <input
            type={type}
            className={cn(
              baseStyles,
              stateStyles,
              sizes[size as keyof typeof sizes],
              iconLeft ? 'pl-9' : '',
              iconRight ? 'pr-9' : '',
              className
            )}
            ref={ref}
            disabled={disabled}
            onChange={handleChange}
            {...props}
          />

          {iconRight && (
            <div className="absolute right-3 flex items-center justify-center text-zinc-500 pointer-events-none">
              {iconRight}
            </div>
          )}
        </div>
        
        {helperText && (
          <p className={cn("text-xs", error ? "text-red-500" : "text-zinc-500")}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
));

Input.displayName = 'Input';


