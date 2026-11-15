import * as React from "react";
import { cx } from "../cx";

export interface ValueDisplayProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Label on the left, e.g. "Launch slip". */
  label: React.ReactNode;
  /** Live value on the right (light Inter 34px). */
  value: React.ReactNode;
  /** Mono unit after the value, e.g. "DAYS". */
  unit?: React.ReactNode;
}

/** Label-and-live-value row that sits above a RangeSlider, e.g. "Launch slip  12 DAYS". */
export function ValueDisplay({ label, value, unit, className, ...rest }: ValueDisplayProps) {
  return (
    <div className={cx("ms-value", className)} {...rest}>
      <span>{label}</span>
      <b>
        {value}
        {unit && <small>{unit}</small>}
      </b>
    </div>
  );
}
