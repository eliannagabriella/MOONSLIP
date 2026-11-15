import * as React from "react";
import { ValueDisplay } from "moonslip-ui";

export const SlipValue = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 300, fontSize: 13, color: "var(--mute)" }}>
    <ValueDisplay label="Launch slip" value={12} unit="DAYS" />
    <ValueDisplay label="Mission length" value={10} unit="DAYS" />
  </div>
);
