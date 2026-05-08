'use client';
import React from 'react';
import { SwitchProps } from '@aruviliui/core/types/data-entry';
import { cn } from '@aruviliui/core/utils';

export const Switch: React.FC<SwitchProps> = ({ 
  checked, 
  onCheckedChange, 
  disabled, 
  label, 
  className,
  ...props 
}) => {
  return (
    <label className={cn(
      "group inline-flex items-center gap-3 cursor-pointer select-none",
      disabled && "opacity-40 cursor-not-allowed",
      className
    )}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onCheckedChange?.(!checked)}
        className={cn(
          "relative inline-flex h-5 w-10 shrink-0 items-center rounded-full border-2 border-transparent transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]",
          checked ? "bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.25)]" : "bg-zinc-800"
        )}
        {...props}
      >
        <span
          className={cn(
            "pointer-events-none block h-4 w-4 rounded-full bg-white shadow-xl ring-0 transition-all duration-300",
            checked ? "translate-x-5" : "translate-x-0"
          )}
        />
      </button>
      {label && (
        <span className="text-sm font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">
          {label}
        </span>
      )}
    </label>
  );
};


