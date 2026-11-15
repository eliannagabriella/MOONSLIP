import * as React from "react";
import { BarRow, Label } from "moonslip-ui";

export const SkylineComparison = () => (
  <div style={{ maxWidth: 520 }}>
    <Label>IM-1 Odysseus · Sun visible over the year</Label>
    <BarRow label="Real skyline" value={34} />
    <BarRow label="Smooth Moon" value={49} />
  </div>
);

export const HighCoverage = () => (
  <div style={{ maxWidth: 520 }}>
    <Label>Shackleton ridge, point A · Sun visible over the year</Label>
    <BarRow label="Real skyline" value={86} />
    <BarRow label="Smooth Moon" value={54} />
  </div>
);
