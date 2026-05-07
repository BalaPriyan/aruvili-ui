export interface TabsProps {
  className?: string;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children?: any;
}

export interface TabsListProps {
  className?: string;
  children?: any;
}

export interface TabsTriggerProps {
  className?: string;
  value: string;
  disabled?: boolean;
  children?: any;
}

export interface TabsContentProps {
  className?: string;
  value: string;
  children?: any;
}
