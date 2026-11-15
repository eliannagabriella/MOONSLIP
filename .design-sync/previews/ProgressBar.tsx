import * as React from "react";
import { ProgressBar, Label } from "moonslip-ui";

export const Levels = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 360 }}>
    <Label variant="key">Sunlit hours · 34%</Label>
    <ProgressBar value={34} />
    <Label variant="key">Earth in view · 72%</Label>
    <ProgressBar value={72} />
  </div>
);
