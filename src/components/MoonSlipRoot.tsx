import * as React from "react";
import { cx } from "../cx";

export interface MoonSlipRootProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Stretch to the full viewport height (use for whole screens). */
  fullHeight?: boolean;
}

/**
 * Root wrapper for every Moon Slip screen: paints the night-sky gradient ground
 * (#0a0a0c -> #0b1838 -> #4d4177), sets Inter body type, ink colour, focus rings and box-sizing.
 * Wrap the whole app (or each design) in it once; components rendered outside it lose the ground and base type.
 */
export function MoonSlipRoot({ fullHeight = true, className, style, ...rest }: MoonSlipRootProps) {
  return <div className={cx("ms-root", className)} style={{ minHeight: fullHeight ? "100vh" : undefined, ...style }} {...rest} />;
}
