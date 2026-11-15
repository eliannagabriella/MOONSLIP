import * as React from "react";
import { cx } from "../cx";

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

/** Small translucent pill button (12px) for inline row actions such as "Open", "Remove" or "Load" inside tables. */
export function Chip({ className, type = "button", ...rest }: ChipProps) {
  return <button type={type} className={cx("ms-chip", className)} {...rest} />;
}
