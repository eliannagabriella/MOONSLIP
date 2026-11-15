import * as React from "react";
import { cx } from "../cx";

export interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** `warning` yellow hazard stripes, uppercase (e.g. "SAMPLE DATA - NOT REAL"); `info` quiet navy status line. */
  variant?: "warning" | "info";
}

/** Full-width pill status banner shown at the top of a results column. */
export function Banner({ variant = "warning", className, ...rest }: BannerProps) {
  return <div role="status" className={cx("ms-banner", variant === "info" && "ms-banner--info", className)} {...rest} />;
}
