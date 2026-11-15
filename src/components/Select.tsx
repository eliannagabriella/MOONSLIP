import * as React from "react";
import { cx } from "../cx";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Options to render; alternatively pass <option> children. */
  options?: SelectOption[];
}

/** 44px dark glass select with a light-blue chevron. Wrap in Field for a label. */
export function Select({ options, className, children, ...rest }: SelectProps) {
  return (
    <select className={cx("ms-select", className)} {...rest}>
      {options?.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
      {children}
    </select>
  );
}
