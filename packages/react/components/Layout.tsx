'use client';
import React from 'react';
import { cn } from '@aruviliui/core/utils';
import { BoxProps, GridProps, StackProps, FlexProps, AlignItems, JustifyContent } from '@aruviliui/core/types/layout';

const alignMap: Record<AlignItems, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  baseline: 'items-baseline',
  stretch: 'items-stretch'
};

const justifyMap: Record<JustifyContent, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly'
};

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ as: Component = 'div', className, children, ...props }, ref) => (
    <Component ref={ref} className={className} {...props}>
      {children}
    </Component>
  )
);
Box.displayName = 'Box';

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, children, cols, gap, ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={cn('grid', className)} 
        style={{ 
          gridTemplateColumns: typeof cols === 'number' ? `repeat(${cols}, minmax(0, 1fr))` : cols,
          gap: typeof gap === 'number' ? `${gap * 0.25}rem` : gap,
          ...props.style
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Grid.displayName = 'Grid';

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ className, children, direction = 'row', align, justify, gap, wrap, ...props }, ref) => {
    const wrapClass = wrap === true ? 'flex-wrap' : wrap === false ? 'flex-nowrap' : wrap ? `flex-${wrap}` : '';
    const directionClass = direction ? `flex-${direction}` : '';

    return (
      <div
        ref={ref}
        className={cn(
          'flex',
          directionClass,
          align && alignMap[align],
          justify && justifyMap[justify],
          wrapClass,
          className
        )}
        style={{ 
          gap: typeof gap === 'number' ? `${gap * 0.25}rem` : gap,
          ...props.style
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Flex.displayName = 'Flex';

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, children, direction = 'col', gap = 4, ...props }, ref) => {
    return (
      <Flex
        ref={ref}
        direction={direction}
        gap={gap}
        className={className}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);
Stack.displayName = 'Stack';


