import * as React from "react";
import { getIn } from "formik";
// types
import { Props } from "./types";

export const Checkbox: React.FC<Props> = ({
  label,
  value,
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
  checked,
  ...rest
}) => {
  // ${hasError && mode === "primary1" ? "bg-red-500/20" : ""
  const error =
    form && field
      ? getIn(form.errors, field?.name)
      : fieldError
      ? fieldError
      : "";
  const touched = form && field ? getIn(form.touched, field.name) : true;
  const hasError = error && touched;
  return (
    <div className="form-control">
      {label && (
        <label htmlFor={id} className="label cursor-pointer">
          <span className="label-text">{label}</span>
        </label>
      )}
      <input
        type="checkbox"
        id={id}
        name={name || "checkbox-input"}
        value={value}
        checked={checked}
        onChange={(e) => {
          onChange && onChange(e);
        }}
        className={`checkbox ${
          mode === "primary" ? "checkbox-bordered" : "checkbox-bordered"
        } ${hasError ? "checkbox-error" : ""} ${fullWidth ? "w-full" : ""} ${
          size === "rg" ? "px-3 py-2" : size === "lg" ? "p-3" : ""
        } ${className}`}
        {...rest}
      />
      {hasError && <div className="text-red-600">{error}</div>}
    </div>
  );
};
