import * as React from "react";
import { cx } from "../cx";

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Fill percentage, 0-100. */
  value: number;
}

/** Thin 6px blue-gradient bar on a faint track. */
export function ProgressBar({ value, className, ...rest }: ProgressBarProps) {
  const v = Math.max(0, Math.min(100, value));
  return (
    <div className={cx("ms-bar", className)} role="meter" aria-valuemin={0} aria-valuemax={100} aria-valuenow={v} {...rest}>
      <i style={{ width: `${v}%` }} />
    </div>
  );
}
