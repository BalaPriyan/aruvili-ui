import React from 'react';
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

export interface ButtonProps {
  /** The visual style of the button */
  variant?: ButtonVariant;
  /** The size of the button */
  size?: ButtonSize;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether the button is in a loading state */
  loading?: boolean;
  /** Optional icon to display before the label */
  iconLeft?: any;
  /** Optional icon to display after the label */
  iconRight?: any;
  /** Button label/children */
  children?: any;
  /** Click handler (Web) */
  onClick?: () => void;
  /** Press handler (React Native) */
  onPress?: () => void;
  /** Additional CSS classes (Web/NativeWind) */
  className?: string;
}

export interface ButtonGroupProps {
  /** Buttons to group */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Whether to stack buttons vertically */
  vertical?: boolean;
}

