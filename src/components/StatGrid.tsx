import * as React from "react";
import { cx } from "../cx";

export interface StatGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of columns (default 4; collapses to 2 below 760px). */
  columns?: number;
}

/** Row of big headline figures between hairline rules, divided by vertical rules. Children are Stat. */
export function StatGrid({ columns = 4, className, style, ...rest }: StatGridProps) {
  return <div className={cx("ms-stats", className)} style={{ ["--cols" as string]: columns, ...style }} {...rest} />;
}
