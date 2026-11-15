import * as React from "react";
import { cx } from "../cx";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** `glass` frosted pill (default); `primary` blue gradient glass for the main action; `ghost` outline only. */
  variant?: "glass" | "primary" | "ghost";
  /** `md` 48px tall; `sm` 40px tall. */
  size?: "md" | "sm";
  /** Append the ↗ arrow that nudges on hover (used on "Explore landing sites"). */
  arrow?: boolean;
  /** Round 44px icon-only button (e.g. a ✕ close). Give it an aria-label. */
  iconOnly?: boolean;
  /** Render as a link instead of a button. */
  href?: string;
}

/**
 * Liquid-glass pill button. A soft light follows the pointer across its surface; it lifts on hover and presses on click.
 * One `primary` per view; `glass` for secondary actions; `ghost` for tertiary.
 */
export function Button({ variant = "glass", size = "md", arrow, iconOnly, href, className, children, onPointerMove, type = "button", ...rest }: ButtonProps) {
  const cls = cx(
    "ms-btn",
    variant === "primary" && "ms-btn--primary",
    variant === "ghost" && "ms-btn--ghost",
    size === "sm" && "ms-btn--sm",
    iconOnly && "ms-btn--icon",
    className,
  );
  const track = (e: React.PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  const content = (
    <>
      {children}
      {arrow && (
        <span className="ms-btn__arrow" aria-hidden="true">
          ↗
        </span>
      )}
    </>
  );
  if (href) {
    return (
      <a href={href} className={cls} onPointerMove={track} aria-disabled={rest.disabled || undefined}>
        {content}
      </a>
    );
  }
  return (
    <button
      type={type}
      className={cls}
      onPointerMove={(e) => {
        track(e);
        onPointerMove?.(e);
      }}
      {...rest}
    >
      {content}
    </button>
  );
}
