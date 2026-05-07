import React, { useRef } from 'react';
import { cn } from '@aruviliui/core/utils';
import { 
  SelectProps, 
  SelectTriggerProps, 
  SelectValueProps, 
  SelectContentProps, 
  SelectItemProps 
} from '@aruviliui/core/types/select';
import { SelectProvider, useSelectContext } from '../providers/SelectProvider';
import { useClickOutside } from '../hooks/useClickOutside';
import { ChevronDownIcon, CheckIcon } from '@aruviliui/icons';


export const Select = React.memo(({ value, defaultValue, onValueChange, disabled, children }: SelectProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <SelectProvider value={value} defaultValue={defaultValue} onValueChange={onValueChange} disabled={disabled}>
      <SelectContainer>
        {children as React.ReactNode}
      </SelectContainer>
    </SelectProvider>
  );
});
Select.displayName = "Select";

const SelectContainer = ({ children }: { children: React.ReactNode }) => {
  const context = useSelectContext();
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => {
    if (context.isOpen) {
      context.setIsOpen(false);
    }
  });

  return (
    <div ref={containerRef} className="relative w-full">
      {children}
    </div>
  );
};

export const SelectTrigger = React.memo(React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & SelectTriggerProps>(
  ({ className, children, 'aria-label': ariaLabel, id, ...props }, ref) => {
    const context = useSelectContext();

    return (
      <button
        ref={ref}
        type="button"
        id={id}
        aria-label={ariaLabel}
        aria-expanded={context.isOpen}
        aria-haspopup="listbox"
        disabled={context.disabled}
        onClick={() => context.setIsOpen(!context.isOpen)}
        className={cn(
          "flex h-10 w-full items-center justify-between rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-900 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus:ring-zinc-300",
          className
        )}
        {...props}
      >
        {children as React.ReactNode}
        <ChevronDownIcon className="h-4 w-4 opacity-50" />
      </button>
    );
  }
));
SelectTrigger.displayName = "SelectTrigger";

export const SelectValue = React.memo(({ className, placeholder }: SelectValueProps) => {
  const context = useSelectContext();

  return (
    <span className={cn("block truncate", className)}>
      {context.value || <span className="text-zinc-500 dark:text-zinc-400">{placeholder}</span>}
    </span>
  );
});
SelectValue.displayName = "SelectValue";

export const SelectContent = React.memo(React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & SelectContentProps>(
  ({ className, children, ...props }, ref) => {
    const context = useSelectContext();

    if (!context.isOpen) return null;

    return (
      <div
        ref={ref}
        role="listbox"
        className={cn(
          "absolute top-full left-0 mt-1 z-50 min-w-[8rem] w-full overflow-hidden rounded-md border border-zinc-200 bg-white text-zinc-950 shadow-md animate-in fade-in-80 dark:border-zinc-800 dark:bg-[#111] dark:text-zinc-50",
          className
        )}
        {...props}
      >
        <div className="p-1 w-full flex flex-col">
          {children as React.ReactNode}
        </div>
      </div>
    );
  }
));
SelectContent.displayName = "SelectContent";

export const SelectItem = React.memo(React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & SelectItemProps>(
  ({ className, children, value, disabled, ...props }, ref) => {
    const context = useSelectContext();
    const isSelected = context.value === value;

    return (
      <div
        ref={ref}
        role="option"
        aria-selected={isSelected}
        data-disabled={disabled}
        onClick={() => {
          if (!disabled) {
            context.onValueChange(value);
          }
        }}
        className={cn(
          "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-zinc-100 hover:text-zinc-900 data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
          isSelected ? "bg-zinc-100 dark:bg-zinc-800" : "",
          className
        )}
        {...props}
      >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          {isSelected && <CheckIcon className="h-4 w-4" />}
        </span>
        {children as React.ReactNode}
      </div>
    );
  }
));
SelectItem.displayName = "SelectItem";


