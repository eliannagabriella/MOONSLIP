import * as React from "react";
import { cx } from "../cx";

export interface InsetProps extends React.HTMLAttributes<HTMLDivElement> {}

/** Darker recessed box (26px radius, 24px padding, stacked with 14px gap) for summaries or charts inside a Panel. */
export function Inset({ className, ...rest }: InsetProps) {
  return <div className={cx("ms-inset", className)} {...rest} />;
}
