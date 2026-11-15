import * as React from "react";
import { Label } from "moonslip-ui";

export const Variants = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
    <Label>01 / Our purpose</Label>
    <Label variant="key">Slip margin</Label>
    <Label variant="accent">How the verdict is decided</Label>
  </div>
);
