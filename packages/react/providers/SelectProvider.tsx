import React, { createContext, useContext, useMemo, ReactNode, useState, useCallback } from 'react';
import { useControllableState } from '../hooks/useControllableState';

type SelectContextValue = {
  value: string;
  onValueChange: (value: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  disabled?: boolean;
};

const SelectContext = createContext<SelectContextValue | undefined>(undefined);

export function useSelectContext() {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error('Select components must be used within SelectProvider or Select component.');
  }
  return context;
}

export interface SelectProviderProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  children: ReactNode;
}

export function SelectProvider({
  value: controlledValue,
  defaultValue,
  onValueChange,
  disabled,
  children,
}: SelectProviderProps) {
  const [value, setValue] = useControllableState({
    prop: controlledValue,
    defaultProp: defaultValue || '',
    onChange: onValueChange,
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleValueChange = useCallback(
    (newValue: string) => {
      setValue(newValue);
      setIsOpen(false);
    },
    [setValue]
  );

  const contextValue = useMemo(
    () => ({
      value: value as string,
      onValueChange: handleValueChange,
      isOpen,
      setIsOpen,
      disabled,
    }),
    [value, handleValueChange, isOpen, disabled]
  );

  return <SelectContext.Provider value={contextValue}>{children}</SelectContext.Provider>;
}
