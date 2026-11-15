import * as React from "react";
import { cx } from "../cx";
import { ProgressBar } from "./ProgressBar";

export interface BarRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Row label (110px column). */
  label: React.ReactNode;
  /** Percentage, 0-100; also printed on the right. */
  value: number;
}

/** Labelled comparison bar: label | bar | "34%". Stack several to compare scenarios. */
export function BarRow({ label, value, className, ...rest }: BarRowProps) {
  return (
    <div className={cx("ms-barrow", className)} {...rest}>
      <span>{label}</span>
      <ProgressBar value={value} />
      <b>{Math.round(value)}%</b>
    </div>
  );
}
