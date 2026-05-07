import React from 'react';
export interface SwitchProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Whether the switch is checked */
  checked?: boolean;
  /** Callback when checked state changes */
  onCheckedChange?: (checked: boolean) => void;
  /** Optional label for the switch */
  label?: string;
}

export interface CheckboxProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Whether the checkbox is checked */
  checked?: boolean | 'indeterminate';
  /** Callback when checked state changes */
  onCheckedChange?: (checked: boolean | 'indeterminate') => void;
  /** Optional label for the checkbox */
  label?: string;
}

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  /** Label for the input */
  label?: string;
  /** Error message */
  error?: string | boolean;
  /** Helper text */
  helperText?: string;
  /** Icon to display on the left */
  iconLeft?: React.ReactNode;
  /** Icon to display on the right */
  iconRight?: React.ReactNode;
  /** The size of the input field */
  size?: 'sm' | 'md' | 'lg';
  /** Callback fired when the value changes */
  onChange?: (value: string) => void;
}

