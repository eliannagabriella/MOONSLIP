import * as React from "react";
import { cx } from "../cx";
import { Label } from "./Label";
import { Heading } from "./Heading";

export interface PanelProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  /** Mono eyebrow above the title, e.g. "Step 1 · Dates". */
  eyebrow?: React.ReactNode;
  /** Panel title (light Inter, 24-32px). */
  title?: React.ReactNode;
  /** Short muted description shown to the right of the title. */
  description?: React.ReactNode;
  /** Footnote below a hairline rule, in light blue (the "why" line under a verdict). */
  note?: React.ReactNode;
}

/**
 * The main content section of a planner screen: deep-navy translucent card, 36px radius, hairline border.
 * Header = eyebrow + title (+ description); body = children; optional note footer.
 */
export function Panel({ eyebrow, title, description, note, className, children, ...rest }: PanelProps) {
  const hasHeader = eyebrow || title || description;
  return (
    <section className={cx("ms-panel", className)} {...rest}>
      {hasHeader && (
        <div className="ms-panel__header">
          <div>
            {eyebrow && <Label>{eyebrow}</Label>}
            {title && <Heading variant="panel">{title}</Heading>}
          </div>
          {description && <p className="ms-panel__desc">{description}</p>}
        </div>
      )}
      {children}
      {note && <p className="ms-panel__note">{note}</p>}
    </section>
  );
}
