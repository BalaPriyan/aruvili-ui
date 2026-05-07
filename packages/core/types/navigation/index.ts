import React from 'react';
export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  active?: boolean;
}

export interface BreadcrumbsProps {
  /** Array of breadcrumb items */
  items: BreadcrumbItem[];
  /** Custom separator between items */
  separator?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export interface StepperStep {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  status?: 'complete' | 'current' | 'upcoming' | 'error';
}

export interface StepperProps {
  /** Array of steps */
  steps: StepperStep[];
  /** Index of the current step */
  currentStep?: number;
  /** Orientation of the stepper */
  orientation?: 'horizontal' | 'vertical';
  /** Additional CSS classes */
  className?: string;
}

export interface PaginationProps {
  /** Total number of items */
  total: number;
  /** Current active page */
  current: number;
  /** Number of items per page */
  pageSize?: number;
  /** Callback when page changes */
  onChange?: (page: number) => void;
  /** Additional CSS classes */
  className?: string;
}

