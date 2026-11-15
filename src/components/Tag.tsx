import * as React from "react";
import { cx } from "../cx";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {}

/** Tiny outlined mono tag (10px) placed after a name, e.g. "terrain", "verified", "polar". */
export function Tag({ className, ...rest }: TagProps) {
  return <span className={cx("ms-tag", className)} {...rest} />;
}
