import * as React from "react";
import { Tag } from "moonslip-ui";

export const AfterNames = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14 }}>
    <span>Shackleton ridge, point A <Tag>terrain</Tag></span>
    <span>IM-1 Odysseus <Tag>verified</Tag> <Tag>polar</Tag></span>
  </div>
);
