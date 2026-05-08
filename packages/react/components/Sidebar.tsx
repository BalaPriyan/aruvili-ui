'use client';

import React, { createContext, useContext } from 'react';
import { cn } from '@aruviliui/core/utils';
import { SidebarProps, SidebarItemProps, SidebarGroupProps } from '@aruviliui/core/types/sidebar';

const SidebarContext = createContext<{ collapsed: boolean }>({ collapsed: false });

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ children, className, collapsed = false, width = 260, collapsedWidth = 80, variant = 'light', ...props }, ref) => {
    
    const variants = {
      light: 'bg-white border-r border-zinc-200 text-zinc-900 dark:bg-zinc-950 dark:border-zinc-800 dark:text-zinc-100',
      dark: 'bg-zinc-900 text-white border-r border-zinc-800',
      glass: 'bg-white/70 backdrop-blur-md border-r border-white/20 dark:bg-zinc-950/70',
    };

    return (
      <SidebarContext.Provider value={{ collapsed }}>
        <aside
          ref={ref}
          style={{ width: collapsed ? collapsedWidth : width }}
          className={cn(
            'flex flex-col h-full transition-all duration-300 ease-in-out z-40',
            variants[variant],
            className
          )}
          {...props}
        >
          {children}
        </aside>
      </SidebarContext.Provider>
    );
  }
);
Sidebar.displayName = 'Sidebar';

export const SidebarItem = ({ icon, label, active, disabled, onClick, href, className, tooltip }: SidebarItemProps) => {
  const { collapsed } = useContext(SidebarContext);
  
  const content = (
    <div
      onClick={disabled ? undefined : onClick}
      className={cn(
        'flex items-center gap-3 px-3 py-2 rounded-md transition-colors cursor-pointer group relative',
        active 
          ? 'bg-zinc-100 text-zinc-950 dark:bg-zinc-800 dark:text-white font-medium' 
          : 'text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100',
        disabled && 'opacity-50 cursor-not-allowed grayscale',
        collapsed && 'justify-center px-0',
        className
      )}
    >
      {icon && (
        <div className={cn('flex-shrink-0', collapsed ? 'text-xl' : 'text-lg')}>
          {icon}
        </div>
      )}
      
      {!collapsed && (
        <span className="truncate flex-1 font-medium">{label}</span>
      )}

      {collapsed && tooltip && (
        <div className="absolute left-full ml-2 px-2 py-1 bg-zinc-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
          {tooltip}
        </div>
      )}
    </div>
  );

  if (href && !disabled) {
    return <a href={href} className="no-underline block">{content}</a>;
  }

  return content;
};

export const SidebarGroup = ({ label, children, className }: SidebarGroupProps) => {
  const { collapsed } = useContext(SidebarContext);

  return (
    <div className={cn('flex flex-col gap-1 px-3 py-4', className)}>
      {label && !collapsed && (
        <h4 className="px-3 text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
          {label}
        </h4>
      )}
      <div className="flex flex-col gap-1">
        {children}
      </div>
    </div>
  );
};
