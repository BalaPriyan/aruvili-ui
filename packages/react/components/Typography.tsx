'use client';
import React from 'react';
import { cn } from '@aruviliui/core/utils';
import { TypographyProps } from '@aruviliui/core/types/typography';

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ variant, children, className, as, ...props }, ref) => {
    const variants = {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white',
      h2: 'scroll-m-20 border-b border-zinc-800 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-white',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight text-white',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight text-white',
      p: 'leading-7 [&:not(:first-child)]:mt-6 text-zinc-300',
      lead: 'text-xl text-zinc-400',
      small: 'text-sm font-medium leading-none text-zinc-400',
      code: 'relative rounded bg-zinc-800/50 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-zinc-100 border border-zinc-700/50',
    };

    const activeVariant = variant || (as ? undefined : 'p');
    const Component = (as || activeVariant || 'p') as any;

    return (
      <Component
        ref={ref}
        className={cn(activeVariant && variants[activeVariant as keyof typeof variants], className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';


