import React from 'react';
import { BreadcrumbsProps } from '@aruviliui/core/types/navigation';
import { ChevronRightIcon } from '@aruviliui/icons';
import { cn } from '@aruviliui/core/utils';

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ 
  items, 
  separator = <ChevronRightIcon size={14} />, 
  className 
}) => {
  return (
    <nav className={cn('flex items-center text-sm', className)}>
      <ol className="flex items-center gap-2 list-none p-0 m-0">
        {items.map((item, index) => (
          <React.Fragment key={item.label}>
            <li className="flex items-center">
              {item.href ? (
                <a 
                  href={item.href} 
                  className={cn(
                    "transition-colors hover:text-zinc-100 outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-sm px-1",
                    item.active ? "text-white font-medium" : "text-zinc-500"
                  )}
                >
                  <div className="flex items-center gap-1.5">
                    {item.icon}
                    {item.label}
                  </div>
                </a>
              ) : (
                <span className={cn(
                  "px-1",
                  item.active ? "text-white font-medium" : "text-zinc-500"
                )}>
                  <div className="flex items-center gap-1.5">
                    {item.icon}
                    {item.label}
                  </div>
                </span>
              )}
            </li>
            {index < items.length - 1 && (
              <li className="text-zinc-700 select-none flex items-center justify-center">
                {separator}
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};


