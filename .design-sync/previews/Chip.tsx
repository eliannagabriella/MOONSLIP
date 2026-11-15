import * as React from "react";
import { Chip } from "moonslip-ui";

export const RowActions = () => (
  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
    <Chip>Open</Chip>
    <Chip>Remove</Chip>
    <Chip>Copy link</Chip>
  </div>
);
