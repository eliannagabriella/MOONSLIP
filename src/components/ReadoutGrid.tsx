import * as React from "react";
import { cx } from "../cx";

export interface ReadoutGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of columns (default 4; 2 below 1100px, 1 below 560px). */
  columns?: number;
}

/** Mission-control answer row: Readout cells divided by vertical hairlines. Put it inside a Panel. */
export function ReadoutGrid({ columns = 4, className, style, ...rest }: ReadoutGridProps) {
  return <div className={cx("ms-readouts", className)} style={{ ["--cols" as string]: columns, ...style }} {...rest} />;
}
