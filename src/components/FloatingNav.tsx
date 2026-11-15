import * as React from "react";
import { cx } from "../cx";
import { Logo } from "./Logo";

export interface NavLink {
  label: string;
  href?: string;
  onClick?: () => void;
  /** Highlight as the current section. */
  active?: boolean;
}

export interface FloatingNavProps extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  /** Section links shown centred (hidden below 760px). */
  links?: NavLink[];
  /** Right-hand slot, usually a small primary Button. */
  action?: React.ReactNode;
  /** Logo content; defaults to the MOON SLIP logotype. */
  logo?: React.ReactNode;
  onLogoClick?: () => void;
  /** Denser, darker glass used once the page has scrolled. */
  scrolled?: boolean;
  /** Pin to the top of the viewport (position: fixed, 16px from top). */
  fixed?: boolean;
}

/** Floating glass pill navigation bar: logotype left, section links centre, one action right. */
export function FloatingNav({ links = [], action, logo, onLogoClick, scrolled, fixed, className, ...rest }: FloatingNavProps) {
  return (
    <nav aria-label="Main" className={cx("ms-nav", fixed && "ms-nav--fixed", scrolled && "ms-nav--scrolled", className)} {...rest}>
      {logo ?? <Logo onClick={onLogoClick} aria-label="Moon Slip home" />}
      <div className="ms-nav__links">
        {links.map((l) =>
          l.href ? (
            <a key={l.label} className="ms-nav__link" href={l.href} aria-current={l.active || undefined}>
              {l.label}
            </a>
          ) : (
            <button key={l.label} type="button" className="ms-nav__link" onClick={l.onClick} aria-current={l.active || undefined}>
              {l.label}
            </button>
          ),
        )}
      </div>
      {action}
    </nav>
  );
}
