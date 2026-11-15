import * as React from "react";
import { cx } from "../cx";

export interface LabelProps extends React.HTMLAttributes<HTMLElement> {
  /** `default` 12px eyebrow; `key` 11px readout key; `accent` light-blue eyebrow. */
  variant?: "default" | "key" | "accent";
  as?: "div" | "span" | "p";
}

/**
 * Uppercase JetBrains Mono eyebrow label (12px, 0.1em tracking, muted blue-grey).
 * Use above headings ("01 / Our purpose", "Step 1 · Dates") and as readout keys.
 */
export function Label({ variant = "default", as: Tag = "div", className, ...rest }: LabelProps) {
  return (
    <Tag
      className={cx("ms-label", variant === "key" && "ms-label--key", variant === "accent" && "ms-label--accent", className)}
      {...rest}
    />
  );
}
