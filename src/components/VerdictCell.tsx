import * as React from "react";
import { cx, verdictClass, type Verdict } from "../cx";

export interface VerdictCellProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  verdict: Verdict;
  /** Letter inside the cell; defaults to G / Y / R / ·. */
  label?: React.ReactNode;
  /** White outline for the selected day. */
  selected?: boolean;
  /** Render as a non-interactive swatch (for legends). */
  static?: boolean;
}

const letter: Record<Verdict, string> = { go: "G", caution: "Y", nogo: "R", nodata: "·" };

/** 24x28px coloured day cell for the slip calendar heat-map (one per site per date). Grows on hover. */
export function VerdictCell({ verdict, label, selected, static: isStatic, className, type = "button", ...rest }: VerdictCellProps) {
  const cls = cx("ms-cell", verdictClass[verdict], selected && "ms-cell--selected", isStatic && "ms-cell--static", className);
  if (isStatic) return <span className={cls}>{label ?? letter[verdict]}</span>;
  return (
    <button type={type} className={cls} aria-pressed={selected || undefined} {...rest}>
      {label ?? letter[verdict]}
    </button>
  );
}
