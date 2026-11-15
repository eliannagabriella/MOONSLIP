import * as React from "react";
import { cx } from "../cx";

export interface GlassSurfaceProps extends React.HTMLAttributes<HTMLDivElement> {}

/** Generic frosted-glass container (24px blur, 7% light-blue fill, hairline border, 26px radius, 24px padding). */
export function GlassSurface({ className, ...rest }: GlassSurfaceProps) {
  return <div className={cx("ms-glass", className)} {...rest} />;
}
