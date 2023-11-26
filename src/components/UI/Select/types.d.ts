import * as React from "react";
import { FormikProps } from 'formik';

interface OptionItem {
  [key: string]: any;
}

export interface Props extends React.ComponentPropsWithoutRef<"select"> {
  label?: string;
  name: string;
  value?: string | number | readonly string[];
  mode?:
    | "primary"
    | "transparent"
    | "trueTransparent"
    | "secondary"
    | "disabled";
  field?: any;
  form?: FormikProps<MyFormValues>;
  error?: string | undefined; // Use a more specific type if needed;
  className?: string;
  size?: "rg" | "lg";
  fullWidth?: boolean;
  fieldError?: string;
  hintText?: string;
  infoIconClass?: string;
  options: OptionItem[];
}
