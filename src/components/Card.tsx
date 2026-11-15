import * as React from "react";
import { cx } from "../cx";
import { Label } from "./Label";
import { Heading } from "./Heading";

export interface CardProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  /** Illustration (usually an inline SVG) shown in the 200px glowing media band. */
  media?: React.ReactNode;
  /** Mono eyebrow, e.g. "Step 1". */
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
}

/** Feature card: glowing media band on top, eyebrow + title + muted text below. Lifts 4px on hover. Lay out three across. */
export function Card({ media, eyebrow, title, className, children, ...rest }: CardProps) {
  return (
    <article className={cx("ms-card", className)} {...rest}>
      {media && <div className="ms-card__media">{media}</div>}
      <div className="ms-card__body">
        {eyebrow && <Label>{eyebrow}</Label>}
        {title && <Heading variant="card">{title}</Heading>}
        {typeof children === "string" ? <p>{children}</p> : children}
      </div>
    </article>
  );
}
