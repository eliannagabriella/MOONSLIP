import * as React from "react";
import { cx } from "../cx";
import { Label } from "./Label";

export interface FieldGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Mono group label, e.g. "Your plan". */
  label?: React.ReactNode;
}

/** A titled group of form fields separated from the previous group by a hairline rule (14px gap). */
export function FieldGroup({ label, className, children, ...rest }: FieldGroupProps) {
  return (
    <div className={cx("ms-group", className)} {...rest}>
      {label && <Label>{label}</Label>}
      {children}
    </div>
  );
}
