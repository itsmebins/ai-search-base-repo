import * as React from "react";
// types
import { Props } from "./types";

export const CheckboxGroup: React.FC<Props> = ({
  label,
  fieldError,
  mode = "primary",
  onChange,
  className = "",
  options = [],
  selectedValues = [],
}) => {
  // ${hasError && mode === "primary1" ? "bg-red-500/20" : ""
  const error = fieldError ? fieldError : "";
  const hasError = error;
  return (
    <div className="fgrid-c fgrid-s-xs-3">
      <div className="fgrid-i fgrid-xs-12">
        <span className="text-brand-muted-1 mb-2">{label}</span>
      </div>
      <div className="fgrid-i fgrid-xs-12">
        <div className="fgrid-c fgrid-s-xs-3">
          {options.map((o, i) => {
            return (
              <div className="fgrid-i fgrid-xs-12 fgrid-md-6" key={i}>
                <div className="flex items-center">
                  <label htmlFor={o.label} className="label cursor-pointer">
                    <input
                      type="checkbox"
                      id={o.label}
                      checked={
                        !!selectedValues?.find(
                          (op: any) => op.value === o.value,
                        )
                      }
                      onChange={(e) => {
                        onChange && onChange(e, o);
                      }}
                      className={`checkbox ${
                        mode === "primary"
                          ? "checkbox-primary"
                          : "checkbox-bordered"
                      } ${hasError ? "checkbox-error" : ""}   ${className}`}
                    />
                    <span className="label-text ml-2">{o.label}</span>
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {hasError && (
        <div className="fgrid-i fgrid-xs-12">
          <div className="text-red-600">{error}</div>
        </div>
      )}
    </div>
  );
};
