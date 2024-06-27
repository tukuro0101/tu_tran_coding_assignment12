export interface RadioButtonProps {
    label: string;
    name: string;
    value: string;
    checked?: boolean;
    onChange: (value: string) => void;
  }
  