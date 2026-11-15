import * as React from "react";
import { VerdictPill } from "moonslip-ui";

export const Large = () => (
  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
    <VerdictPill verdict="go" />
    <VerdictPill verdict="caution" />
    <VerdictPill verdict="nogo" />
    <VerdictPill verdict="nodata" />
  </div>
);

export const Small = () => (
  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
    <VerdictPill verdict="go" size="sm" />
    <VerdictPill verdict="caution" size="sm" />
    <VerdictPill verdict="nogo" size="sm" />
  </div>
);
