import React from 'react';
export interface SelectProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  children?: unknown;
}

export interface SelectTriggerProps {
  className?: string;
  children?: unknown;
  id?: string;
  'aria-label'?: string;
}

export interface SelectValueProps {
  className?: string;
  placeholder?: string;
}

export interface SelectContentProps {
  className?: string;
  children?: unknown;
}

export interface SelectItemProps {
  className?: string;
  value: string;
  disabled?: boolean;
  children?: unknown;
}

