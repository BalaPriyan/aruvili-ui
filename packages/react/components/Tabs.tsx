import React, { createContext, useContext, useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { TabsProps, TabsListProps, TabsTriggerProps, TabsContentProps } from '@aruvili/specs/tabs';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type TabsContextValue = {
  value: string;
  onValueChange: (value: string) => void;
};

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

export const Tabs = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & TabsProps>(
  ({ className, defaultValue, value: controlledValue, onValueChange: setControlledValue, ...props }, ref) => {
    
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue || '');
    const isControlled = controlledValue !== undefined;
    const value = isControlled ? controlledValue : uncontrolledValue;
    
    const onValueChange = (newValue: string) => {
      if (!isControlled) {
        setUncontrolledValue(newValue);
      }
      setControlledValue?.(newValue);
    };

    return (
      <TabsContext.Provider value={{ value, onValueChange }}>
        <div ref={ref} className={cn("w-full", className)} {...props} />
      </TabsContext.Provider>
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
    const context = useContext(TabsContext);
    if (!context) throw new Error("TabsTrigger must be used within Tabs");

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
    const context = useContext(TabsContext);
    if (!context) throw new Error("TabsContent must be used within Tabs");

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
