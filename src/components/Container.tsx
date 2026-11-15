import * as React from "react";
import { cx } from "../cx";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

/** Centered page column: max-width 1240px with a responsive side gutter (max(5vw, 16px)). */
export function Container({ className, ...rest }: ContainerProps) {
  return <div className={cx("ms-container", className)} {...rest} />;
}
