import * as React from "react";
import { cx } from "../cx";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** `body` 17px muted paragraph (60ch); `lead` 17-20px light-blue tagline; `small` 13px caption; `error` red alert text. */
  variant?: "body" | "lead" | "small" | "error";
}

/** Paragraph text in the Moon Slip voice: light weight, muted colour, generous measure. */
export function Text({ variant = "body", className, ...rest }: TextProps) {
  return <p className={cx("ms-text", `ms-text--${variant}`, className)} {...rest} />;
}
