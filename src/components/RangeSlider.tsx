import * as React from "react";
import { cx } from "../cx";

export interface RangeSliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {}

/** Full-width range slider with the light-blue accent. Pair with ValueDisplay above it. */
export function RangeSlider({ className, ...rest }: RangeSliderProps) {
  return <input type="range" className={cx("ms-range", className)} {...rest} />;
}
