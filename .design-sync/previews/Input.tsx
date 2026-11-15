import * as React from "react";
import { Input } from "moonslip-ui";

export const Types = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 260 }}>
    <Input type="date" defaultValue="2026-12-16" aria-label="Landing date" />
    <Input type="number" defaultValue={12} min={0} aria-label="Slip days" />
    <Input type="text" defaultValue="Malapert M1" aria-label="Site name" />
  </div>
);
