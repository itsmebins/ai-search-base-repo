import * as React from "react";
import { getIn } from "formik";
// types
import { Props } from "./types";

export const Textarea: React.FC<Props> = ({
  label,
  name,
  form,
  field,
  fieldError,
  mode = "primary",
  onChange,
  className = "",
  id,
  size = "rg",
  fullWidth = true,
  hintText = "",
  ...rest
}) => {
  // ${hasError && mode === "primary1" ? "bg-red-500/20" : ""
  const error =
    form && field
      ? getIn(form.errors, field.name)
      : fieldError
      ? fieldError
      : "";
  const touched = form && field ? getIn(form.touched, field.name) : true;
  const hasError = error && touched;
  return (
    <div className="form-control">
      {label && (
        <label htmlFor={id} className="text-brand-muted-1 mb-2">
          {label}
        </label>
      )}
      <textarea
        id={field && field.name ? field.name : name || "text-area-box"}
        {...field}
        onChange={onChange ? onChange : field?.onChange}
        aria-describedby={
          (hasError || hintText) &&
          `${field && field.name ? field.name : name}-help-text`
        }
        className={`textarea ${
          mode === "primary" ? "textarea-primary" : "textarea-bordered"
        } ${hasError ? "textarea-error" : ""} ${fullWidth ? "w-full" : ""} ${
          size === "rg" ? "px-3 py-2" : size === "lg" ? "p-3" : ""
        } ${className}`}
        {...rest}
      />
      {hasError && <div className="text-red-600">{error}</div>}
    </div>
  );
};
