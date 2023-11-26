import * as React from "react";

interface OptionItem {
  [key: string]: any;
}
export interface Props extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  mode?:
    | "primary"
    | "transparent"
    | "trueTransparent"
    | "secondary"
    | "disabled";
  error?: string | undefined; // Use a more specific type if needed;
  className?: string;
  size?: "rg" | "lg";
  fullWidth?: boolean;
  fieldError?: string;
  hintText?: string;
  infoIconClass?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, o: OptionItem) => void;
  options: OptionItem[];
  selectedValues?: string[] | number[] | OptionItem[];
}
