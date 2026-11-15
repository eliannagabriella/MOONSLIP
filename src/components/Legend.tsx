import * as React from "react";
import { cx } from "../cx";

export interface LegendProps extends React.HTMLAttributes<HTMLDivElement> {}

/** Wrapping row of LegendItems (12px muted) under a chart or calendar. */
export function Legend({ className, ...rest }: LegendProps) {
  return <div className={cx("ms-legend", className)} {...rest} />;
}
