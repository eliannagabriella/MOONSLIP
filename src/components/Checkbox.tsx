import * as React from "react";
import { cx } from "../cx";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Text next to the box. */
  label: React.ReactNode;
}

/** 20px light-blue checkbox with its label, in a 44px tall touch row. */
export function Checkbox({ label, className, ...rest }: CheckboxProps) {
  return (
    <label className={cx("ms-check", className)}>
      <input type="checkbox" {...rest} />
      {label}
    </label>
  );
}
