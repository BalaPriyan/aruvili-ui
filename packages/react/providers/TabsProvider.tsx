import React, { createContext, useContext, useMemo, ReactNode } from 'react';
import { useControllableState } from '../hooks/useControllableState';

type TabsContextValue = {
  value: string;
  onValueChange: (value: string) => void;
};

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

export function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within TabsProvider or Tabs component.');
  }
  return context;
}

export interface TabsProviderProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  children: ReactNode;
}

export function TabsProvider({
  value: controlledValue,
  defaultValue,
  onValueChange,
  children,
}: TabsProviderProps) {
  const [value, setValue] = useControllableState({
    prop: controlledValue,
    defaultProp: defaultValue || '',
    onChange: onValueChange,
  });

  const contextValue = useMemo(
    () => ({
      value: value as string,
      onValueChange: setValue as (value: string) => void,
    }),
    [value, setValue]
  );

  return <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>;
}
