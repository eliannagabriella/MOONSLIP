import * as React from "react";
import { cx } from "../cx";

export interface LogoProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

/** The "MOON SLIP" Boldonse logotype as a home button, sized for the FloatingNav. */
export function Logo({ className, children = "MOON SLIP", type = "button", ...rest }: LogoProps) {
  return (
    <button type={type} className={cx("ms-logo", className)} {...rest}>
      {children}
    </button>
  );
}
