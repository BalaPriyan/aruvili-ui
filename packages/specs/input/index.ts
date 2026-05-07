export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps {
  /** The value of the input for controlled components */
  value?: string;
  /** The default value for uncontrolled components */
  defaultValue?: string;
  /** Callback fired when the value changes */
  onChange?: (value: string) => void;
  /** Placeholder text */
  placeholder?: string;
  /** The size of the input field */
  size?: InputSize;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Indicates an error state */
  error?: boolean;
  /** Helper or error message displayed below the input */
  helperText?: string;
  /** Optional icon to display on the left */
  iconLeft?: any;
  /** Optional icon to display on the right */
  iconRight?: any;
  /** Additional CSS classes */
  className?: string;
  /** Native input type (e.g., text, password, email) */
  type?: string;
}
