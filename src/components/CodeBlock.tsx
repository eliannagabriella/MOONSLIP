import * as React from "react";
import { cx } from "../cx";

export interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {}

/** Pre-formatted mono block (12px, light blue on near-black) for data contracts and JSON samples. */
export function CodeBlock({ className, ...rest }: CodeBlockProps) {
  return <pre className={cx("ms-code", className)} {...rest} />;
}
