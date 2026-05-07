import React, { useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { AvatarProps } from '@aruvili/specs/avatar';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Avatar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & AvatarProps>(
  ({ className, src, fallback, alt, size = 'md', ...props }, ref) => {
    const [imgError, setImgError] = useState(false);

    const sizeClasses = {
      sm: 'h-8 w-8 text-xs',
      md: 'h-12 w-12 text-xl',
      lg: 'h-16 w-16 text-2xl',
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex shrink-0 overflow-hidden rounded-full bg-black border border-zinc-200 dark:border-zinc-800",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {src && !imgError ? (
          <img
            src={src}
            alt={alt || "Avatar"}
            className="aspect-square h-full w-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-zinc-100 dark:bg-black font-bold text-zinc-900 dark:text-white">
            {fallback || alt?.charAt(0) || '?'}
          </div>
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";
