import React from 'react';
export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export type AlignItems = 'start' | 'center' | 'end' | 'baseline' | 'stretch';
export type JustifyContent = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

export interface FlexProps extends LayoutProps {
  /** Direction of the flex container */
  direction?: 'row' | 'row-reverse' | 'col' | 'col-reverse';
  /** Alignment of items along the cross axis */
  align?: AlignItems;
  /** Justification of items along the main axis */
  justify?: JustifyContent;
  /** Gap between items */
  gap?: number | string;
  /** Whether the flex container should wrap */
  wrap?: boolean | 'wrap' | 'nowrap' | 'reverse';
}

export interface GridProps extends LayoutProps {
  /** Number of columns */
  cols?: number | string;
  /** Gap between items */
  gap?: number | string;
}

export interface StackProps extends Omit<FlexProps, 'direction'> {
  /** Direction of the stack */
  direction?: 'row' | 'col';
}

export interface BoxProps extends LayoutProps {
  /** Custom HTML tag */
  as?: React.ElementType;
}

