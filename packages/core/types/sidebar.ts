import React from 'react';

export interface SidebarProps {
  children?: React.ReactNode;
  className?: string;
  /** Whether the sidebar is collapsed */
  collapsed?: boolean;
  /** Callback when collapsed state changes */
  onCollapse?: (collapsed: boolean) => void;
  /** Width of the sidebar when expanded */
  width?: string | number;
  /** Width of the sidebar when collapsed */
  collapsedWidth?: string | number;
  /** Theme variant */
  variant?: 'light' | 'dark' | 'glass';
}

export interface SidebarItemProps {
  icon?: React.ReactNode;
  label: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  className?: string;
  /** Tooltip to show when collapsed */
  tooltip?: string;
}

export interface SidebarGroupProps {
  label?: string;
  children: React.ReactNode;
  className?: string;
}
