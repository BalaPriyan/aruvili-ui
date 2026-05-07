import React, { useRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { 
  SelectProps, 
  SelectTriggerProps, 
  SelectValueProps, 
  SelectContentProps, 
  SelectItemProps 
} from '@aruvili/specs/select';
import { SelectProvider, useSelectContext } from '../providers/SelectProvider';
import { useClickOutside } from '../hooks/useClickOutside';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-50"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
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
          {isSelected && (
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
          )}
        </span>
        {children as React.ReactNode}
      </div>
    );
  }
));
SelectItem.displayName = "SelectItem";
