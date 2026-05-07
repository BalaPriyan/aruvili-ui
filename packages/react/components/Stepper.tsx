import React from 'react';
import { StepperProps } from '@aruviliui/core/types/navigation';
import { CheckIcon } from '@aruviliui/icons';
import { cn } from '@aruviliui/core/utils';

export const Stepper: React.FC<StepperProps> = ({ 
  steps, 
  currentStep = 0, 
  orientation = 'horizontal', 
  className 
}) => {
  return (
    <div className={cn(
      'flex',
      orientation === 'vertical' ? 'flex-col gap-0' : 'items-center w-full',
      className
    )}>
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;
        const isUpcoming = index > currentStep;
        const isLast = index === steps.length - 1;

        return (
          <div key={step.title} className={cn(
            'flex',
            orientation === 'horizontal' ? 'flex-1 items-center' : 'items-start gap-4'
          )}>
            <div className="flex flex-col items-center">
               <div className={cn(
                 "w-9 h-9 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all duration-300 relative z-10",
                 isCompleted && "bg-emerald-500 border-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]",
                 isCurrent && "border-zinc-100 text-white bg-zinc-900 shadow-[0_0_15px_rgba(255,255,255,0.1)]",
                 isUpcoming && "border-zinc-800 text-zinc-600 bg-[#0a0a0a]"
               )}>
                 {isCompleted ? <CheckIcon size={18} strokeWidth={3} /> : index + 1}
               </div>
               {orientation === 'vertical' && !isLast && (
                 <div className={cn(
                   "w-[2px] h-12 -my-0.5 transition-colors duration-300",
                   isCompleted ? "bg-emerald-500" : "bg-zinc-800"
                 )} />
               )}
            </div>

            <div className={cn(
              "flex flex-col py-1.5",
              orientation === 'horizontal' ? "ml-3 mr-4" : "ml-0"
            )}>
              <span className={cn(
                "text-sm font-semibold transition-colors duration-300",
                isCurrent || isCompleted ? "text-white" : "text-zinc-600"
              )}>
                {step.title}
              </span>
              {step.description && (
                <span className="text-xs text-zinc-600 mt-1">{step.description}</span>
              )}
            </div>

            {orientation === 'horizontal' && !isLast && (
              <div className={cn(
                "flex-1 h-[2px] mx-4 rounded-full transition-colors duration-300",
                isCompleted ? "bg-emerald-500" : "bg-zinc-800"
              )} />
            )}
          </div>
        );
      })}
    </div>
  );
};


