import * as React from "react";
import { cx, verdictClass, type Verdict } from "../cx";

export interface VerdictPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** `go` green, `caution` yellow, `nogo` red, `nodata` slate. */
  verdict: Verdict;
  /** `lg` 22px headline pill; `sm` 12px for tables. */
  size?: "lg" | "sm";
}

const defaultText: Record<Verdict, string> = { go: "GREEN", caution: "YELLOW", nogo: "RED", nodata: "NO DATA" };

/** Solid status pill for a Green/Yellow/Red mission verdict. Children override the default word. */
export function VerdictPill({ verdict, size = "lg", className, children, ...rest }: VerdictPillProps) {
  return (
    <span className={cx("ms-pill", size === "sm" && "ms-pill--sm", verdictClass[verdict], className)} {...rest}>
      {children ?? defaultText[verdict]}
    </span>
  );
}
