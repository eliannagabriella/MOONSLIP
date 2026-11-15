import * as React from "react";
import { cx } from "../cx";

export interface ReadoutProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** Mono key, e.g. "Verdict", "Margin left". */
  label: React.ReactNode;
  /** Big value (light Inter, 30-42px, tabular). Omit when children carry the value (e.g. a VerdictPill). */
  value?: React.ReactNode;
  /** Muted 13px line under the value. */
  sub?: React.ReactNode;
}

/** One key/value readout: mono key, large figure, muted sub-line. Use inside ReadoutGrid. */
export function Readout({ label, value, sub, className, children, ...rest }: ReadoutProps) {
  return (
    <div className={cx("ms-readout", className)} {...rest}>
      <div className="ms-label ms-label--key">{label}</div>
      {value !== undefined && <div className="ms-big">{value}</div>}
      {children}
      {sub && <div className="ms-text ms-text--small">{sub}</div>}
    </div>
  );
}
