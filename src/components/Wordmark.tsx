import * as React from "react";
import { cx } from "../cx";

export interface WordmarkProps extends React.HTMLAttributes<HTMLDivElement> {}

/** Oversized fading Boldonse wordmark (48-210px, light-blue gradient text) used as a footer sign-off. Decorative. */
export function Wordmark({ className, children = "MOON SLIP", ...rest }: WordmarkProps) {
  return (
    <div aria-hidden="true" className={cx("ms-wordmark", className)} {...rest}>
      {children}
    </div>
  );
}
