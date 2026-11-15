import * as React from "react";
import { cx, type Verdict } from "../cx";
import { VerdictCell } from "./VerdictCell";

export interface LegendItemProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Show a verdict cell swatch. */
  verdict?: Verdict;
  /** Or show a line swatch in this CSS colour (e.g. "var(--sun)"). */
  lineColor?: string;
  /** Dashed line swatch. */
  dashed?: boolean;
  /** Line thickness in px (use 10 for a shaded band). */
  thickness?: number;
}

/** One legend entry: a verdict cell or a line swatch followed by its meaning. Use inside Legend. */
export function LegendItem({ verdict, lineColor, dashed, thickness, className, children, ...rest }: LegendItemProps) {
  return (
    <span className={cx("ms-legend__item", className)} {...rest}>
      {verdict && <VerdictCell verdict={verdict} static />}
      {lineColor && (
        <span
          className={cx("ms-swatch", dashed && "ms-swatch--dashed")}
          style={{ borderColor: lineColor, borderTopWidth: thickness ? `${thickness}px` : undefined }}
        />
      )}
      {children}
    </span>
  );
}
