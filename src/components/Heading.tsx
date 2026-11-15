import * as React from "react";
import { cx } from "../cx";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * `display` Boldonse hero (40-96px); `section` light Inter 32-56px; `panel` light Inter 24-32px;
   * `card` medium Inter 19px; `sidebar` Boldonse 18px.
   */
  variant?: "display" | "section" | "panel" | "card" | "sidebar";
  /** Heading level; defaults to a sensible level per variant. */
  level?: 1 | 2 | 3 | 4;
}

const defaultLevel = { display: 1, section: 2, panel: 2, card: 3, sidebar: 1 } as const;

/** Moon Slip heading. Light, tightly-tracked Inter for content; Boldonse only for display/brand moments. */
export function Heading({ variant = "section", level, className, ...rest }: HeadingProps) {
  const Tag = `h${level ?? defaultLevel[variant]}` as "h1";
  return <Tag className={cx("ms-heading", `ms-heading--${variant}`, className)} {...rest} />;
}
