import React from 'react';
export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small' | 'code' | 'lead';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  /** The typographic variant to render */
  variant?: TypographyVariant;
  /** Content of the component */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Custom HTML tag to use */
  as?: React.ElementType;
}

