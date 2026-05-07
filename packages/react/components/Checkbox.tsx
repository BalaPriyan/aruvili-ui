import React from 'react';
import { CheckboxProps } from '@aruviliui/core/types/data-entry';
import { CheckIcon, MinusIcon } from '@aruviliui/icons';
import { cn } from '@aruviliui/core/utils';

export const Checkbox: React.FC<CheckboxProps> = ({ 
  checked, 
  onCheckedChange, 
  disabled, 
  label, 
  className,
  ...props 
}) => {
  const isChecked = checked === true;
  const isIndeterminate = checked === 'indeterminate';

  return (
    <label className={cn(
      "group inline-flex items-center gap-2.5 cursor-pointer select-none",
      disabled && "opacity-40 cursor-not-allowed",
      className
    )}>
      <button
        type="button"
        role="checkbox"
        aria-checked={isIndeterminate ? 'mixed' : isChecked}
        disabled={disabled}
        onClick={() => !disabled && onCheckedChange?.(checked === true ? false : true)}
        className={cn(
          "flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded border-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]",
          (isChecked || isIndeterminate) 
            ? "bg-emerald-500 border-emerald-500 text-white shadow-[0_0_10px_rgba(16,185,129,0.2)]" 
            : "border-zinc-700 bg-transparent hover:border-zinc-500"
        )}
        {...props}
      >
        {isChecked && <CheckIcon size={14} strokeWidth={3} className="animate-in zoom-in-50 duration-200" />}
        {isIndeterminate && <MinusIcon size={14} strokeWidth={3} className="animate-in zoom-in-50 duration-200" />}
      </button>
      {label && (
        <span className="text-sm font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">
          {label}
        </span>
      )}
    </label>
  );
};


