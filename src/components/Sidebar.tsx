import * as React from "react";
import { cx } from "../cx";
import { Label } from "./Label";
import { Heading } from "./Heading";

export interface SidebarProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  eyebrow?: React.ReactNode;
  /** Boldonse question title, e.g. "Is my site still survivable?" */
  title?: React.ReactNode;
  /** One-line instruction under the title. */
  intro?: React.ReactNode;
}

/** Input sidebar for the planner (pair with a 340px column): eyebrow, Boldonse title, intro, then FieldGroups. */
export function Sidebar({ eyebrow, title, intro, className, children, ...rest }: SidebarProps) {
  return (
    <aside className={cx("ms-sidebar", className)} {...rest}>
      {eyebrow && <Label>{eyebrow}</Label>}
      {title && <Heading variant="sidebar">{title}</Heading>}
      {intro && <p className="ms-sidebar__intro">{intro}</p>}
      {children}
    </aside>
  );
}
