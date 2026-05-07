import React from 'react';
import { cn } from '@aruviliui/core/utils';
import { TabsProps, TabsListProps, TabsTriggerProps, TabsContentProps } from '@aruviliui/core/types/tabs';
import { TabsProvider, useTabsContext } from '../providers/TabsProvider';

export const Tabs = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & TabsProps>(
  ({ className, defaultValue, value, onValueChange, children, ...props }, ref) => {
    return (
      <TabsProvider value={value} defaultValue={defaultValue} onValueChange={onValueChange}>
        <div ref={ref} className={cn("w-full", className)} {...props}>
          {children}
        </div>
      </TabsProvider>
    );
  }
);
Tabs.displayName = "Tabs";

export const TabsList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & TabsListProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center gap-4 text-sm font-medium border-b border-zinc-800",
        className
      )}
      {...props}
    />
  )
);
TabsList.displayName = "TabsList";

export const TabsTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & TabsTriggerProps>(
  ({ className, value, disabled, ...props }, ref) => {
    const context = useTabsContext();
    const isSelected = context.value === value;

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        onClick={() => context.onValueChange(value)}
        className={cn(
          "pb-3 -mb-[1px] border-b-2 transition-colors disabled:pointer-events-none disabled:opacity-50",
          isSelected 
            ? "border-white text-white dark:border-white dark:text-white" 
            : "border-transparent text-zinc-500 hover:text-zinc-300",
          className
        )}
        {...props}
      />
    );
  }
);
TabsTrigger.displayName = "TabsTrigger";

export const TabsContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & TabsContentProps>(
  ({ className, value, ...props }, ref) => {
    const context = useTabsContext();

    if (context.value !== value) return null;

    return (
      <div
        ref={ref}
        className={cn("mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300", className)}
        {...props}
      />
    );
  }
);
TabsContent.displayName = "TabsContent";


