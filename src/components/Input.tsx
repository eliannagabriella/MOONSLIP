import * as React from "react";
import { cx } from "../cx";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Supported looks: number, date, text. */
  type?: "number" | "date" | "text";
}

/** 44px dark glass input in JetBrains Mono (numbers and dates). Wrap in Field for a label. */
export function Input({ type = "text", className, ...rest }: InputProps) {
  return <input type={type} className={cx("ms-input", className)} {...rest} />;
}
