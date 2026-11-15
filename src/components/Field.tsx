import * as React from "react";
import { cx } from "../cx";

export interface FieldProps extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, "label"> {
  /** Field label (13px muted). */
  label: React.ReactNode;
  /** Optional hint under the control. */
  hint?: React.ReactNode;
}

/** Label wrapper for one form control (Select, Input, RangeSlider). Stacks label, control, hint with 6px gaps. */
export function Field({ label, hint, className, children, ...rest }: FieldProps) {
  return (
    <label className={cx("ms-field", className)} {...rest}>
      {label}
      {children}
      {hint && <span className="ms-field__hint">{hint}</span>}
    </label>
  );
}
