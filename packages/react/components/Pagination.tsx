'use client';
import React from 'react';
import { PaginationProps } from '@aruviliui/core/types/navigation';
import { ChevronLeftIcon, ChevronRightIcon } from '@aruviliui/icons';
import { cn } from '@aruviliui/core/utils';

export const Pagination: React.FC<PaginationProps> = ({ 
  total, 
  current, 
  pageSize = 10, 
  onChange, 
  className 
}) => {
  const totalPages = Math.ceil(total / pageSize);
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  // Simplified logic for visible pages with ellipsis
  let visiblePages: (number | string)[] = pages;
  if (totalPages > 7) {
    if (current <= 4) {
      visiblePages = [...pages.slice(0, 5), '...', totalPages];
    } else if (current >= totalPages - 3) {
      visiblePages = [1, '...', ...pages.slice(totalPages - 5)];
    } else {
      visiblePages = [1, '...', current - 1, current, current + 1, '...', totalPages];
    }
  }

  return (
    <nav className={cn('flex items-center gap-1.5', className)}>
      <button
        onClick={() => onChange?.(current - 1)}
        disabled={current === 1}
        className="h-9 w-9 flex items-center justify-center rounded-md border border-zinc-800/50 bg-[#0a0a0a] text-zinc-500 hover:text-white hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        aria-label="Previous page"
      >
        <ChevronLeftIcon size={16} />
      </button>

      {visiblePages.map((page, index) => {
        const isEllipsis = typeof page === 'string';
        const isActive = page === current;

        if (isEllipsis) {
          return (
            <span key={`ellipsis-${index}`} className="h-9 w-7 flex items-center justify-center text-zinc-600 select-none">
              ...
            </span>
          );
        }

        return (
          <button
            key={page}
            onClick={() => onChange?.(page as number)}
            className={cn(
              "h-9 min-w-[2.25rem] px-2 flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200",
              isActive 
                ? "bg-zinc-100 text-black shadow-lg shadow-white/5" 
                : "text-zinc-500 hover:text-zinc-100 hover:bg-zinc-900 border border-transparent"
            )}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={() => onChange?.(current + 1)}
        disabled={current === totalPages}
        className="h-9 w-9 flex items-center justify-center rounded-md border border-zinc-800/50 bg-[#0a0a0a] text-zinc-500 hover:text-white hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        aria-label="Next page"
      >
        <ChevronRightIcon size={16} />
      </button>
    </nav>
  );
};


