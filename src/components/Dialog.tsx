import * as React from "react";
import { cx } from "../cx";
import { Label } from "./Label";
import { Button } from "./Button";

export interface DialogProps extends Omit<React.DialogHTMLAttributes<HTMLDialogElement>, "title"> {
  open: boolean;
  onClose?: () => void;
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  /** Render in-flow (no modal backdrop) - useful for embedding a dialog in a page or preview. */
  inline?: boolean;
}

/**
 * Large modal (max 1100px) with a sticky header (eyebrow, title, round ✕ button) over a blurred backdrop.
 * Use h3 inside the body for mono light-blue sub-section titles.
 */
export function Dialog({ open, onClose, eyebrow, title, inline, className, children, ...rest }: DialogProps) {
  const ref = React.useRef<HTMLDialogElement>(null);
  React.useEffect(() => {
    const d = ref.current;
    if (!d || inline) return;
    if (open && !d.open) d.showModal?.();
    if (!open && d.open) d.close();
  }, [open, inline]);
  return (
    <dialog
      ref={ref}
      open={inline ? open : undefined}
      onClose={onClose}
      className={cx("ms-dialog", inline && "ms-dialog--inline", className)}
      {...rest}
    >
      <div className="ms-dialog__head">
        <div>
          {eyebrow && <Label>{eyebrow}</Label>}
          <h2>{title}</h2>
        </div>
        <Button iconOnly aria-label="Close" onClick={onClose}>
          ✕
        </Button>
      </div>
      <div className="ms-dialog__body">{children}</div>
    </dialog>
  );
}
