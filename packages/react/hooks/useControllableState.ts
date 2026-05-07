import { useState, useCallback } from 'react';

type UseControllableStateParams<T> = {
  prop?: T;
  defaultProp?: T;
  onChange?: (state: T) => void;
};

export function useControllableState<T>({
  prop,
  defaultProp,
  onChange,
}: UseControllableStateParams<T>) {
  const [uncontrolledProp, setUncontrolledProp] = useState<T | undefined>(defaultProp);
  const isControlled = prop !== undefined;
  const value = isControlled ? prop : uncontrolledProp;

  const setValue = useCallback(
    (nextValue: T | ((prevValue: T) => T)) => {
      if (isControlled) {
        const setter = nextValue as (prevValue: T) => T;
        const valueToSet = typeof nextValue === 'function' ? setter(prop) : nextValue;
        if (valueToSet !== prop) onChange?.(valueToSet);
      } else {
        setUncontrolledProp(nextValue as T);
        if (typeof nextValue === 'function') {
          onChange?.((nextValue as (prevValue: T | undefined) => T)(uncontrolledProp));
        } else {
          onChange?.(nextValue);
        }
      }
    },
    [isControlled, prop, uncontrolledProp, onChange]
  );

  return [value, setValue] as const;
}
