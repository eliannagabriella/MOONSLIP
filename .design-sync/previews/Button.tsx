import * as React from "react";
import { Button } from "moonslip-ui";

export const Variants = () => (
  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
    <Button variant="primary" arrow>Explore landing sites</Button>
    <Button>Pin current scenario</Button>
    <Button variant="ghost">How it works</Button>
  </div>
);

export const Small = () => (
  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
    <Button variant="primary" size="sm" arrow>Explore landing sites</Button>
    <Button size="sm">Pin current scenario</Button>
    <Button variant="ghost" size="sm">Load data.json</Button>
  </div>
);

export const IconAndDisabled = () => (
  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
    <Button iconOnly aria-label="Close">✕</Button>
    <Button variant="primary" disabled>View full validation data</Button>
  </div>
);
